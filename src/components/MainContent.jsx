import { motion } from 'framer-motion';

const MainContent = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white z-10 p-6"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-8xl font-bold mb-8 tracking-tighter"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            FACE TO FACE
          </motion.h1>
          
          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6">
                Navigating your digital transformation through bespoke creative solutions, 
                providing a personal touch.
              </p>
              <motion.div 
                className="text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p>Only.</p>
                <p>From Me To You.</p>
                <p>Always Responsive.</p>
              </motion.div>
            </div>
            
            <motion.div 
              className="text-sm space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="font-medium mb-4">Helping with:</p>
              <p>Creative Ideas / Rebranding</p>
              <p>Brand Marketing Strategy</p>
              <p>UI/UX design & Development</p>
              <p>Social Media Design</p>
              <p>Motion Graphics & 3D</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-gradient-start to-gradient-end opacity-90"></div>
    </div>
  );
};

export default MainContent;