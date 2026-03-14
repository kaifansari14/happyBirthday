import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const Page3Birthday = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ffb7b2', '#ffdac1', '#e2f0cb', '#b5ead7', '#c7ceea']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ffb7b2', '#ffdac1', '#e2f0cb', '#b5ead7', '#c7ceea']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  const handleNext = () => {
    navigate('/hug');
  };

  const balloons = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    color: ['#ffb7b2', '#ffdac1', '#e2f0cb', '#b5ead7', '#c7ceea', '#fdfd96'][i],
    delay: Math.random() * 2,
    left: `${Math.random() * 80 + 10}%`,
  }));

  const pageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    in: { opacity: 1, scale: 1 },
    out: { opacity: 0, y: '-100vh' },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen relative z-10 p-4"
    >
      {/* Balloons Animation */}
      {balloons.map((b) => (
        <motion.div
          key={b.id}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{ y: '-120vh', opacity: 1 }}
          transition={{ duration: 8 + Math.random() * 4, delay: b.delay, repeat: Infinity, ease: 'linear' }}
          className="absolute text-6xl drop-shadow-lg z-0"
          style={{ left: b.left }}
        >
          🎈
        </motion.div>
      ))}

      <div className="glass-panel p-8 md:p-16 rounded-3xl max-w-2xl w-full text-center shadow-2xl relative z-10 border-4 border-white/50 bg-white/60">
        <motion.h1
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-8 handwritten drop-shadow-md"
        >
          HAPPY BIRTHDAY BBG 🎉🎂
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg mt-8"
        >
          Continue
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Page3Birthday;
