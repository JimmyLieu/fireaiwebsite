import { motion } from 'framer-motion';

function BouncingSquares() {
  return (
    <motion.div style={{ display: 'flex', gap: '20px', margin: '20px' }}>
      {[1, 2, 3].map((item, index) => (
        <motion.div
          key={item}
          style={{
            width: 50,
            height: 50,
            borderRadius: 10,
            backgroundColor: '#61dafb'
          }}
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.2
          }}
          whileHover={{ scale: 1.2 }}
        />
      ))}
    </motion.div>
  );
}

export default BouncingSquares; 