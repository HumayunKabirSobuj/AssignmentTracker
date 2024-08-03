

// Main.jsx
import  { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import SplashScreen from './SplashScreen';


const Main = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 15000); 

    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=''>
      {showSplash ? (
        <SplashScreen onAnimationEnd={() => setShowSplash(false)} />
      ) : (
        <div>
          <Navbar />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Main;