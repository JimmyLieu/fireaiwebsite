import { motion } from 'framer-motion';
import heroImage from '../assets/hero-image.jpg';

function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Fire AI Detector
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Advanced AI-powered fire detection for early warning and prevention
        </motion.p>
        
      </motion.div>
      
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img 
        src={heroImage} 
        alt="Hero Image" 
        style={{ maxWidth: '100%', height: 'auto' }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        />
      </motion.div>
    </section>
  );
}

export default Hero;