// useSlideNavigation.ts
import { useState, useEffect } from 'react';

interface SlideNavigation {
  currentImageIndex: number;
  onNextButtonClick: () => void;
  onPrevButtonClick: () => void;
}

const useSlideNavigation = (
  imagesLength: number,
  intervalDuration: number = 3000
): SlideNavigation => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const onNextButtonClick = () => {
    setCurrentImageIndex(
      (currentIndex: number) => (currentIndex + 1) % imagesLength
    );
  };

  const onPrevButtonClick = () => {
    setCurrentImageIndex(
      (currentIndex: number) => (currentIndex + imagesLength - 1) % imagesLength
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      onNextButtonClick();
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [currentImageIndex, intervalDuration]);

  return {
    currentImageIndex,
    onNextButtonClick,
    onPrevButtonClick,
  };
};

export default useSlideNavigation;