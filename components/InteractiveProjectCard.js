import { motion } from 'framer-motion';
import { useState } from 'react';

const InteractiveProjectCard = ({ 
  title, 
  description, 
  technologies, 
  image, 
  liveUrl, 
  githubUrl,
  category 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      <motion.div
        className="bg-white rounded-xl shadow-elegant overflow-hidden"
        whileHover={{ 
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Overlay with tech stack */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex flex-wrap gap-2">
                {technologies.slice(0, 4).map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0, 
                      y: isHovered ? 0 : 10 
                    }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1 
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
                {technologies.length > 4 && (
                  <motion.span
                    className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0, 
                      y: isHovered ? 0 : 10 
                    }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.4 
                    }}
                  >
                    +{technologies.length - 4} more
                  </motion.span>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <motion.h3 
              className="text-xl font-bold text-midnight-navy"
              whileHover={{ color: "#70193D" }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
            <span className="px-3 py-1 bg-qatar-maroon/10 text-qatar-maroon text-xs rounded-full font-medium">
              {category}
            </span>
          </div>
          
          <p className="text-charcoal/80 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-qatar-maroon text-white text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-midnight-navy transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Live Demo
              </motion.a>
            )}
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-qatar-maroon text-qatar-maroon text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-qatar-maroon hover:text-white transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Code
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InteractiveProjectCard; 