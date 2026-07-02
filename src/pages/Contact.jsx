import React, { useState } from 'react';
import '../styles/Contact.css';
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    console.log(formData);
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-left">
        <h2>Contact Us</h2>
        <p><strong>YGM Social Foundation</strong></p>
        <p><FaMapMarkerAlt /> M.I.G Colony Hanuman Mandir Ground, Trimurti Nagar, Nagpur - 440022</p>
        <p><FaPhone /> <a href="tel:+918308855630">+91 8308855630</a></p>
        <p><FaEnvelope /> <a href="mailto:ygmsocialfoundation@gmail.com">ygmfoundation@gmail.com</a></p>

        <div className="map">
          <iframe
            title="YGM Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.392792442224!2d79.0454!3d21.1102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c06ac447c2e1%3A0x8d0c1eb3d969d9bb!2sTrimurti%20Nagar%2C%20Nagpur%2C%20Maharashtra%20440022!5e0!3m2!1sen!2sin!4v1663132132131"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="contact-right">
        <h2>Contact Form</h2>
        <p className="form-info">
          Please fill out the form or just email us at <a href="mailto:ygmsocialfoundation@gmail.com">ygmfoundation@gmail.com</a>.
        </p>

        <form id="contact-form" className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <FaUser className="form-icon" />
            <input type="text" name="name" placeholder="Enter name" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <FaEnvelope className="form-icon" />
            <input type="email" name="email" placeholder="Email address" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <FaPhone className="form-icon" />
            <input type="tel" name="phone" placeholder="Mobile No" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <FaMapMarkerAlt className="form-icon" />
            <input type="text" name="subject" placeholder="Enter Location" onChange={handleChange} required />
          </div>
          <div className="form-group textarea">
            <FaRegCommentDots className="form-icon" />
            <textarea name="message" placeholder="Enter message" rows="4" onChange={handleChange} required></textarea>
          </div>
          <p className="hint">Hint: Please enter between 80 - 300 characters.</p>
          <button type="submit" className="contact-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
