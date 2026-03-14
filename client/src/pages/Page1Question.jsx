import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Page1Question = () => {
  const navigate = useNavigate();
  const [showTeasing, setShowTeasing] = useState(false);

  const handleYes = () => {
    navigate('/compliment');
  };

  const handleNo = () => {
    setShowTeasing(true);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, scale: 0.9 },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen relative z-10 p-4"
    >
      <div className="glass-panel p-8 md:p-12 rounded-3xl max-w-lg w-full text-center shadow-xl">
        {!showTeasing ? (
          <>
            <h1 className="text-4xl md:text-5xl font-bold text-pink-500 mb-8 handwritten drop-shadow-sm">
              I made something for you 💖
            </h1>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <button
                onClick={handleYes}
                className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-10 rounded-full text-xl transition-all hover:scale-105 shadow-md active:scale-95 w-40"
              >
                YES
              </button>
              <button
                onClick={handleNo}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-10 rounded-full text-xl transition-all hover:scale-105 shadow-md active:scale-95 w-40"
              >
                NO
              </button>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl font-bold text-pink-500 mb-6 handwritten">
              Are you sure? You kind of have to guess… please click YES 😅
            </h2>
            <button
              onClick={handleYes}
              className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-4 px-12 rounded-full text-2xl transition-all hover:scale-110 hover:shadow-lg shadow-md active:scale-95 animate-pulse"
            >
              YES
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Page1Question;
