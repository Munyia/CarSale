import React, { useEffect } from 'react';

const MouseTrail = () => {
  useEffect(() => {
    const trails = [];

    const handleMouseMove = (e) => {
      const trail = document.createElement('div');
      trail.className = 'trail';
      trail.style.position = 'absolute';
      trail.style.width = '10px';
      trail.style.height = '10px';
      trail.style.borderRadius = '50%';
      trail.style.pointerEvents = 'none';

      // Lighter grey shadow effect
      trail.style.boxShadow = '0px 0px 10px 6px rgba(128, 128, 128, 0.5)'; 
      trail.style.left = `${e.pageX}px`;
      trail.style.top = `${e.pageY}px`;

      document.body.appendChild(trail);
      trails.push(trail);

      // Remove the trail after a delay
      setTimeout(() => {
        trail.remove();
        trails.shift();
      }, 500);
    };

    // Add event listener to track mouse movement
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      trails.forEach((trail) => trail.remove());
    };
  }, []);

  return null;
};

export default MouseTrail;
