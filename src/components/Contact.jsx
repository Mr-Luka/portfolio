import email from '../assets/gmail.png';
import phone from '../assets/phone.png';

export default function Contact(){

    return (
        <div className='contact-me' id="contact-section">
            <div className='contact'>
                <img src={phone} alt='mobile phone' />
                <p>310 - 866 - 0191</p>
            </div>
            <div className='contact'>
                <img src={email} alt='email' />
                <p>luka.luka.luka93@gmail.com</p>
            </div>
        </div>
    )
}