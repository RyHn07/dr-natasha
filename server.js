import { createReadStream, existsSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('./dist/', import.meta.url))
const types = { '.css': 'text/css', '.js': 'text/javascript', '.html': 'text/html', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon' }

createServer((req, res) => {
  const requestPath = decodeURIComponent((req.url || '/').split('?')[0])
  const candidate = normalize(join(root, requestPath === '/' ? 'index.html' : requestPath))
  const file = candidate.startsWith(root) && existsSync(candidate) ? candidate : join(root, 'index.html')
  res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' })
  createReadStream(file).pipe(res)
}).listen(process.env.PORT || 3000, () => console.log(`Fraser Family Dental is running on port ${process.env.PORT || 3000}`))
