import React, { useEffect } from 'react';

import '../App.css';

const colors = ['#ccc', '#6cf', '#eba13a'];

export default function AnimatedCircles() {
  useEffect(() => {
    const animatedCircles = (event) => {
      const circle = document.createElement('div');
      circle.className = 'circle';
      document.body.appendChild(circle);

      circle.style.left = `${event.clientX}px`;
      circle.style.top = `${event.clientY}px`;

      const color = colors[Math.floor(Math.random() * colors.length)];
      circle.style.borderColor = color;

      // Trigger animation
      requestAnimationFrame(() => {
        circle.style.transition = 'all 0.5s linear';
        circle.style.left = `${circle.offsetLeft - 20}px`;
        circle.style.top = `${circle.offsetTop - 20}px`;
        circle.style.width = '36px';
        circle.style.height = '36px';
        circle.style.borderWidth = '5px';
        circle.style.opacity = '0';
      });

      // Remove after animation
      setTimeout(() => circle.remove(), 500);
    };

    document.addEventListener('mousemove', animatedCircles);
    return () => document.removeEventListener('mousemove', animatedCircles);
  }, []);

  return null; // This component doesn't render anything itself
}
