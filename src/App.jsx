import { motion } from 'framer-motion';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-black relative"
    >
      <Header />
      <MainContent />
    </motion.div>
  );
}

export default App;