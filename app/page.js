import ContactForm from "./ContactForm";
import Navbar from "./Navbar";

const img = (id, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const services = [
  {
    icon: "👥",
    title: "Recruitment & Staffing",
    items: ["Permanent Hiring", "Contract Staffing", "Executive Search", "Bulk Hiring"],
  },
  {
    icon: "📋",
    title: "HR Consulting",
    items: ["HR Policy Development", "Organization Structure", "Performance Management", "HR Audits"],
  },
  {
    icon: "💳",
    title: "Payroll Management",
    items: ["Salary Processing", "Payslips", "Statutory Compliance"],
  },
  {
    icon: "⚖️",
    title: "Compliance Services",
    items: ["PF & ESIC", "Labour Law Compliance", "Contract Labour Compliance", "Employee Documentation"],
  },
];

const reasons = [
  ["🎓", "Experienced HR Professionals", "Seasoned experts who understand your workforce needs."],
  ["🧩", "Customized HR Solutions", "Solutions tailored to your business, size and industry."],
  ["⚡", "Fast Turnaround Time", "Quick, reliable delivery without compromising quality."],
  ["💡", "Cost-Effective Services", "Premium HR support at a price that makes sense."],
  ["🌐", "Strong Talent Network", "A wide pool of ready, verified candidates."],
  ["🤝", "Dedicated Client Support", "A single point of contact who knows your account."],
];

const industries = [
  ["🏭", "Manufacturing"],
  ["💻", "IT & Software"],
  ["🏥", "Healthcare"],
  ["🛍️", "Retail"],
  ["🚚", "Logistics"],
  ["🏨", "Hospitality"],
  ["🎓", "Education"],
  ["🏦", "Banking & Finance"],
  ["🏗️", "Construction"],
  ["📦", "E-commerce"],
];

const values = ["Integrity", "Excellence", "Confidentiality", "Innovation", "Customer Focus", "Professionalism"];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section id="home" className="hero" style={{ backgroundImage: `url(${img("1573496359142-b8d87734a5a2")})` }}>
          <div className="hero-overlay" />
          <div className="container hero-in">
            <p className="eyebrow">Your Trusted HR Partner</p>
            <h1>
              Recruit the people
              <br />
              who matter
            </h1>
            <p className="lead">
              We find the perfect candidates for your company, who can help you in achieving all your business goals.
            </p>
            <div className="actions">
              <a href="#services" className="btn btn-yellow">Our Services</a>
              <a href="#contact" className="btn btn-ghost">Contact Us</a>
            </div>
          </div>
        </section>

        <div className="cta-band">
          <div className="container cta-in">
            <h3>Are you looking to hire the right talent?</h3>
            <a href="#contact" className="btn btn-dark">Connect with us ›</a>
          </div>
        </div>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container about">
            <div className="about-img" style={{ backgroundImage: `url(${img("1522071820081-009f0129c71c", 1000)})` }}>
              <div className="badge">
                <strong>Dehli / NCR</strong>
                {/* <span>Udyog Vihar, Sector 20</span> */}
              </div>
            </div>
            <div>
              <p className="kicker">Who We Are</p>
              <h2 className="h2">Allied HR Solutions</h2>
              <p className="muted">
                Allied HR Solutions is a professional HR consulting and workforce management company committed to
                helping organizations attract, develop, and retain top talent.
              </p>
              <div className="mv">
                <div className="mv-card">
                  <div className="mv-ic">🎯</div>
                  <h4>Our Mission</h4>
                  <p>To deliver innovative, reliable, and cost-effective HR solutions that empower businesses to grow.</p>
                </div>
                <div className="mv-card">
                  <div className="mv-ic">👁️</div>
                  <h4>Our Vision</h4>
                  <p>To become a trusted HR partner recognized for excellence, integrity, and client satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section grey">
          <div className="container">
            <div className="head">
              <p className="kicker">What We Do</p>
              <h2 className="h2">Our Services</h2>
              <p className="muted">Recruit the best candidate, in the shortest possible time.</p>
            </div>
            <div className="grid g4">
              {services.map((s) => (
                <article className="svc" key={s.title}>
                  <div className="svc-ic">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <ul>
                    {s.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <a href="#contact" className="link">Read more →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section id="why" className="section">
          <div className="container">
            <div className="head">
              <p className="kicker">Why Allied HR</p>
              <h2 className="h2">Why Choose Allied HR Solutions?</h2>
            </div>
            <div className="grid g3">
              {reasons.map(([ic, t, d], i) => (
                <div className="why" key={t}>
                  <span className="why-num">0{i + 1}</span>
                  <div className="why-ic">{ic}</div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section id="industries" className="section ind" style={{ backgroundImage: `url(${img("1454165804606-c3d57bc86b40")})` }}>
          <div className="ind-overlay" />
          <div className="container ind-in">
            <div className="head light">
              <p className="kicker">Sectors</p>
              <h2 className="h2">Industries We Serve</h2>
            </div>
            <div className="grid g5">
              {industries.map(([ic, n]) => (
                <div className="ind-card" key={n}>
                  <span>{ic}</span>
                  {n}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section id="values" className="section">
          <div className="container">
            <div className="head">
              <p className="kicker">What Drives Us</p>
              <h2 className="h2">Our Values</h2>
            </div>
            <div className="values">
              {values.map((v) => (
                <div className="val" key={v}>
                  <span>✔</span>
                  {v}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section grey">
          <div className="container">
            <div className="head">
              <p className="kicker">Get In Touch</p>
              <h2 className="h2">Contact Us</h2>
            </div>
            <div className="contact">
              <div className="info">
                <h3>Let&apos;s talk about your hiring needs</h3>
                <div className="row"><span>📞</span><div><a href="tel:7503930378">7503930378</a><br /><a href="tel:7982360213">7982360213</a></div></div>
                <div className="row"><span>✉️</span><a href="mailto:alliedhr@gmail.com">alliedhr@gmail.com</a></div>
                {/* <div className="row"><span>📍</span><p>Plot No. 264, Udyog Vihar Phase 1, Sector 20, Gurugram, Haryana</p></div> */}
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container foot">
          <div className="brand light">
            <span className="mark">A</span>
            <span className="brand-text">ALLIED HR<small>SOLUTIONS</small></span>
          </div>
          <p>Your Trusted HR Partner</p>
          <p>© {new Date().getFullYear()} Allied HR Solutions. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
