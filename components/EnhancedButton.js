import { motion } from 'framer-motion';

const EnhancedButton = ({ 
  children, 
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  ...props 
}) => {
  const variants = {
    primary: "bg-qatar-maroon text-white hover:bg-midnight-navy",
    secondary: "bg-midnight-navy text-white hover:bg-qatar-maroon",
    accent: "bg-gold-accent text-charcoal hover:bg-warm-taupe",
    outline: "border-2 border-qatar-maroon text-qatar-maroon hover:bg-qatar-maroon hover:text-white",
    ghost: "text-qatar-maroon hover:bg-qatar-maroon hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const baseClasses = `
    ${variants[variant]}
    ${sizes[size]}
    rounded-lg font-medium transition-all duration-300 
    inline-flex items-center justify-center gap-2
    focus:outline-none focus:ring-2 focus:ring-qatar-maroon focus:ring-opacity-50
    disabled:opacity-50 disabled:cursor-not-allowed
    ${className}
  `;

  return (
    <motion.button
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(112, 25, 61, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default EnhancedButton; 