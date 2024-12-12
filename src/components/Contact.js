import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // After form submission, reset the form fields
    setFormData({
      name: "",
      company: "",
      email: "",
      message: "",
    });
    // Formspree will still process the submission
    e.target.submit();
  };

  return (
    <section id="contact">
      <h2 id="engtext">Contact Us</h2>
      <h2 id="hrvtext">Kontaktirajte nas</h2>
      <form
        action="https://formspree.io/f/xyzyayee"
        method="POST"
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label id="engtext" htmlFor="name">Name</label>
          <label id="hrvtext" htmlFor="name">Ime</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label id="engtext" htmlFor="company">Company Name</label>
          <label id="hrvtext" htmlFor="company">Ime Tvrtke</label>
          <input
            type="text"
            name="company"
            placeholder="Your Company Name"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label id="engtext" htmlFor="message">Message</label>
          <label id="hrvtext" htmlFor="message">Poruka</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;

