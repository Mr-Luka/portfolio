import linkedinLogo from '../../public/linkedin.png';
import githubIcon from '../assets/github.png';

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
        {/* Click Luka. to scroll to top */}
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
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
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about-section'); }}>About</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio-section'); }}>Portfolio</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact-section'); }}>Contact</a>
      </nav>
    </header>
  );
}