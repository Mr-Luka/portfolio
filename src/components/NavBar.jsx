import linkedinLogo from '../../public/linkedin.png';

export default function NavBar() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div id="name-and-linkedin">
        {/* Click Luka. to refresh page */}
        <a href="#" className="logo" onClick={() => window.location.reload()}>
          Luka.
        </a>

        {/* LinkedIn logo to open profile */}
        <a
          href="https://www.linkedin.com/in/luka-pavlovski-02738a263/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo-image" src={linkedinLogo} alt="LinkedIn logo" />
        </a>
      </div>

      <nav className="navbar">
        <a href="#" onClick={() => scrollToSection('about-section')}>About</a>
        <a href="#" onClick={() => scrollToSection('portfolio-section')}>Portfolio</a>
        <a href="#" onClick={() => scrollToSection('contact-section')}>Contact</a>
      </nav>
    </header>
  );
}