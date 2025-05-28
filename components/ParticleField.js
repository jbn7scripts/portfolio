import { useEffect, useRef } from 'react';

const ParticleField = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
      
      // Random colors
      const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff41'];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      container.appendChild(particle);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="particles fixed inset-0 z-10 pointer-events-none" />;
};

export default ParticleField; 