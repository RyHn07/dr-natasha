import { createRoot } from 'react-dom/client'
import './styles.css'
import './services.css'
import './services-overrides.css'
import './about.css'
import './contact.css'

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
          <a href="/">Home</a><a href="/services">Services</a><a href="/about">About Dr. Fraser</a>
          <a className="nav-contact" href="/contact">Contact <Arrow /></a>
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

const serviceGroups = [
  { eyebrow: 'PREVENTIVE SERVICES', image: 'service-cleaning.jpeg', services: [{ title: 'Dental Cleanings', paragraphs: ['During your cleaning, our hygienist gently removes plaque, tartar, and stains from your teeth. We use a combination of hand tools and gentle ultrasonic technology for a thorough clean.', 'After your cleaning, the dentist will complete an exam and oral cancer screening.', 'We typically recommend a cleaning every six months.'] }] },
  { eyebrow: 'Nightguard/ Sleep appliance', image: 'service-nightguard.png', services: [{ title: 'Nightguard', paragraphs: ['A custom nightguard protects your teeth if you grind or clench while sleeping. It fits comfortably and helps prevent damage over time.'] }, { title: 'Sleep Appliance', paragraphs: ['For patients diagnosed with mild to moderate sleep apnea, a custom sleep appliance can help keep your airway open during sleep. This can reduce snoring and improve breathing at night.'] }] },
  { eyebrow: 'Dentures', image: 'service-dentures.jpeg', services: [{ title: 'Dentures and Partials', paragraphs: ['If you are missing teeth or having difficulty chewing, dentures or partials can help restore your smile and confidence.', 'We offer several options, including full dentures, partial dentures, and implant-supported dentures for added stability.', 'Our goal is to make sure your dentures fit comfortably and allow you to speak and eat with confidence. We will work closely with you to make any needed adjustments.'] }] },
  { eyebrow: 'Root canal', image: 'service-root-canal.png', services: [{ title: 'Root Canal Therapy', paragraphs: ['If you are experiencing severe or persistent tooth pain, a root canal may help save your natural tooth.', 'During the procedure, the infected tissue inside the tooth is gently removed, and the tooth is cleaned, sealed, and protected—often with a crown.', 'With modern techniques and local anesthesia, the procedure is designed to be as comfortable as possible.'] }] },
  { eyebrow: 'Extractions', image: 'service-extractions.png', services: [{ title: 'Extractions', paragraphs: ['Tooth extraction may be recommended if a tooth cannot be safely restored due to damage or bone loss.', 'We use local anesthesia to keep you comfortable during the procedure, and we’ll walk you through your options for replacing the tooth - such as implants, bridges, or dentures.'] }] },
  { eyebrow: 'Implants', image: 'service-implants.png', services: [{ title: 'Implants', paragraphs: ['Dental implants are a long-lasting solution for replacing missing teeth.', 'After the implant is placed and fully healed, a custom crown, bridge, or denture is attached to restore your smile, function, and confidence.'] }] },
  { eyebrow: 'Cosmetic Dentistry', image: 'service-veneers.png', services: [{ title: 'Dental Veneers', paragraphs: ['Veneers are a great option if you’d like to improve the appearance of your smile. They can help correct discoloration, small gaps, uneven shape, or minor misalignment.', 'Porcelain veneers are custom-made to fit over your teeth and create a natural, polished look. Composite veneers can often be completed in a single visit.'] }] }
]

