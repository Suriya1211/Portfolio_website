// src/components/Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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

    emailjs.send(
      'service_yt7oxwl',      // 🔁 Replace with your actual service ID
      'template_8hob8la',     // 🔁 Replace with your template ID
      formData,
      'TAdA5Vzer9Z79-326'          // 🔁 Replace with your Public Key (user ID)
    ).then(
      (result) => {
        alert('Message sent successfully!');
        console.log(result.text);
      },
      (error) => {
        alert('Failed to send message. Try again later.');
        console.log(error.text);
      }
    );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-row">
          <input type="text" name="name" placeholder="Enter Your Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Enter Your Mail Id" onChange={handleChange} required />
        </div>
        <div className="input-row">
          <input type="text" name="phone" placeholder="Enter Your Mobile Number" onChange={handleChange} required />
          <input type="text" name="subject" placeholder="Enter Subject Of The Mail" onChange={handleChange} required />
        </div>
        <textarea name="message" placeholder="Enter Your Message Here..." rows="6" onChange={handleChange} required />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
