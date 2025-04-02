import { motion } from 'framer-motion';
import './Home.css';

function Home() {
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

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Watch Demo</button>
          </motion.div>
        </div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Replace with the hero image */}
          <div className="placeholder-image">
            <span>AI Duck Mascot</span>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          {[
            { number: '99.97%', label: 'Detection Accuracy' },
            { number: '3X', label: 'Faster than tradiational Fire Detectors' },
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
          <button className="primary-btn">Contact Us Now</button>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;