import { useState, useEffect, useCallback } from 'react';

type SlideNavigationType = {
  currentImageIndex: number;
  onNextButtonClick: () => void;
  onPrevButtonClick: () => void;
};

const useSlideNavigation = (
  imagesLength: number,
  intervalDuration: number = 3000,
): SlideNavigationType => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const onNextButtonClick = useCallback(() => {
    setCurrentImageIndex(
      (currentIndex: number) => (currentIndex + 1) % imagesLength,
    );
  }, [imagesLength]);

  const onPrevButtonClick = () => {
    setCurrentImageIndex(
      (currentIndex: number) =>
        (currentIndex + imagesLength - 1) % imagesLength,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      onNextButtonClick();
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [currentImageIndex, intervalDuration, onNextButtonClick]);

  return {
    currentImageIndex,
    onNextButtonClick,
    onPrevButtonClick,
  };
};

export default useSlideNavigation;
