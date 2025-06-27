'use client';
import React from "react";

export default function Home() {
  return (
    <div className="japan-flag w-full h-screen flex items-center justify-center">
      <div className="japan-circle rounded-full aspect-square" style={{ width: '40vmin' }}></div>
      
      <style jsx global>{`
        @keyframes colorSwap {
          0%, 49.99% {
            background-color: white;
          }
          50%, 100% {
            background-color: #dc2626;
          }
        }
        
        @keyframes circleColorSwap {
          0%, 49.99% {
            background-color: #dc2626;
          }
          50%, 100% {
            background-color: white;
          }
        }
        
        .japan-flag {
          animation: colorSwap 0.4s steps(1) infinite;
        }
        
        .japan-circle {
          animation: circleColorSwap 0.4s steps(1) infinite;
        }
      `}</style>
    </div>
  );
}
