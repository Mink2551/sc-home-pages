// pages/index.js
"use client"

// pages/index.js
import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Homepage from './sections/Homepage/page';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Ensure the total animation is 3 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleSkip = () => setLoading(false);
    window.addEventListener('click', handleSkip);
    return () => window.removeEventListener('click', handleSkip);
  }, []);

  useEffect(() => {
    if (!loading) {
      const navigateToHomepage = async () => {
        await new Promise(resolve => setTimeout(resolve, 0)); 
        router.push('/sections/Homepage'); 
      };
      navigateToHomepage();
    }
  }, [loading, router]);

  return (
    <div className="relative min-h-screen">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50" style={{ backdropFilter: 'blur(10px)' }}>
          <CSSTransition in={loading} timeout={1000} classNames="fade">
            <div className="relative flex items-center justify-center w-32 h-32 bg-white rounded-full animate-grow-rotate">
              <div className="flex items-center justify-center w-28 h-28 border-4 border-red-500 rounded-full">
                <span className="text-5xl font-bold text-red-500 animate-grow-text">SC</span>
              </div>
            </div>
          </CSSTransition>
        </div>
      )}
      {!loading && (
        <main className={`flex flex-col w-full h-full `}>
        </main>
      )}
    </div>
  );
}

