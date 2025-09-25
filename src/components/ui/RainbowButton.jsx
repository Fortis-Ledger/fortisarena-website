import React from 'react';
import { cn } from '../../utils/cn';

const RainbowButton = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-black px-6 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
    </button>
  );
});

RainbowButton.displayName = "RainbowButton";

export { RainbowButton };
