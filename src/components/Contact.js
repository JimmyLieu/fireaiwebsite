import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {
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
            
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="First Name" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Last Name" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input type="email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <select>
                    <option value="">Select Topic</option>
                    <option value="demo">Request Demo</option>
                    <option value="quote">Get Quote</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <textarea 
                  placeholder="Your message..."
                  rows="3"
                  required
                ></textarea>
              </div>

              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;