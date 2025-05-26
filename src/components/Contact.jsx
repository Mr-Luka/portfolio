import email from '../assets/gmail.png';
import phone from '../assets/phone.png';

export default function Contact() {
  return (
    <div className='contact-me' id="contact-section">
      <div className='contact'>
        <img src={phone} alt='mobile phone' />
        <p>
          <a href="tel:3108660191" style={{ color: 'inherit', textDecoration: 'none' }}>
            310 - 866 - 0191
          </a>
        </p>
      </div>
      <div className='contact'>
        <img src={email} alt='email' />
        <p>
          <a href="mailto:luka.luka.luka93@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
            luka.luka.luka93@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}