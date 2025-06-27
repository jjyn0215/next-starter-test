'use client';

import { useState, useEffect } from "react";

export default function Home() {
  const [isInverted, setIsInverted] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsInverted(prev => !prev);
    }, 200);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div 
      className={`w-full h-screen flex items-center justify-center ${
        isInverted ? 'bg-red-600' : 'bg-white'
      }`}
    >
      <div 
        className={`rounded-full aspect-square ${
          isInverted ? 'bg-white' : 'bg-red-600'
        }`}
        style={{ width: '40vmin' }}
      ></div>
    </div>
  );
}
