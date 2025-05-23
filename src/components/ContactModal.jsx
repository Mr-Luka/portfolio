export default function ContactModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>📞 Contact Me</h3>
        <p><strong>Phone:</strong> 310 - 866 - 0191</p>
        <p><strong>Email:</strong> luka.luka.luka93@gmail.com</p>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
}
