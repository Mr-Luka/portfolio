import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';

export default function ContactModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>📞 Contact Me</h3>
        
        <p>
          <strong>Phone:</strong>{' '}
          <a href="tel:3108660191" style={{ color: 'inherit', textDecoration: 'none' }}>
            310 - 866 - 0191
          </a>
        </p>
        
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:luka.luka.luka93@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
            luka.luka.luka93@gmail.com
          </a>
        </p>

        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <a href="https://github.com/Mr-Luka" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" style={{ width: '40px' }} />
          </a>
          <a href="https://www.linkedin.com/in/luka-pavlovski-02738a263/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" style={{ width: '40px' }} />
          </a>
        </div>

        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
}