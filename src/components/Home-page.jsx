import { useState } from 'react';
import ContactModal from './ContactModal.jsx'; 

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="home-content">
        <h1>Hi, I'm Luka Pavlovski</h1>
        <h3>Frontend Developer</h3>
        <p>I'm Luka, a frontend developer who believes code is both a craft and a conversation with the user.
          <br />
          I build interfaces with clarity, simplicity, and care — because great design should feel like a deep breath: smooth, intuitive, and easy to trust.
          <br />
          My goal? To create web experiences that resonate — not just function.
        </p>
        <div className="btn-box">
          <a href="#" onClick={openModal}>Hire me</a>
          <a href="#" onClick={openModal}>Let's Talk</a>
        </div>
      </div>

      <ContactModal show={showModal} onClose={closeModal} />
    </>
  );
}
