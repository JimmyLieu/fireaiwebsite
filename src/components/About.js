import { motion } from 'framer-motion';
import './About.css';
import founderImage from '../assets/mcastillo.png';
import founderImage2 from '../assets/rramirez.png';

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
          FireAI was founded with a simple mission: to build AI technology that truly matters.
          <br /><br />
          Our team came together to address a problem with real consequences, inspired by the loss of a family member's small business to a fire—an experience that highlighted the importance of early, reliable detection.
          <br /><br />
          We began with controlled outdoor fire tests to study sensor behavior and understand what traditional detectors often miss, later advancing to live testing alongside professional firefighters.
          <br /><br />
          By analyzing environmental data over time, FireAI focuses on identifying fire risk earlier and more reliably than conventional approaches, providing clearer awareness when every second counts.
          <br /><br />
          Our team brings experience across applied machine learning, embedded systems, robotics, and risk analysis, with a focus on making fire detection more reliable for homes and families.

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
              bio: "Leads AI algorithm development and business strategy. Computer Science honors graduate with insurance industry experience in risk assessment. Extensive development experience in computer vision and AI applications.",
              image: founderImage
            },
            {
              name: "Rafael Ramirez",
              role: "Co-Founder",
              bio: "Oversees hardware integration and embedded systems for our detection devices. Led award-winning autonomous drone swarm project at UT Tyler, developing real-time computer vision for safety-critical applications.",
              image: founderImage2
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
              {founder.image ? (
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="team-image"
                />
              ) : (
                <div className="team-image-placeholder"></div>
              )}
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
              bio: "Oversees AI development and model optimization. Research background in artificial intelligence and wireless communication technologies. Builds the core detection algorithms that identify fires in their earliest stages.",
            },
            {
              name: "Kacey Flores",
              role: "Software Developer",
              bio: "Oversees embedded hardware and low-level software architecture. Lead Software Engineer for ATMAE National Robotics Competition winners and NASA JSC Hackathon 2024 Honorable Mention. Builds the embedded architecture that enables real-time fire detection on devices.",

            },
            {
              name: "Antonio Morelos",
              role: "Software Developer",
              bio: "Software Engineer at FireAI, with experience developing and supporting multiple mobile applications. Graduated with Honors with a strong foundation in software engineering and applied development."

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


    </div>
  );
}

export default About;