function ServicesPage() {
  return <><Header /><main className="services-page"><section className="services-hero"><div><p>Fraser Family Dental</p><h1>Dental Services</h1><span>Care tailored to your smile, comfort, and long-term oral health.</span></div></section><section className="service-page-intro"><div className="narrow"><p className="eyebrow">OUR APPROACH</p><h2>Thoughtful dentistry for every stage of life.</h2><p>Explore the services we offer to help you maintain, restore, and feel confident in your smile.</p></div></section><div className="service-page-list">{serviceGroups.map((group, index) => <section className={`service-detail ${index % 2 ? 'reverse' : ''}`} key={group.eyebrow}><div className="service-detail-image"><img src={`${A}${group.image}`} alt="" /></div><div className="service-detail-copy"><p className="eyebrow">{group.eyebrow}</p>{group.services.map(service => <article key={service.title}><h2>{service.title}</h2>{service.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</article>)}</div></section>)}</div><section className="services-cta"><div><p className="eyebrow">YOUR NEXT VISIT</p><h2>Ready to care for your smile?</h2><a className="solid-button" href="tel:0008882222">Schedule Now <Arrow /></a></div></section></main><Footer /></>
}

function Doctor() {
  return <section id="doctor" className="doctor section"><div className="shell doctor-wrap"><img src={`${A}doctor-figma.png`} alt="Dr. Natashya Fraser" /><div className="doctor-panel"><h2>Dr. Natashya Fraser, DDS</h2><p>Dr. Natashya Fraser is the owner and lead dentist at Fraser Family Dental, where she is dedicated to providing compassionate, high-quality care to patients of all ages in the Glenville community.</p><p>With many years of experience in general dentistry, Dr. Fraser is known for her gentle approach, attention to detail, and commitment to helping patients feel comfortable and confident in their care.</p><a className="outline-button" href="/about">About Dr. Fraser</a></div></div></section>
}

function Testimonials() {
  return <section className="testimonials section"><div className="shell testimonials-wrap"><img className="testimonial-photo" src={`${A}testimonial-figma.png`} alt="Happy dental patient" /><div className="testimonial-content"><div className="testimonial-top"><article><p>Dr. Fraser took the time to explain everything and made me feel completely comfortable.</p><h3>Sarah M.</h3></article><article><p>The whole team was warm, professional, and welcoming from the moment I arrived.</p><h3>Michael R.</h3></article></div><article className="testimonial-bottom"><Icon name="icon-8.svg" /><div><p>My cleaning was gentle and thorough. I left feeling confident about my oral health.</p><h3>Emily T.</h3></div><Icon name="icon-9.svg" /></article></div></div></section>
}

function Schedule() {
  const rows = [['Mon', '8.00AM - 5:00PM'], ['Tue', '8:00AM - 5:00PM'], ['Wed', '8:00AM - 5:00PM'], ['Thu', '8:00AM - 5:00PM']]
  return <section id="schedule" className="schedule section"><div className="shell schedule-content"><h2>Schedule your next Appointment</h2><div className="hours">{rows.map(([day, hours]) => <p key={day}><span>{day}</span><i>:</i><span>{hours}</span></p>)}<p><span>Fri</span><i>:</i><span>8:00AM - 12:00 NOON <em>(on select days)</em></span></p></div><a className="solid-button" href="tel:0008882222">Schedule Now <Arrow /></a></div></section>
}

function Footer() {
  return <footer><div className="shell footer-info"><div className="footer-logo"><img src={`${A}icon-10.svg`} alt="Fraser Family Dental" /></div><div><h2>Fraser Family Dental</h2><p>At Fraser Family Dental, we believe every patient deserves care that is personalized, comfortable, and easy to understand.</p></div></div><div className="shell footer-rule" /><div className="shell footer-bottom"><p>Copyright ©2026 Fraser Family Dental. All rights reserved.</p><div className="footer-social"><a href="#facebook"><Icon name="icon-1.svg" alt="Facebook" /></a><a href="#linkedin"><Icon name="icon-2.svg" alt="LinkedIn" /></a><a href="#google"><Icon name="icon-5.svg" alt="Google" /></a></div></div></footer>
}

function HomePage() { return <><Header /><main><Hero /><Services /><Doctor /><Testimonials /><Schedule /></main><Footer /></> }
function AboutPage() {
  const background = ['Restorative treatments such as crowns, fillings, and bridges', 'Root canal therapy and extractions, including surgical procedures', 'Dentures, partials, and implant restorations', 'Cosmetic dentistry, including veneers and Invisalign', 'Treatment planning tailored to each patient’s needs']
  return <><Header /><main className="about-page"><section className="about-hero"><div className="shell about-hero-grid"><div className="about-hero-copy"><p className="eyebrow">ABOUT DR. FRASER</p><h1>Dr. Natashya Fraser, DDS</h1><div className="about-rule" /><p>Dr. Natashya Fraser is the owner and lead dentist at Fraser Family Dental, where she is dedicated to providing compassionate, high-quality care to patients of all ages in the Glenville community.</p><p>With many years of experience in general dentistry, Dr. Fraser is known for her gentle approach, attention to detail, and commitment to helping patients feel comfortable and confident in their care.</p></div><div className="about-portrait"><img src={`${A}doctor-figma.png`} alt="Dr. Natashya Fraser" /></div></div></section><section className="about-profile shell"><aside className="credentials"><p className="eyebrow">PROFESSIONAL PROFILE</p><h2>Education &amp;<br />Training</h2><ul><li>General Practice Residency – Bronx-Lebanon Hospital Center, Bronx, NY</li><li>Doctor of Dental Surgery (DDS) – Meharry Medical College School of Dentistry, Nashville, TN</li><li>Bachelor of Science – Pennsylvania State University</li></ul><div className="license"><span>LICENSED IN</span><strong>New York &amp; Vermont</strong></div></aside><div className="about-details"><article><p className="eyebrow">EXPERIENCE &amp; APPROACH</p><h2>Experience &amp; Approach</h2><p>Dr. Fraser has extensive experience in all aspects of general dentistry, including preventive care, restorative treatment, cosmetic procedures, and emergency care.</p><p>She has provided dental services in both private practices and community health settings, caring for a wide range of patients - from young children to seniors, including individuals with complex medical and dental needs.</p><h3>Her background includes:</h3><ul className="experience-list">{background.map(item => <li key={item}>{item}</li>)}</ul><p>She also has experience providing care in hospital settings for patients who require additional support, including medically compromised individuals and patients with special needs.</p></article><article className="patient-care"><p className="eyebrow">A COMMITMENT TO PATIENT CARE</p><h2>A Commitment to Patient Care</h2><p>Dr. Fraser believes that great dental care starts with listening. She takes the time to understand each patient’s needs, explain treatment options clearly, and create a plan that feels right for them.</p><p>Her goal is to make every visit as comfortable and stress-free as possible - whether you’re coming in for routine care or more complex treatment.</p></article></div></section><section className="about-cta"><div><p className="eyebrow">MEET DR. FRASER</p><h2>Comfortable, thoughtful care begins here.</h2><a className="solid-button" href="tel:0008882222">Schedule Now <Arrow /></a></div></section></main><Footer /></>
}
function ContactPage() {
  const hours = [['Monday – Thursday', '8:00 AM – 5:00 PM'], ['Friday', '8:00 AM – 12:00 Noon'], ['Saturday – Sunday', 'Closed']]
  return <><Header /><main className="contact-page"><section className="contact-hero"><div className="shell"><p className="eyebrow">FRASER FAMILY DENTAL</p><h1>We’re here to help you smile.</h1><p>Reach out to schedule your next visit or ask our team a question.</p></div></section><section className="contact-main shell"><aside className="contact-info"><p className="eyebrow">GET IN TOUCH</p><h2>Let’s talk about your dental care.</h2><a className="contact-phone" href="tel:0008882222"><Icon name="icon-4.svg" /><span>000-888-2222</span></a><p className="contact-note">Call our friendly team to schedule an appointment or to discuss your care needs.</p><div className="office-hours"><h3>Office Hours</h3>{hours.map(([day, time]) => <p key={day}><span>{day}</span><strong>{time}</strong></p>)}</div></aside><section className="contact-form-wrap"><p className="eyebrow">SEND A MESSAGE</p><h2>Request an appointment</h2><p>Tell us how we can help, and our team will get back to you as soon as possible.</p><form onSubmit={event => event.preventDefault()}><div className="field-row"><label>First name<input name="firstName" type="text" autoComplete="given-name" required /></label><label>Last name<input name="lastName" type="text" autoComplete="family-name" required /></label></div><div className="field-row"><label>Phone number<input name="phone" type="tel" autoComplete="tel" required /></label><label>Email address<input name="email" type="email" autoComplete="email" required /></label></div><label>How can we help?<textarea name="message" rows="5" /></label><button className="solid-button" type="submit">Send Message <Arrow /></button></form></section></section><section className="contact-reassurance"><div className="shell"><p className="eyebrow">YOUR COMFORT COMES FIRST</p><h2>Compassionate care, clear answers, and a team that listens.</h2></div></section></main><Footer /></>
}
function App() { const path = window.location.pathname.replace(/\/$/, ''); return path === '/services' ? <ServicesPage /> : path === '/about' ? <AboutPage /> : path === '/contact' ? <ContactPage /> : <HomePage /> }

createRoot(document.getElementById('root')).render(<App />)
