import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate initial hearts
    const generateHearts = () => {
      const newHearts = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100, // percentage string
        size: Math.random() * 1.5 + 0.5, // rem
        duration: Math.random() * 10 + 10, // seconds
        delay: Math.random() * 10,
      }));
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '110vh', x: `${heart.x}vw`, opacity: 0 }}
          animate={{
            y: '-10vh',
            opacity: [0, 0.5, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            fontSize: `${heart.size}rem`,
            color: 'rgba(255, 105, 180, 0.3)', // Soft pink with transparency
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
