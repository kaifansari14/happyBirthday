import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1522030010839-4f7f2b9ff9b2?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=400"
];

const Page5Love = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/envelope');
  };

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, scale: 0.9 },
  };

  const containerVariants = {
    in: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    initial: { opacity: 0, scale: 0.8, rotate: -10 },
    in: { opacity: 1, scale: 1, rotate: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen relative z-10 p-4 py-12"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-pink-500 mb-10 handwritten drop-shadow-md">
        I love you ❤️
      </h1>

      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl w-full mb-12"
      >
        {images.map((src, index) => {
          // Random slight rotation for each polaroid
          const rotation = index % 2 === 0 ? "rotate-[-3deg]" : "rotate-[3deg]";
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
              className={`bg-white p-3 pb-8 rounded-sm shadow-xl ${rotation} transition-transform duration-300 transform-gpu cursor-pointer`}
            >
              <div className="overflow-hidden rounded-sm aspect-square bg-gray-100">
                <img 
                  src={src} 
                  alt={`Memory ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleNext}
        className="bg-transparent border-4 border-pink-400 text-pink-500 hover:bg-pink-400 hover:text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg transition-colors bg-white"
      >
        One more thing
      </motion.button>
    </motion.div>
  );
};

export default Page5Love;
