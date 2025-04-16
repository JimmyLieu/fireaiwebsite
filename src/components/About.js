import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About FireAI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Revolutionizing fire safety through artificial intelligence
        </motion.p>
      </section>

      {/* Founders Section */}
      <section className="founders">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Founders
        </motion.h2>
        <div className="founders-grid">
          {[
            {
              name: "Matthew Castillo",
              role: "Founder",
              bio: "Leading the vision of FireAI with expertise in AI and fire safety systems."
            },
            {
              name: "Raf360_7905",
              role: "Co-Founder",
              bio: "Bringing innovative solutions to fire detection technology."
            }
          ].map((founder, index) => (
            <motion.div
              key={founder.name}
              className="team-card founder-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="team-image-placeholder"></div>
              <h3>{founder.name}</h3>
              <p className="role">{founder.role}</p>
              <p className="bio">{founder.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Development Team Section */}
      <section className="dev-team">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Software Development Team
        </motion.h2>
        <div className="team-grid">
          {[
            {
              name: "Jimmy Lieu",
              role: "Software Developer",
              bio: "Unicorn. Does Everything."
            },
            {
              name: "Kacey Lieu",
              role: "Software Developer",
              bio: "Master of UI"
            },
            {
              name: "Antonio Lieu",
              role: "Software Developer",
              bio: "Asks Jimmy for help"
            }
          ].map((member, index) => (
            <motion.div
              key={member.name}
              className="team-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="team-image-placeholder"></div>
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <motion.div
          className="mission-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Our Mission</h2>
          <p>
            At FireAI, we're committed to revolutionizing fire safety through cutting-edge 
            artificial intelligence. Our mission is to protect lives and property by providing 
            the most advanced early warning system for fire detection.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

export default About;