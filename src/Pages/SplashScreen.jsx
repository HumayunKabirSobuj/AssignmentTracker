// SplashScreen.js
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../public/LoadingAnimation.json';
import PropTypes from 'prop-types';
const SplashScreen = ({ onAnimationEnd }) => {
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  useEffect(() => {
    if (isAnimationFinished) {
      onAnimationEnd();
    }
  }, [isAnimationFinished, onAnimationEnd]);

  return (
    <div className="splash-screen flex justify-center items-center">
      <Lottie

        animationData={animationData}
        loop={false}
        onComplete={() => setIsAnimationFinished(true)}
        style={{ width: '50%', height: '50%' }}
      />
    </div>
  );
};

export default SplashScreen;

SplashScreen.propTypes = {
  onAnimationEnd: PropTypes.any.isRequired,
}