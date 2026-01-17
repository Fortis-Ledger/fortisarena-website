import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import fortisArenaSvg from '../assets/fortisarena.svg';

const SecretSvgPage = () => {
  const [searchParams] = useSearchParams();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const key = searchParams.get('key');

  useEffect(() => {
    if (key === 'fortisarena') {
      setIsAuthorized(true);
    }
  }, [key]);

  if (!isAuthorized) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <h1 className="text-2xl font-bold">404 - Not Found</h1>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <img src={fortisArenaSvg} alt="Fortis Arena" className="max-w-full max-h-full" />
    </div>
  );
};

export default SecretSvgPage;
