
const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript",
  "React", "Next.js", "C++", "Python"
];

const projects = [
  {
    number: "01",
    title: "Inventory Management System",
    category: "Web Application",
    description:
      "Aplikasi pengelolaan inventaris untuk mencatat barang, stok, kondisi, dan proses permintaan barang.",
    tech: ["C++", "File System"],
    link: "#"
  },
  {
    number: "02",
    title: "Personal Portfolio",
    category: "Frontend Development",
    description:
      "Website personal untuk memperkenalkan profil, keterampilan, dan hasil karya dalam bidang teknologi.",
    tech: ["Next.js", "TypeScript", "CSS"],
    link: "#"
  },
  {
    number: "03",
    title: "Student Project",
    category: "Programming",
    description:
      "Proyek pengembangan aplikasi sederhana sebagai bagian dari pembelajaran pemrograman.",
    tech: ["Python", "JavaScript"],
    link: "#"
  }
];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="logo">
          hadung<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk ↗
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="status">
            <span className="status-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="eyebrow">HELLO, I'M</p>

          <h1>
            Hadung
            <br />
            <span>Creative Developer.</span>
          </h1>

          <p className="hero-description">
            Saya seorang mahasiswa yang tertarik pada dunia
            teknologi, pemrograman, dan pengembangan website.
            Saya senang mempelajari hal baru dan membangun
            sesuatu melalui teknologi.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              Explore My Work ↗
            </a>
            <a href="#about" className="secondary-button">
              More About Me
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/" target="_blank">GitHub ↗</a>
            <a href="https://linkedin.com/" target="_blank">LinkedIn ↗</a>
            <a href="mailto:emailkamu@example.com">Email ↗</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow"></div>
          <div className="profile-card">
            <div className="profile-top">
              <span>PORTFOLIO / 2026</span>
              <span>✳</span>
            </div>

            <div className="profile-avatar">
              H
            </div>

            <h2>Hadung.</h2>
            <p>Student & Aspiring Developer</p>

            <div className="profile-divider"></div>

            <div className="profile-info">
              <span>BASED IN</span>
              <strong>Indonesia 🇮🇩</strong>
            </div>

            <div className="profile-info">
              <span>FOCUS</span>
              <strong>Web Development</strong>
            </div>

            <div className="profile-info">
              <span>STATUS</span>
              <strong className="available">Learning & Building</strong>
            </div>
          </div>

          <div className="floating-tag tag-one">{"<"} Developer {"/>"}</div>
          <div className="floating-tag tag-two">✦ Creative Mind</div>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span>↓</span>
          <span>01 — 05</span>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-heading">
          <span className="section-number">01 / ABOUT</span>
          <h2>Getting to know <span>me.</span></h2>
        </div>

        <div className="about-content">
          <div className="about-label">
            <span>WHO I AM</span>
            <div className="about-line"></div>
          </div>

          <div className="about-text">
            <p>
              Halo! Saya Hadung, seorang mahasiswa yang memiliki
              ketertarikan pada teknologi informasi dan dunia
              pengembangan perangkat lunak.
            </p>
            <p>
              Saya sedang mengembangkan kemampuan dalam
              pemrograman, khususnya frontend development,
              serta mempelajari bagaimana sebuah aplikasi
              dirancang dan dibangun.
            </p>
            <p>
              Bagi saya, setiap proyek adalah kesempatan
              untuk belajar, bereksperimen, dan berkembang.
            </p>

            <a href="#contact" className="text-link">
              Get in touch ↗
            </a>
          </div>
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="section-heading">
          <span className="section-number">02 / SKILLS</span>
          <h2>Tools I <span>work with.</span></h2>
        </div>

        <p className="section-description">
          Beberapa teknologi dan bahasa pemrograman yang
          sedang saya pelajari dan gunakan.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span>0{index + 1}</span>
              <h3>{skill}</h3>
              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-heading">
          <span className="section-number">03 / SELECTED WORKS</span>
          <h2>Things I've <span>built.</span></h2>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>

              <div className="project-main">
                <span className="project-category">
                  {project.category}
                </span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                className="project-link"
                aria-label={`View ${project.title}`}
              >
                ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <span className="section-number">04 / CONTACT</span>
        <h2>
          Have an idea?
          <br />
          <span>Let's connect.</span>
        </h2>

        <p>
          Saya terbuka untuk berdiskusi, berkolaborasi,
          dan bertukar ide mengenai teknologi.
        </p>

        <a
          href="mailto:emailkamu@example.com"
          className="primary-button"
        >
          Send Me an Email ↗
        </a>

        <div className="contact-socials">
          <a href="https://github.com/" target="_blank">GitHub ↗</a>
          <a href="https://linkedin.com/" target="_blank">LinkedIn ↗</a>
          <a href="https://instagram.com/" target="_blank">Instagram ↗</a>
        </div>
      </section>

      <footer className="footer">
        <a href="#home" className="logo">
          hadung<span>.</span>
        </a>
        <p>© 2026 Hadung. Built with Next.js.</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
