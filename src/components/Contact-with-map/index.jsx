import React from "react";
import { useState, useEffect } from "react";
import * as pixel from '../../common/fpixel'

const ContactWithMap = ({ iframeLink, apartment }) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [flat, setFlat] = useState('')
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone || !email || !message) {
      return;
    }
    try {
      pixel.event('Contact', {
        name,
        phone,
        email,
        message
      })
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError('Please enter a valid email address.');
        return;
      }

      // Validate phone number
      const phoneRegex = /^(?:\+91)?\d{10}$/;
      if (!phoneRegex.test(phone)) {
        setPhoneError('Please enter a valid 10-digit phone number.');
        return;
      }
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, phone, email, message, apartment, flat }),
      });

      if (response.ok) {
        const data = await response.json();
        setShowMessage(true);
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }
  }, [showMessage]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 map-box">
          <iframe
            style={{
              // filter: "grayscale(100%)",
            }}
            src={iframeLink}></iframe>
        </div>
        <div className="col-lg-6 form" style={{ padding: "30px" }}>
          <h3 className="messages playfont pb-35">Are you interested? Contact us for more details</h3>
          <form id="contact-form" method="post">

            <div className="controls">
              <div className="form-group">
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required="required"
                  value={name} onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  id="form_phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  required="required"
                  style={{ WebkitAppearance: "none", margin: "0" }}
                  value={phone} onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required="required"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "15px" }} className="form-group">
                {
                  [1, 2, 3, 3.5, 4, 4.5].map((item, idx) => {
                    return <div key={idx}>
                      <button className={`btn-curve ${flat === item ? 'btn-color' : ''}`} type="button" onClick={() => setFlat(item)} id={`bhk${item}`}
                      >
                        <span
                          style={{
                            color: "white",
                          }}
                        >
                          {item} BHK</span>
                      </button>
                    </div>
                  })
                }
              </div>


              <div className="form-group">
                <textarea
                  id="form_message"
                  name="message"
                  placeholder="Message"
                  rows="2"
                  required="required"
                  value={message} onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="btn-curve btn-color" onClick={handleSubmit}
                disabled={!name || !phone || !email || !flat}
              >
                <span
                  style={{
                    color: "white",
                  }}
                >
                  Send Message {showMessage ? 'Message Sent' : ''}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactWithMap;
