import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const Page6Envelope = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNext = () => {
    navigate('/memories');
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0, y: -50 },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen relative z-10 p-4"
    >
      
      {!isOpen ? (
        <motion.div 
          className="cursor-pointer relative flex flex-col items-center"
          onClick={handleOpen}
          whileHover={{ scale: 1.05, y: -10 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="text-gray-600 font-semibold mb-4 animate-pulse">Tap to open</div>
          
          {/* Cute CSS Envelope */}
          <div className="relative w-64 h-48 bg-pink-300 rounded-b-lg shadow-2xl overflow-hidden shadow-pink-500/30 border border-pink-400">
            {/* Envelope flap */}
            <div className="absolute top-0 left-0 w-0 h-0 border-l-[128px] border-r-[128px] border-t-[96px] border-l-transparent border-r-transparent border-t-pink-400 z-20 origin-top transform transition-transform filter drop-shadow-md"></div>
            {/* Envelope body shading */}
            <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[128px] border-r-[128px] border-b-[96px] border-l-pink-200/50 border-r-pink-200/50 border-b-pink-100/30 z-10"></div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
               <Heart className="text-red-500 fill-current w-12 h-12 drop-shadow-lg" />
            </div>
          </div>
        </motion.div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", damping: 15, stiffness: 100 }}
            className="w-full max-w-lg relative"
          >
            {/* Decorative images around the letter */}
            <motion.img 
              initial={{ opacity: 0, x: -50, rotate: -20 }}
              animate={{ opacity: 1, x: 0, rotate: -15 }}
              transition={{ delay: 0.5 }}
              src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=150" 
              className="absolute -left-12 -top-12 w-24 h-24 object-cover rounded-full border-4 border-white shadow-xl hidden md:block z-20"
            />
            <motion.img 
              initial={{ opacity: 0, x: 50, rotate: 20 }}
              animate={{ opacity: 1, x: 0, rotate: 10 }}
              transition={{ delay: 0.7 }}
              src="https://images.unsplash.com/photo-1522030010839-4f7f2b9ff9b2?auto=format&fit=crop&q=80&w=150" 
              className="absolute -right-8 bottom-12 w-28 h-28 object-cover rounded-sm border-4 border-white shadow-xl hidden md:block z-20"
            />

            <div className="bg-orange-50/95 backdrop-blur-sm p-8 md:p-12 rounded-sm shadow-2xl relative z-10">
              <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-pink-300"></div>
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-pink-300"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-pink-300"></div>
              <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-pink-300"></div>
              
              <div className="font-sans text-gray-800 text-lg md:text-xl leading-relaxed space-y-4 text-center handwritten font-semibold">
                <p>Happy Birthday my love. ❤️</p>
                <p>You make my life brighter every day.</p>
                <p>I’m so lucky to have you.</p>
                <p>I hope this small surprise makes you smile today.</p>
                <p>I love you forever 🥰</p>
              </div>
            </div>

            <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               transition={{ delay: 1 }} 
               className="flex justify-center mt-12"
            >
              <button
                onClick={handleNext}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-10 rounded-full text-xl shadow-md transition-transform hover:scale-105"
              >
                Last page
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default Page6Envelope;
