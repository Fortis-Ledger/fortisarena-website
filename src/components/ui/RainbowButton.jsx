import React from 'react';
import { cn } from '../../utils/cn';

const RainbowButton = React.forwardRef(({ className, children, fullWidth, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl border border-gray-600 bg-gray-900 px-6 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:border-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black disabled:pointer-events-none disabled:opacity-50",
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
    </button>
  );
});

RainbowButton.displayName = "RainbowButton";

export { RainbowButton };
