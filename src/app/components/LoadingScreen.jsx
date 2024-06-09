// components/LoadingScreen.js
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      } ${visible ? 'z-50' : 'z-0'} bg-gray-800 bg-opacity-50`}
    >
      <div className="text-5xl font-bold text-white">SC</div>
    </div>
  );
};

export default LoadingScreen;
