import React, { useEffect } from 'react';

const MouseTrail = () => {
  useEffect(() => {
    const trails = [];

    const handleMouseMove = (e) => {
      const trail = document.createElement('div');
      trail.className = 'trail';
      trail.style.position = 'absolute';
      trail.style.width = '15px'; // Increased size to make the shadow more visible
      trail.style.height = '15px';
      trail.style.borderRadius = '50%';
      trail.style.pointerEvents = 'none';

      // Add shadow effect instead of color
      trail.style.boxShadow = '0px 0px 10px 6px rgba(0, 0, 0, 0.5)'; // Shadow effect
      trail.style.left = `${e.pageX}px`;
      trail.style.top = `${e.pageY}px`;

      document.body.appendChild(trail);
      trails.push(trail);

      // Remove the trail after a delay
      setTimeout(() => {
        trail.remove();
        trails.shift();
      }, 500); // Adjust to control how long the shadow remains
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
