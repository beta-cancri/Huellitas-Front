import { useNavigate } from 'react-router-dom';
import './contact.styles.css'; 

const Contact = () => {
    const whatsappNumber = '+1234567890'; 
    const email = 'contact@huellitas.com';
    const address = 'Av. Cnel. Díaz 2488,  Cdad. Autónoma de Buenos Aires';
    const navigate = useNavigate();
    return (
        <div className="contact-container">
            <div className="intro">
                <h1>Contact Us</h1>
                <p>If you have any questions about pet adoption, were here to help!</p>
            </div>

            <div className="contact-options">
                <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-button"
                >
                    Contact via WhatsApp
                </a>
            </div>

            <div className="contact-info">
                <h2>Additional Information</h2>
                <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
                <p><strong>Address:</strong> {address}</p>
            </div>

            <div className="contact-social">
                <h2>Follow Us on Social Media</h2>
                <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
            </div>

            <div className="contact-hours">
                <h2>Business Hours</h2>
                <p>Monday to Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
            </div>

            <div className="contact-map">
                <h2>Find Us on the Map</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.981498085755!2d-58.43117030338626!3d-34.582087823152676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb51c78a87005%3A0x40b0d058ae47ad45!2sMascotas%20en%20Adopci%C3%B3n%20Argentina!5e0!3m2!1ses-419!2sar!4v1724475671968!5m2!1ses-419!2sar"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <button className="back-button" onClick={() => navigate('/home')}>Back to Home</button>        

        </div>
    );
};

export default Contact;
