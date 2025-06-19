import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedSkillBar = ({ 
  skill, 
  percentage, 
  color = "qatar-maroon",
  delay = 0 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold: 0.5,
    margin: "-50px 0px -50px 0px"
  });

  const barColors = {
    'qatar-maroon': 'bg-qatar-maroon',
    'midnight-navy': 'bg-midnight-navy',
    'gold-accent': 'bg-gold-accent',
    'royal-blue': 'bg-royal-blue',
    'teal-blue': 'bg-teal-blue'
  };

  const selectedColor = barColors[color] || barColors['qatar-maroon'];

  return (
    <motion.div
      ref={ref}
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-charcoal font-medium">{skill}</span>
        <span className="text-qatar-maroon font-semibold">{percentage}%</span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div
          className={`h-full ${selectedColor} rounded-full`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: delay + 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        />
      </div>
    </motion.div>
  );
};

export default AnimatedSkillBar; 