const CyberButton = ({ children, href, onClick, className = "", variant = "primary" }) => {
  const baseClasses = "relative px-8 py-3 font-bold text-white uppercase tracking-wider transition-all duration-300 transform hover:scale-105 overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400",
    secondary: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400",
    accent: "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400"
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className} neon-border scan-line`}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
    >
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
    </Component>
  );
};

export default CyberButton; 