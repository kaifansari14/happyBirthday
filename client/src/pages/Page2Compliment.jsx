import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Page2Compliment = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/birthday');
  };

  const pageVariants = {
    initial: { opacity: 0, x: '100vw' },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: '-100vw' },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      className="flex flex-col items-center justify-center min-h-screen relative z-10 p-4"
    >
      <div className="glass-panel p-10 md:p-16 rounded-3xl max-w-lg w-full text-center shadow-xl">
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
          className="text-4xl md:text-5xl font-bold text-pink-500 mb-10 handwritten"
        >
          That’s a good girl 😊
        </motion.h1>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          className="bg-white border-2 border-pink-400 text-pink-500 hover:bg-pink-50 font-bold py-3 px-10 rounded-full text-xl shadow-md"
        >
          Click me
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Page2Compliment;
