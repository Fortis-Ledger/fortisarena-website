import React, { memo } from 'react';
import useLazyLoad from '../hooks/useLazyLoad';

const LazyImage = memo(({ src, alt, className, placeholder, ...props }) => {
  const [ref, isLoaded] = useLazyLoad();

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} {...props}>
      {!isLoaded && placeholder && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          {placeholder}
        </div>
      )}
      {isLoaded && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

export default LazyImage;
