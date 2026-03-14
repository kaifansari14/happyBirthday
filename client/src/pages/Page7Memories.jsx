import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const memories = [
  "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1522030010839-4f7f2b9ff9b2?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=500"
];

const Page7Memories = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-start min-h-screen relative z-10 p-4 py-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 handwritten drop-shadow-xl p-4 bg-pink-400/80 rounded-full backdrop-blur-sm border border-pink-300">
        Our Memories 📸
      </h1>

      {/* Masonry Layout approximation using CSS columns */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 max-w-6xl w-full mx-auto space-y-4 pb-20">
        {memories.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="break-inside-avoid"
          >
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(255, 105, 180, 0.6)" }}
              className="rounded-xl overflow-hidden cursor-pointer border-2 border-white/50 shadow-lg"
              onClick={() => setSelectedImg(src)}
            >
              <img 
                src={src} 
                className="w-full h-auto object-cover block"
                loading="lazy"
                alt={`Memory ${index + 1}`}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-3xl md:text-4xl handwritten text-pink-600 font-bold mt-8 drop-shadow-sm pb-10"
      >
        Happy Birthday once again ❤️
      </motion.p>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImg}
              alt="Enlarged memory"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border-4 border-white/20"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Page7Memories;
