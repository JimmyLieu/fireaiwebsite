import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    topic: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.send(
      'service_35ebn7q', 
      'template_dexr3t7',
      {
        from_name: `${formData.firstName} ${formData.lastName}`,
        to_name: 'FireAI Team',
        from_email: formData.email,
        topic: formData.topic,
        message: formData.message,
      },
      'OnSIIdRwOzt6ep2Nq' 
    )
    .then(() => {
      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        topic: '',
        message: ''
      });
    }, (error) => {
      setStatus('error');
      console.log('Failed to send email:', error);
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-page">
        <motion.div 
          className="contact-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Let's talk about <span className="gradient-text">your problem</span></h1>
          <p className="contact-description">
            Ask us about AI fire detection implementation or schedule a demo.
          </p>

          <div className="contact-info-grid">
            <motion.div 
              className="contact-info-item"
              whileHover={{ scale: 1.02 }}
            >
              <div className="icon">📍</div>
              <p>UT Tyler, TX</p>
            </motion.div>

            <motion.div 
              className="contact-info-item"
              whileHover={{ scale: 1.02 }}
            >
              <div className="icon">📞</div>
              <p>+1 (555) 123-4567</p>
            </motion.div>

            <motion.div 
              className="contact-info-item"
              whileHover={{ scale: 1.02 }}
            >
              <div className="icon">✉️</div>
              <p>hello@fireai.com</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-form-container">
            <h2>Send us a message</h2>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name" 
                    required 
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <select 
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Topic</option>
                    <option value="demo">Request Demo</option>
                    <option value="quote">Get Quote</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows="3"
                  required
                />
              </div>

              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </motion.button>

              {status === 'success' && (
                <div className="success-message">Message sent successfully!</div>
              )}
              {status === 'error' && (
                <div className="error-message">Failed to send message. Please try again.</div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;