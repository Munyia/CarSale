// src/components/MouseTrail.js
import React, { useEffect } from 'react';

const MouseTrail = () => {
  useEffect(() => {
    const trails = [];
    // Define a limited and mature color palette
    const colors = [
      '#4A90E2', // Blue
       '#673de6',
      '#ddd', // Orange
      '#C0C0C0', // Gray
      '#808080', // Grey
      '#FFFFFF', // White
      '#000000', // Red
  
    ];

    const handleMouseMove = (e) => {
      const trail = document.createElement('div');
      trail.className = 'trail';
      trail.style.position = 'absolute';
      trail.style.width = '10px';
      trail.style.height = '10px';
      trail.style.borderRadius = '50%';
      trail.style.pointerEvents = 'none';
      // Pick a random color from the defined palette
      trail.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      trail.style.left = `${e.pageX}px`;
      trail.style.top = `${e.pageY}px`;
      document.body.appendChild(trail);
      trails.push(trail);

      setTimeout(() => {
        trail.remove();
        trails.shift();
      }, 500);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      trails.forEach((trail) => trail.remove());
    };
  }, []);

  return null;
};

export default MouseTrail;
