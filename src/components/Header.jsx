import { motion } from 'framer-motion';
import { BsArrowUpRight } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center text-white z-10">
      <div className="flex items-center space-x-4">
        <span className="text-sm">+1 332 256 8869</span>
        <span className="text-sm">Digital Producer</span>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm">Currently in Miami</span>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="p-2 rounded-full border border-white/20"
        >
          <BsArrowUpRight />
        </motion.button>
      </div>
    </header>
  );
};

export default Header;