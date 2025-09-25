import { useEffect, useRef, useState } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const useLazyLoad = (options = {}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, isIntersecting] = useIntersectionObserver(options);

  useEffect(() => {
    if (isIntersecting && !isLoaded) {
      setIsLoaded(true);
    }
  }, [isIntersecting, isLoaded]);

  return [ref, isLoaded];
};

export default useLazyLoad;
