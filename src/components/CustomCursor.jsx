import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if touch device - don't render cursor
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }
    
    setIsVisible(true);

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    document.addEventListener('mouseover', handleMouseEnter, { passive: true });
    document.addEventListener('mouseout', handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        .custom-cursor {
          position: fixed;
          pointer-events: none;
          z-index: 99999;
          mix-blend-mode: difference;
          transition: transform 0.15s ease-out;
        }
        .cursor-dot {
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        .cursor-ring {
          position: fixed;
          pointer-events: none;
          z-index: 99998;
          width: 32px;
          height: 32px;
          border: 1px solid rgba(6, 182, 212, 0.5);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: transform 0.2s ease-out, opacity 0.2s ease-out;
        }
        .cursor-ring.hovering {
          transform: translate(-50%, -50%) scale(1.5);
          opacity: 0.8;
        }
      `}</style>
      
      {/* Main cursor dot */}
      <div
        className="custom-cursor"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      >
        <div className="cursor-dot" />
      </div>

      {/* Outer ring */}
      <div
        className={`cursor-ring ${isHovering ? 'hovering' : ''}`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  );
};

export default CustomCursor;
