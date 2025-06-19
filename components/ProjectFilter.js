import { motion } from 'framer-motion';
import { useState } from 'react';

const ProjectFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category, index) => (
        <motion.button
          key={category}
          className={`
            relative px-6 py-3 rounded-lg font-medium transition-all duration-300
            ${activeCategory === category 
              ? 'text-white bg-qatar-maroon shadow-lg' 
              : 'text-qatar-maroon bg-white border-2 border-qatar-maroon hover:bg-qatar-maroon hover:text-white'
            }
          `}
          onClick={() => onCategoryChange(category)}
          onHoverStart={() => setHoveredCategory(category)}
          onHoverEnd={() => setHoveredCategory(null)}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 8px 25px rgba(112, 25, 61, 0.2)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 300
          }}
        >
          {category}
          {activeCategory === category && (
            <motion.div
              className="absolute inset-0 bg-qatar-maroon rounded-lg"
              layoutId="activeTab"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default ProjectFilter; 