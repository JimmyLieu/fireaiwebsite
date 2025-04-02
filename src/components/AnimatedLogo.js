import { motion } from 'framer-motion';
import logo from '../logo.svg';

function AnimatedLogo() {
  return (
    <motion.img 
      src={logo} 
      className="App-logo" 
      alt="logo"
      animate={{
        scale: [1, 1.2, 1],
        rotate: 360
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
}

export default AnimatedLogo; 