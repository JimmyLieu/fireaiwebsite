import { motion } from 'framer-motion';

function Features() {
  const features = [
    {
      icon: "🔥",
      title: "Real-time Detection",
      description: "Instant fire detection using advanced AI algorithms"
    },
    {
      icon: "🎯",
      title: "High Accuracy",
      description: "99.7% accuracy in identifying potential fire hazards"
    },
    {
      icon: "⚡",
      title: "Quick Response",
      description: "Immediate alerts and automated emergency protocols"
    }
  ];

  return (
    <section className="features">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Key Features
      </motion.h2>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;