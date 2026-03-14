import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Page4VirtualHug = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/love');
  };

  const pageVariants = {
    initial: { opacity: 0, scale: 1.2 },
    in: { opacity: 1, scale: 1 },
    out: { opacity: 0, x: '-100vw' },
  };

  // We are using a cute generic hugging bunnies tenor GIF directly via link
  // Since we might not have a local asset, this is a safe, wholesome placeholder.
  const bunnyHugGifUrl = "https://media.tenor.com/images/3f28bf2285ed3aeb5c7f8a9ee07925e0/tenor.gif";
  // Backup cuter link if the tenor one is dynamic: https://media.giphy.com/media/l8ooOxhcItowwLPuZn/giphy.gif

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center justify-center min-h-screen relative z-10 p-4"
    >
      <div className="glass-panel p-8 md:p-12 rounded-3xl max-w-md w-full text-center shadow-xl">
        <h1 className="text-4xl font-bold text-pink-600 mb-6 handwritten">
          Sending you a virtual hug 🤗
        </h1>

        <div className="w-full flex justify-center mb-8 bg-white rounded-2xl overflow-hidden p-2 shadow-inner">
          <img
            src="https://media.giphy.com/media/l8ooOxhcItowwLPuZn/giphy.gif"
            alt="Bunny Hug"
            className="rounded-xl w-full max-w-[250px] object-cover h-auto"
            onError={(e) => {
              e.target.src = "https://media1.tenor.com/m/ZfWeq12i4F0AAAAC/hug-bunnies.gif";
              e.target.onerror = null;
            }}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-10 rounded-full text-xl shadow-md w-full"
        >
          Next surprise
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Page4VirtualHug;
