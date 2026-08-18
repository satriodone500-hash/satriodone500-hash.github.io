import React, { useState } from "react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

const projects: Project[] = [
  {
    title: "Cisco OSPF Network Lab",
    description:
      "Multi-router lab using OSPF, DHCP, IPv4 addressing, route verification, and connectivity testing.",
    tags: ["Cisco", "OSPF", "DHCP", "IPv4"],
    href: "https://github.com/satriodone500-hash",
  },
  {
    title: "Network Monitoring Lab",
    description:
      "A practical monitoring environment for learning availability, traffic visibility, and operational troubleshooting.",
    tags: ["Linux", "Monitoring", "NOC"],
    href: "https://github.com/satriodone500-hash",
  },
  {
    title: "Linux Server Lab",
    description:
      "Hands-on Linux administration covering SSH, networking, services, users, and system troubleshooting.",
    tags: ["Linux", "SSH", "Server"],
    href: "https://github.com/satriodone500-hash",
  },
  {
    title: "Network Automation",
    description:
      "Small TypeScript/Python-oriented experiments for reducing repetitive network administration tasks.",
    tags: ["Automation", "Scripting", "Networking"],
    href: "https://github.com/satriodone500-hash",
  },
];

const skills = [
  "TCP/IP",
  "Routing & Switching",
  "Cisco Packet Tracer",
  "Linux",
  "Network Monitoring",
  "BTS / Telecom Operations",
  "Git & GitHub",
  "Python",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">&gt;_</span>
          <span>satriyo</span>
        </a>

        <button
          className="menu-button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          ☰
        </button>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          {["about", "skills", "projects", "experience", "contact"].map((item) => (
            <a key={item} href={`#${item}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <a
            className="nav-button"
            href="https://github.com/satriodone500-hash"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            GitHub ↗
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">INFORMATION SYSTEMS • TELECOMMUNICATIONS</p>
            <h1>
              S a t r i y o<span>.</span>
            </h1>
            <p className="hero-title">Rope Access Technician</p>
            <p className="hero-text">
              Information Systems student with hands-on experience in
              telecommunications field operations, IT support, networking,
              Linux, and technical troubleshooting.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                View Projects
              </a>
              <a
                className="secondary-button"
                href="https://github.com/satriodone500-hash"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>

            <div className="status">
              <span className="status-dot" />
              <span>Open to learning • networking • telecom opportunities</span>
            </div>
          </div>

          <div className="terminal-card" aria-label="Terminal profile">
            <div className="terminal-top">
              <span />
              <span />
              <span />
              <small>profile.ts</small>
            </div>
            <pre>
{`const satriyo = {
  role: "Information Systems Student",
  focus: [
    "Telecommunications",
    "Networking",
    "Linux"
  ],
  tools: [
    "Cisco Packet Tracer",
    "GitHub",
    "Vscode",
    "ISDP MOBILE"
  ],
  mindset: "learn by doing"
};`}
            </pre>
          </div>
        </section>

        <section className="section split" id="about">
          <div>
            <p className="section-label">01 / ABOUT</p>
            <h2>Building practical skills, one lab at a time.</h2>
          </div>
          <div className="section-copy">
            <p>
              I am an Information Systems student at Universitas Terbuka with
              practical exposure to telecommunications equipment installation,
              swap activities, tower operations, and IT support.
            </p>
            <p>
              My current direction is networking and telecommunications,
              especially NOC/OSS, network operations, Linux, and RF fundamentals.
              I prefer hands-on learning: building labs, testing configurations,
              documenting results, and troubleshooting real problems.
            </p>
          </div>
        </section>

        <section className="section" id="skills">
          <p className="section-label">02 / SKILLS</p>
          <div className="section-heading">
            <h2>Technical stack</h2>
            <p>Focused on infrastructure and operations rather than just code.</p>
          </div>
          <div className="skill-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <span>+</span>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <p className="section-label">03 / PROJECTS</p>
          <div className="section-heading">
            <h2>Selected labs & projects</h2>
            <p>Replace these links with your actual repositories as you build them.</p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a href={project.href} target="_blank" rel="noreferrer">
                  View repository ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section split" id="experience">
          <div>
            <p className="section-label">04 / EXPERIENCE</p>
            <h2>Field experience matters.</h2>
          </div>

          <div className="timeline">
            <article>
              <div className="timeline-dot" />
              <div>
                <p className="timeline-meta">TELECOMMUNICATIONS</p>
                <h3>Telecommunications Rigger / Field Technician</h3>
                <p>
                  Installation and swap activities for telecommunications
                  equipment, tower operations, and site work with strong focus
                  on safety and procedure.
                </p>
              </div>
            </article>

            <article>
              <div className="timeline-dot" />
              <div>
                <p className="timeline-meta">IT SUPPORT</p>
                <h3>IT Support / Technical Operations</h3>
                <p>
                  Hardware, software, lab equipment, troubleshooting, and
                  technical support in an education environment.
                </p>
              </div>
            </article>

            <article>
              <div className="timeline-dot" />
              <div>
                <p className="timeline-meta">EDUCATION</p>
                <h3>  Undergraduate Students Information Systems — Universitas Terbuka</h3>
                <p>
                  Developing a broader foundation in information systems while
                  specializing independently in infrastructure and telecom.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <p className="section-label">05 / CONTACT</p>
          <h2>Let’s build something useful.</h2>
          <p>
            For professional opportunities, technical collaboration, or
            networking projects, reach me through the links below.
          </p>

          <div className="contact-links">
            <a href="mailto:satriodone500@gmail.com">Email ↗</a>
            <a
              href="https://github.com/satriodone500-hash"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a href="#" onClick={(event) => event.preventDefault()}>
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Satriyo</span>
        <span>Built with React + TypeScript</span>
      </footer>
    </div>
  );
}

export default App;