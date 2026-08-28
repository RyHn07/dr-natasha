import { createRoot } from 'react-dom/client'
import './styles.css'

const A = '/assets/'

function Icon({ name, alt = '' }) {
  return <img className="icon" src={`${A}${name}`} alt={alt} />
}

function Arrow() {
  return <span className="arrow"><Icon name="icon-6.svg" /></span>
}

function Header() {
  return <header>
    <div className="topbar">
      <div className="shell topbar-inner">
        <a className="phone" href="tel:0008882222"><Icon name="icon-4.svg" /> <span>000-888-2222</span></a>
        <div className="social-links" aria-label="Social links">
          <a href="#facebook"><Icon name="icon-1.svg" alt="Facebook" /></a>
          <a href="#linkedin"><Icon name="icon-2.svg" alt="LinkedIn" /></a>
          <a href="#google"><Icon name="icon-5.svg" alt="Google" /></a>
        </div>
      </div>
    </div>
    <div className="navigation">
      <div className="shell nav-inner">
        <a className="logo" href="#home"><img src={`${A}icon-3.svg`} alt="Fraser Family Dental" /></a>
        <button className="menu-toggle" aria-label="Open navigation">☰</button>
        <nav>
          <a href="#home">Home</a><a href="#services">Services</a><a href="#doctor">About Dr. Fraser</a>
          <a className="nav-contact" href="#schedule">Contact <Arrow /></a>
        </nav>
      </div>
    </div>
  </header>
}

const services = [
  ['service-cleaning.jpeg', 'Dental Cleanings', 'Our hygienist gently removes plaque, tartar, and stains.'],
  ['service-nightguard.png', 'Nightguard', 'A custom nightguard protects your teeth if you grind or clench.'],
  ['service-dentures.jpeg', 'Dentures and Partials', 'Dentures or partials can help restore your smile and confidence.'],
  ['service-implants.png', 'Implants', 'Dental implants are a long-lasting solution for replacing missing teeth.'],
]

function Hero() {
  return <section id="home" className="hero">
    <div className="hero-photo first" /><div className="hero-photo second" /><div className="hero-overlay" />
    <div className="hero-content">
      <h1>Trusted Care for Healthier, Brighter Smiles</h1>
      <p>At Fraser Family Dental, we believe every patient deserves care that is<br className="desktop" /> personalized, comfortable, and easy to understand.</p>
      <div className="accessibility"><Icon name="icon-7.svg" /> Wheelchair Accessible</div>
      <div className="hero-line" />
    </div>
  </section>
}

function Services() {
  return <section id="services" className="services section">
    <div className="shell">
      <div className="section-intro"><h2>Our Services</h2><p>Whether you need a routine cleaning, restorative treatment, or help with a dental emergency, our team is here to guide you every step of the way.</p></div>
      <div className="service-grid">{services.map(([image, title, text]) => <article className="service-card" key={title}><img src={`${A}${image}`} alt="" /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </div>
  </section>
}

function Doctor() {
  return <section id="doctor" className="doctor section"><div className="shell doctor-wrap"><img src={`${A}doctor.jpeg`} alt="Dr. Natashya Fraser" /><div className="doctor-panel"><h2>Dr. Natashya Fraser, DDS</h2><p>Dr. Natashya Fraser is the owner and lead dentist at Fraser Family Dental, where she is dedicated to providing compassionate, high-quality care to patients of all ages in the Glenville community.</p><p>With many years of experience in general dentistry, Dr. Fraser is known for her gentle approach, attention to detail, and commitment to helping patients feel comfortable and confident in their care.</p><a className="outline-button" href="#doctor">About Dr. Fraser</a></div></div></section>
}

function Testimonials() {
  return <section className="testimonials section"><div className="shell testimonials-wrap"><img className="testimonial-photo" src={`${A}testimonial.jpeg`} alt="Happy dental patient" /><div className="testimonial-content"><div className="testimonial-top"><article><p>Dr. Fraser took the time to explain everything and made me feel completely comfortable.</p><h3>Sarah M.</h3></article><article><p>The whole team was warm, professional, and welcoming from the moment I arrived.</p><h3>Michael R.</h3></article></div><article className="testimonial-bottom"><Icon name="icon-8.svg" /><div><p>My cleaning was gentle and thorough. I left feeling confident about my oral health.</p><h3>Emily T.</h3></div><Icon name="icon-9.svg" /></article></div></div></section>
}

function Schedule() {
  const rows = [['Mon', '8.00AM - 5:00PM'], ['Tue', '8:00AM - 5:00PM'], ['Wed', '8:00AM - 5:00PM'], ['Thu', '8:00AM - 5:00PM']]
  return <section id="schedule" className="schedule section"><div className="shell schedule-content"><h2>Schedule your next Appointment</h2><div className="hours">{rows.map(([day, hours]) => <p key={day}><span>{day}</span><i>:</i><span>{hours}</span></p>)}<p><span>Fri</span><i>:</i><span>8:00AM - 12:00 NOON <em>(on select days)</em></span></p></div><a className="solid-button" href="tel:0008882222">Schedule Now <Arrow /></a></div></section>
}

function Footer() {
  return <footer><div className="shell footer-info"><div className="footer-logo"><img src={`${A}icon-10.svg`} alt="Fraser Family Dental" /></div><div><h2>Fraser Family Dental</h2><p>At Fraser Family Dental, we believe every patient deserves care that is personalized, comfortable, and easy to understand.</p></div></div><div className="shell footer-rule" /><div className="shell footer-bottom"><p>Copyright ©2026 Fraser Family Dental. All rights reserved.</p><div className="footer-social"><a href="#facebook"><Icon name="icon-1.svg" alt="Facebook" /></a><a href="#linkedin"><Icon name="icon-2.svg" alt="LinkedIn" /></a><a href="#google"><Icon name="icon-5.svg" alt="Google" /></a></div></div></footer>
}

function App() { return <><Header /><main><Hero /><Services /><Doctor /><Testimonials /><Schedule /></main><Footer /></> }

createRoot(document.getElementById('root')).render(<App />)
