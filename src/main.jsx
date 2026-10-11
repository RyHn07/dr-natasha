import { createRoot } from "react-dom/client";
import { useEffect, useRef, useState } from "react";
import "./styles.css";
import "./services.css";
import "./services-overrides.css";
import "./about.css";
import "./about-overrides.css";
import "./contact.css";

const A = "/assets/";

function Icon({ name, alt = "" }) {
  return <img className="icon" src={`${A}${name}`} alt={alt} />;
}

function Arrow() {
  return (
    <span className="arrow">
      <Icon name="icon-6.svg" />
    </span>
  );
}

function Header() {
  return (
    <header>
      <div className="topbar">
        <div className="shell topbar-inner">
          <a className="phone" href="tel:5183999450">
            <Icon name="icon-4.svg" /> <span>518-399-9450</span>
          </a>
          <div className="social-links" aria-label="Social links">
            <a href="#facebook">
              <Icon name="icon-1.svg" alt="Facebook" />
            </a>
            <a href="#linkedin">
              <Icon name="icon-2.svg" alt="LinkedIn" />
            </a>
            <a href="#google">
              <Icon name="icon-5.svg" alt="Google" />
            </a>
          </div>
        </div>
      </div>
      <div className="navigation">
        <div className="shell nav-inner">
          <a className="logo" href="#home">
            <img src={`${A}icon-10.svg`} alt="Fraser Family Dental" />
          </a>
          <button className="menu-toggle" aria-label="Open navigation">
            ☰
          </button>
          <nav>
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/about">About Dr. Fraser</a>
            <a className="nav-contact" href="/contact">
              Contact <Arrow />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

const serviceCategories = [
  { id: "preventive-services", title: "Preventive Services", tone: "preventive" },
  { id: "restorative-services", title: "Restorative Services", tone: "restorative" },
  { id: "cosmetic-dentistry", title: "Cosmetic Dentistry", tone: "cosmetic" },
];

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-photo" />
      <div className="hero-content">
        <h1>Trusted Care for Healthier, Brighter Smiles</h1>
        <p>
          At Fraser Family Dental, we believe every patient deserves care that
          is
          <br className="desktop" /> personalized, comfortable, and easy to
          understand.
        </p>
        <div className="accessibility">
          <Icon name="icon-7.svg" /> Wheelchair Accessible
        </div>
        <div className="hero-line" />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="services section">
      <div className="shell">
        <div className="section-intro">
          <h2>Our Services</h2>
          <p>
            Whether you need a routine cleaning, restorative treatment, or help
            with a dental emergency, our team is here to guide you every step of
            the way.
          </p>
        </div>
        <div className="service-category-grid">
          {serviceCategories.map((category) => (
            <a
              className={`service-category-card ${category.tone}`}
              href={`/services#${category.id}`}
              key={category.id}
            >
              <span>{category.title}</span>
              <span className="service-category-link">
                Explore treatments <Arrow />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const serviceGroups = [
  {
    id: "preventive-services",
    eyebrow: "PREVENTIVE SERVICES",
    image: "service-cleaning.jpeg",
    services: [
      {
        title: "Dental Cleanings",
        paragraphs: [
          "During your cleaning, our hygienist gently removes plaque, tartar, and stains from your teeth. We use a combination of hand tools and gentle ultrasonic technology for a thorough clean.",
          "After your cleaning, the dentist will complete an exam and oral cancer screening.",
          "We typically recommend a cleaning every six months.",
        ],
      },
      {
        title: "Sealants",
        paragraphs: [
          "To prevent decay on premolars and molars, a thin coating of sealant material is applied to fill in the deep grooves on your teeth.",
          "The sealant serves as a barrier against plaque, acids and food particles. Kids as well as adults can benefit from sealants.",
          "The procedure is fast, painless and doesn't require the use of a drill.",
        ],
      },
    ],
  },
  {
    id: "restorative-services",
    eyebrow: "RESTORATIVE SERVICES",
    image: "service-implants.png",
    services: [
      {
        title: "Dental Fillings",
        paragraphs: [
          "Tooth filling or bonding may be a great option for restoring your teeth when there is a cavity, a small fracture or a chipped tooth surface.",
          "To provide a natural-looking result, a dental filling shade is selected to match your natural tooth color.",
          "This treatment can be completed in one appointment.",
        ],
      },
      {
        title: "Nightguard",
        paragraphs: [
          "A custom nightguard protects your teeth if you grind or clench while sleeping. It fits comfortably and helps prevent damage over time.",
        ],
      },
      {
        title: "Sleep Appliance",
        paragraphs: [
          "For patients diagnosed with mild to moderate sleep apnea, a custom sleep appliance can help keep your airway open during sleep. This can reduce snoring and improve breathing at night.",
        ],
      },
    ],
  },
  {
    eyebrow: "Dentures",
    image: "service-dentures.jpeg",
    services: [
      {
        title: "Dentures and Partials",
        paragraphs: [
          "If you are missing teeth or having difficulty chewing, dentures or partials can help restore your smile and confidence.",
          "We offer several options, including full dentures, partial dentures, and implant-supported dentures for added stability.",
          "Our goal is to make sure your dentures fit comfortably and allow you to speak and eat with confidence. We will work closely with you to make any needed adjustments.",
        ],
      },
    ],
  },
  {
    eyebrow: "Root canal",
    image: "service-root-canal.png",
    services: [
      {
        title: "Root Canal Therapy",
        paragraphs: [
          "If you are experiencing severe or persistent tooth pain, a root canal may help save your natural tooth.",
          "During the procedure, the infected tissue inside the tooth is gently removed, and the tooth is cleaned, sealed, and protected—often with a crown.",
          "With modern techniques and local anesthesia, the procedure is designed to be as comfortable as possible.",
        ],
      },
    ],
  },
  {
    eyebrow: "Extractions",
    image: "service-extractions.png",
    services: [
      {
        title: "Extractions",
        paragraphs: [
          "Tooth extraction may be recommended if a tooth cannot be safely restored due to damage or bone loss.",
          "We use local anesthesia to keep you comfortable during the procedure, and we’ll walk you through your options for replacing the tooth - such as implants, bridges, or dentures.",
        ],
      },
    ],
  },
  {
    eyebrow: "Implant Restoration",
    image: "service-nightguard.png",
    services: [
      {
        title: "Implant Restoration",
        paragraphs: [
          "Dental implants are a long-lasting solution for replacing missing teeth.",
          "After the implant is placed and fully healed, a custom crown, bridge, or denture is attached to restore your smile, function, and confidence.",
        ],
      },
    ],
  },
  {
    id: "cosmetic-dentistry",
    eyebrow: "Cosmetic Dentistry",
    image: "service-veneers.png",
    services: [
      {
        title: "Dental Veneers",
        paragraphs: [
          "Veneers are a great option if you’d like to improve the appearance of your smile. They can help correct discoloration, small gaps, uneven shape, or minor misalignment.",
          "Porcelain veneers are custom-made to fit over your teeth and create a natural, polished look. Composite veneers can often be completed in a single visit.",
        ],
      },
      {
        title: "Dental Crown and Bridge",
        paragraphs: [
          "Crowns and bridges esthetically resemble natural teeth.",
          "A crown is for a single tooth that is significantly damaged.",
          "For patients who are missing one to three teeth in one area and are interested in a cheaper and less invasive alternative option to implant placement, a dental bridge may be an option for you.",
        ],
      },
    ],
  },
];

const servicePageCategories = [
  {
    id: "preventive-services",
    title: "Preventive Services",
    description: "Protect your smile with routine care that helps prevent dental problems before they start.",
    tone: "preventive",
    services: [
      ...serviceGroups[0].services,
      serviceGroups[1].services[1],
      serviceGroups[1].services[2],
    ],
  },
  {
    id: "restorative-services",
    title: "Restorative Services",
    description: "Comfortable treatment options to restore function, relieve discomfort, and rebuild your confidence.",
    tone: "restorative",
    services: [
      serviceGroups[1].services[0],
      ...serviceGroups.slice(2, 5).flatMap((group) => group.services),
    ],
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    description: "Personalized options that help you feel more confident in the look of your smile.",
    tone: "cosmetic",
    services: [serviceGroups[5].services[0], ...serviceGroups[6].services],
  },
];

const serviceImageByTitle = {
  "Dental Cleanings": "service-cleaning-figma.jpeg",
  Sealants: "service-sealants.png",
  "Dental Fillings": "service-fillings.png",
  Nightguard: "service-nightguard-figma.jpeg",
  "Sleep Appliance": "service-sleep-appliance-v2.png",
  "Dentures and Partials": "service-dentures-v2.png",
  "Root Canal Therapy": "service-root-canal-figma.jpeg",
  Extractions: "service-extractions-figma.jpeg",
  "Implant Restoration": "service-crown-bridge.png",
  "Dental Veneers": "service-veneers-v2.png",
  "Dental Crown and Bridge": "service-crown-bridge-v2.png",
};

function TreatmentCarousel({ category, activeTitle, onSelect }) {
  const trackRef = useRef(null);
  const [navigation, setNavigation] = useState({ previous: false, next: false });

  const updateNavigation = () => {
    const track = trackRef.current;
    if (!track) return;
    const overflow = track.scrollWidth - track.clientWidth;
    setNavigation({
      previous: track.scrollLeft > 4,
      next: overflow > 4 && track.scrollLeft < overflow - 4,
    });
  };

  useEffect(() => {
    updateNavigation();
    window.addEventListener("resize", updateNavigation);
    return () => window.removeEventListener("resize", updateNavigation);
  }, [category.services.length]);

  const move = (direction) => {
    const track = trackRef.current;
    track?.scrollBy({ left: direction * Math.max(track.clientWidth * 0.78, 280), behavior: "smooth" });
  };

  return (
    <div className="treatment-carousel" aria-label={`${category.title} treatments`}>
      {navigation.previous && <button className="carousel-arrow previous" type="button" onClick={() => move(-1)} aria-label={`Previous ${category.title} treatments`}>←</button>}
      <div className="treatment-grid" ref={trackRef} onScroll={updateNavigation}>
        {category.services.map((service) => (
          <button className={`treatment-card${activeTitle === service.title ? " is-active" : ""}`} key={service.title} type="button" onClick={() => onSelect(service.title)} aria-expanded={activeTitle === service.title}>
            <div className="treatment-card-media">
              <img className="treatment-card-image" src={`${A}${serviceImageByTitle[service.title]}`} alt={service.title} />
            </div>
            <div className="treatment-card-body"><h3>{service.title}</h3></div>
          </button>
        ))}
      </div>
      {navigation.next && <button className="carousel-arrow next" type="button" onClick={() => move(1)} aria-label={`Next ${category.title} treatments`}>→</button>}
    </div>
  );
}

function ServicesPage() {
  const [activeServices, setActiveServices] = useState({});

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const target = document.getElementById(hash);
    requestAnimationFrame(() => target?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, []);

  return (
    <>
      <Header />
      <main className="services-page">
        <section className="services-hero" aria-label="Dental services introduction">
          <div>
            <p>Fraser Family Dental</p>
            <h1>Dental Services</h1>
            <span>
              Care tailored to your smile, comfort, and long-term oral health.
            </span>
          </div>
        </section>
        <section className="service-page-intro">
          <div className="narrow">
            <p>
              Explore the services we offer to help you maintain, restore, and
              feel confident in your smile.
            </p>
          </div>
        </section>
        <div className="service-category-list">
          {servicePageCategories.map((category) => (
            <section className={`service-category ${category.tone}`} id={category.id} key={category.id}>
              <div className="service-category-heading">
                <div>
                  <p className="eyebrow">Fraser Family Dental</p>
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                </div>
              </div>
              <TreatmentCarousel category={category} activeTitle={activeServices[category.id]} onSelect={(title) => setActiveServices((current) => ({ ...current, [category.id]: title }))} />
              {activeServices[category.id] && (() => {
                const service = category.services.find(({ title }) => title === activeServices[category.id]);
                return <div className="treatment-modal-backdrop" role="presentation" onClick={() => setActiveServices((current) => ({ ...current, [category.id]: null }))}>
                  <article className={`treatment-detail ${category.tone}`} role="dialog" aria-modal="true" aria-label={service.title} aria-live="polite" onClick={(event) => event.stopPropagation()}>
                    <img src={`${A}${serviceImageByTitle[service.title]}`} alt={service.title} />
                    <div>
                      <button className="treatment-modal-close" type="button" aria-label="Close details" onClick={() => setActiveServices((current) => ({ ...current, [category.id]: null }))}>×</button>
                      <p className="eyebrow">Fraser Family Dental</p>
                      <h3>{service.title}</h3>
                      {service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  </article>
                </div>;
              })()}
            </section>
          ))}
        </div>
        <section className="services-cta">
          <div>
            <p className="eyebrow">YOUR NEXT VISIT</p>
            <h2>Ready to care for your smile?</h2>
            <a className="solid-button" href="/contact">
              Schedule Now <Arrow />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Doctor() {
  return (
    <section id="doctor" className="doctor section">
      <div className="shell doctor-wrap">
        <img src={`${A}doctor-figma.png`} alt="Dr. Natashya Fraser" />
        <div className="doctor-panel">
          <h2>Dr. Natashya Fraser, DDS</h2>
          <p>
            Dr. Natashya Fraser is the owner and lead dentist at Fraser Family
            Dental, where she is dedicated to providing compassionate,
            high-quality care to patients of all ages in the Glenville
            community.
          </p>
          <p>
            With many years of experience in general dentistry, Dr. Fraser is
            known for her gentle approach, attention to detail, and commitment
            to helping patients feel comfortable and confident in their care.
          </p>
          <a className="outline-button" href="/about">
            About Dr. Fraser
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { quote: "Dr. Fraser took the time to explain everything and made me feel completely comfortable.", name: "Sarah M." },
    { quote: "The whole team was warm, professional, and welcoming from the moment I arrived.", name: "Michael R." },
    { quote: "My cleaning was gentle and thorough. I left feeling confident about my oral health.", name: "Emily T." },
  ];
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActiveTestimonial((current) => (current + 1) % testimonials.length), 6000);
    return () => window.clearInterval(timer);
  }, [testimonials.length]);
  const testimonial = testimonials[activeTestimonial];
  const changeTestimonial = (direction) => setActiveTestimonial((current) => (current + direction + testimonials.length) % testimonials.length);
  return (
    <section className="testimonials section" aria-label="Patient testimonials">
      <div className="shell testimonials-wrap">
        <div className="testimonial-content">
          <p className="eyebrow">Testimonials</p>
          <h2>What Our Patients Say About Us</h2>
          <article className="testimonial-slide" aria-live="polite">
            <span className="testimonial-quote-mark" aria-hidden="true">“</span>
            <p>{testimonial.quote}</p>
            <h3>{testimonial.name}</h3>
          </article>
          <div className="testimonial-controls">
            <button type="button" onClick={() => changeTestimonial(-1)} aria-label="Previous testimonial">←</button>
            <div className="testimonial-dots" aria-label="Choose testimonial">
              {testimonials.map((item, index) => <button key={item.name} type="button" onClick={() => setActiveTestimonial(index)} className={index === activeTestimonial ? "is-active" : ""} aria-label={`Show testimonial ${index + 1}`} aria-current={index === activeTestimonial} />)}
            </div>
            <button type="button" onClick={() => changeTestimonial(1)} aria-label="Next testimonial">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  const rows = [
    ["Mon", "8.00AM - 5:00PM"],
    ["Tue", "8:00AM - 5:00PM"],
    ["Wed", "8:00AM - 5:00PM"],
    ["Thu", "8:00AM - 5:00PM"],
  ];
  return (
    <section id="schedule" className="schedule section">
      <div className="shell schedule-content">
        <h2>Schedule your next Appointment</h2>
        <p className="schedule-copy">
          Our goal is to help you maintain a healthy smile for life - while making
          every visit as relaxed and stress-free as possible.
        </p>
        <div className="hours">
          {rows.map(([day, hours]) => (
            <p key={day}>
              <span>{day}</span>
              <i>:</i>
              <span>{hours}</span>
            </p>
          ))}
          <p>
            <span>Fri</span>
            <i>:</i>
            <span>
              8:00AM - 12:00 NOON <em>(on select days)</em>
            </span>
          </p>
        </div>
        <a className="solid-button" href="/contact">
          Schedule Now <Arrow />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="shell footer-info">
        <div className="footer-logo">
          <img src={`${A}icon-10.svg`} alt="Fraser Family Dental" />
        </div>
        <div>
          <h2>Fraser Family Dental</h2>
          <p>
            At Fraser Family Dental, we believe every patient deserves care that
            is personalized, comfortable, and easy to understand.
          </p>
        </div>
      </div>
      <div className="shell footer-rule" />
      <div className="shell footer-bottom">
        <p>Copyright ©2026 Fraser Family Dental. All rights reserved.</p>
        <div className="footer-social">
          <a href="#facebook">
            <Icon name="icon-1.svg" alt="Facebook" />
          </a>
          <a href="#linkedin">
            <Icon name="icon-2.svg" alt="LinkedIn" />
          </a>
          <a href="#google">
            <Icon name="icon-5.svg" alt="Google" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Doctor />
        <Testimonials />
        <Schedule />
      </main>
      <Footer />
    </>
  );
}
function AboutPage() {
  const background = [
    "Restorative treatments such as crowns, fillings, and bridges",
    "Root canal therapy and extractions, including surgical procedures",
    "Dentures, partials, and implant restorations",
    "Cosmetic dentistry, including veneers and Invisalign",
    "Treatment planning tailored to each patient’s needs",
  ];
  return (
    <>
      <Header />
      <main className="about-page">
        <section className="about-hero">
          <div className="shell about-hero-grid">
            <div className="about-hero-copy">
              <p className="eyebrow">ABOUT DR. FRASER</p>
              <h1>Dr. Natashya Fraser, DDS</h1>
              <div className="about-rule" />
              <p>
                Dr. Natashya Fraser is the owner and lead dentist at Fraser
                Family Dental, where she is dedicated to providing
                compassionate, high-quality care to patients of all ages in the
                Glenville community.
              </p>
              <p>
                With many years of experience in general dentistry, Dr. Fraser
                is known for her gentle approach, attention to detail, and
                commitment to helping patients feel comfortable and confident in
                their care.
              </p>
            </div>
            <div className="about-portrait">
              <img src={`${A}doctor-figma.png`} alt="Dr. Natashya Fraser" />
            </div>
          </div>
        </section>
        <section className="about-profile shell">
          <aside className="credentials">
            <p className="eyebrow">PROFESSIONAL PROFILE</p>
            <h2>
              Education &amp;
              <br />
              Training
            </h2>
            <ul>
              <li>
                General Practice Residency – Bronx-Lebanon Hospital Center,
                Bronx, NY
              </li>
              <li>
                Doctor of Dental Surgery (DDS) – Meharry Medical College School
                of Dentistry, Nashville, TN
              </li>
              <li>Bachelor of Science – Pennsylvania State University</li>
            </ul>
            <div className="license">
              <span>LICENSED IN</span>
              <strong>New York &amp; Vermont</strong>
            </div>
          </aside>
          <div className="about-details">
            <article>
              <p className="eyebrow">EXPERIENCE &amp; APPROACH</p>
              <h2>Experience &amp; Approach</h2>
              <p>
                Dr. Fraser has extensive experience in all aspects of general
                dentistry, including preventive care, restorative treatment,
                cosmetic procedures, and emergency care.
              </p>
              <p>
                She has provided dental services in both private practices and
                community health settings, caring for a wide range of patients -
                from young children to seniors, including individuals with
                complex medical and dental needs.
              </p>
              <h3>Her background includes:</h3>
              <ul className="experience-list">
                {background.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                She also has experience providing care in hospital settings for
                patients who require additional support, including medically
                compromised individuals and patients with special needs.
              </p>
            </article>
            <article className="patient-care">
              <p className="eyebrow">A COMMITMENT TO PATIENT CARE</p>
              <h2>A Commitment to Patient Care</h2>
              <p>
                Dr. Fraser believes that great dental care starts with
                listening. She takes the time to understand each patient’s
                needs, explain treatment options clearly, and create a plan that
                feels right for them.
              </p>
              <p>
                Her goal is to make every visit as comfortable and stress-free
                as possible - whether you’re coming in for routine care or more
                complex treatment.
              </p>
            </article>
          </div>
        </section>
        <section className="about-cta">
          <div>
            <p className="eyebrow">MEET DR. FRASER</p>
            <h2>Comfortable, thoughtful care begins here.</h2>
            <a className="solid-button" href="tel:5183999450">
              Schedule Now <Arrow />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
function ContactPage() {
  const hours = [
    ["Mon", "8:00 AM – 5:00 PM"],
    ["Tue", "8:00 AM – 5:00 PM"],
    ["Wed", "8:00 AM – 5:00 PM"],
    ["Thu", "8:00 AM – 5:00 PM"],
    ["Fri", "8:00 AM – 12:00 Noon"],
  ];
  return (
    <>
      <Header />
      <main className="contact-page">
        <section className="contact-hero">
          <div className="shell">
            <p className="eyebrow">FRASER FAMILY DENTAL</p>
            <h1>We’re here to help you smile.</h1>
            <p>
              Reach out to schedule your next visit or ask our team a question.
            </p>
          </div>
        </section>
        <section className="contact-main shell">
          <aside className="contact-info">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>Let’s talk about your dental care.</h2>
            <a className="contact-phone" href="tel:5183999450">
              <Icon name="icon-4.svg" />
              <span>518-399-9450</span>
            </a>
            <p className="contact-note">
              Call our friendly team to schedule an appointment or to discuss
              your care needs.
            </p>
            <div className="office-hours">
              <h3>Office Hours</h3>
              {hours.map(([day, time]) => (
                <p key={day}>
                  <span>{day}</span>
                  <i>:</i>
                  <strong>{time}</strong>
                </p>
              ))}
            </div>
          </aside>
          <section className="contact-form-wrap">
            <p className="eyebrow">SEND A MESSAGE</p>
            <h2>Request an appointment</h2>
            <p>
              Tell us how we can help, and our team will get back to you as soon
              as possible.
            </p>
            <form onSubmit={(event) => event.preventDefault()}>
              <div className="field-row">
                <label>
                  First name
                  <input
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                  />
                </label>
                <label>
                  Last name
                  <input
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                  />
                </label>
              </div>
              <div className="field-row">
                <label>
                  Phone number
                  <input name="phone" type="tel" autoComplete="tel" required />
                </label>
                <label>
                  Email address
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>
              <label>
                How can we help?
                <textarea name="message" rows="5" />
              </label>
              <button className="solid-button" type="submit">
                Send Message <Arrow />
              </button>
            </form>
          </section>
        </section>
        <section className="contact-reassurance">
          <div className="shell">
            <p className="eyebrow">YOUR COMFORT COMES FIRST</p>
            <h2>Compassionate care, clear answers, and a team that listens.</h2>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
function App() {
  const path = window.location.pathname.replace(/\/$/, "");
  return path === "/services" ? (
    <ServicesPage />
  ) : path === "/about" ? (
    <AboutPage />
  ) : path === "/contact" ? (
    <ContactPage />
  ) : (
    <HomePage />
  );
}

createRoot(document.getElementById("root")).render(<App />);
