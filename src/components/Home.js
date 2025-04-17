import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';
import { useState, useEffect } from 'react';
import heroImage from '../assets/hero-image.jpg';
import mockupImage from '../assets/NotificationScreen.png';
import { Link } from 'react-router-dom';

function Home() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Protecting Lives with
            <span className="gradient-text"> AI-Powered</span> Fire Detection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Advanced early warning system that detects fire hazards before they become catastrophic
          </motion.p>

         
        </div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
    src={heroImage} 
    alt="FireAI Detection System" 
    className="hero-img"
  />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          {[
            { number: '99.97%', label: 'Detection Accuracy' },
            { number: '3X', label: 'Faster than the traditional fire detector' },
            { number: '24/7', label: 'Monitoring' },
            { number: '1000+', label: 'Installations' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Preview */}
      <section className="features-preview">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Choose FireAI?
        </motion.h2>
        
        <div className="features-grid">
          {[
            {
              icon: '🔍',
              title: 'Real-time Detection',
              description: 'Continuous monitoring with instant alerts'
            },
            {
              icon: '🤖',
              title: 'AI-Powered',
              description: 'Advanced algorithms for accurate detection'
            },
            {
              icon: '⚡',
              title: 'Quick Response',
              description: 'Immediate notification to emergency services'
            },
            {
              icon: '📱',
              title: 'Mobile Control',
              description: 'Monitor your system from anywhere'
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="mockup-section">
  <div className="mockup-split-container">
    <motion.div 
      className="mockup-content"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Powerful Mobile Control</h2>
      <p>Monitor your fire detection system from anywhere, anytime. Get real-time alerts and detailed analytics right at your fingertips.</p>
      <ul className="app-features-list">
        <li>Real-time monitoring dashboard</li>
        <li>Instant push notifications</li>
        <li>Easy device management</li>
      </ul>
     
    </motion.div>

    <motion.div
      className="mockup-image-container"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <img
        src={mockupImage}
        alt="FireAI Application Interface"
        className="mockup-image"
      />
    </motion.div>
  </div>
</section>
{/* Testimonials Section 
<section className="testimonials">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    What Our Clients Say
  </motion.h2>
  <div className="testimonials-grid">
    {[
      {
        quote: "FireAI's detection system has transformed how we manage fire safety in our facility.",
        author: "Jimmy Lieu",
        position: "Facility Manager, Tech Corp"
      },
      {
        quote: "The early warning system has already prevented two potential incidents. Incredible technology!",
        author: "Kacey Lieu",
        position: "Safety Director, Manufacturing Inc."
      },
      {
        quote: "Implementation was smooth and the results were immediate. Highly recommended.",
        author: "Antonio Lieu",
        position: "Building Manager, Plaza Hotels"
      }
    ].map((testimonial, index) => (
      <motion.div
        key={testimonial.author}
        className="testimonial-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="quote">{testimonial.quote}</div>
        <div className="author">{testimonial.author}</div>
        <div className="position">{testimonial.position}</div>
      </motion.div>
    ))}
  </div>
</section>
*/}
{/* How It Works Section */}
<section className="how-it-works">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    How FireAI Works
  </motion.h2>
  <div className="steps-container">
    {[
      {
        step: "1",
        title: "Installation",
        description: "Quick and non-intrusive setup of AI-powered sensors"
      },
      {
        step: "2",
        title: "24/7 Monitoring",
        description: "Continuous analysis of environmental data"
      },
      {
        step: "3",
        title: "Early Detection",
        description: "AI algorithms identify potential fire hazards in real-time"
      },
      {
        step: "4",
        title: "Instant Alert",
        description: "Immediate notifications to stakeholders and emergency services"
      }
    ].map((step, index) => (
      <motion.div
        key={step.step}
        className="step-card"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="step-number">{step.step}</div>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </motion.div>
    ))}
  </div>
</section>
      {/* CTA Section */}
      <section className="cta">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Protect Your Property?</h2>
          <p>Get started with FireAI today and ensure the safety of your space</p>
          <Link to="/contact">
  <motion.button 
    className="primary-btn"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Contact Us Now
  </motion.button>
</Link>
        </motion.div>
      </section>

      <AnimatePresence>
        {showScroll && (
          <motion.div 
            className="scroll-indicator-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="scroll-indicator"
              animate={{ 
                y: [0, 12, 0] 
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="scroll-arrow">↓</div>
              <div className="scroll-text">Scroll</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;