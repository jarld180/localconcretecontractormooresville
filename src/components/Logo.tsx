import React from 'react';

const Logo: React.FC<{ className?: string, color?: string }> = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* Truck Body/Chassis */}
    <path d="M2 18h18" />
    {/* Cab */}
    <path d="M16 18v-5h3l2 2v3" />
    <path d="M19 13v2" />
    {/* Mixer Drum (The Barrel) */}
    <path d="M13.5 7.5L5 10.5C4 11 3.5 12 3.5 13s0.5 2 1.5 2.5l8.5 3V7.5z" />
    <path d="M13.5 7.5c1 0 1.5 1 1.5 2.5s-0.5 2.5-1.5 2.5" />
    {/* Wheels */}
    <circle cx="5.5" cy="18" r="2" />
    <circle cx="10.5" cy="18" r="2" />
    <circle cx="18" cy="18" r="2" />
  </svg>
);

export default Logo;

