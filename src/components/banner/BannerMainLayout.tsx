import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from '../../styles/components/banner/BannerMainLayout.module.scss';
import BannerImage1 from '../../../public/temp_images/BannerTempImage1.png';
import BannerImage2 from '../../../public/temp_images/BannerTempImage2.png';
import BannerImage3 from '../../../public/temp_images/BannerTempImage3.png';
import BannerImage4 from '../../../public/temp_images/BannerTempImage4.png';
import BannerImage5 from '../../../public/temp_images/BannerTempImage5.png';

const IMAGE_URLS: StaticImageData[] = [
  BannerImage1,
  BannerImage2,
  BannerImage3,
  BannerImage4,
  BannerImage5,
];

interface BannerMainLayoutProps {
  imageUrls?: StaticImageData[];
}

const BannerMainLayout: React.FC<BannerMainLayoutProps> = ({
  imageUrls = IMAGE_URLS,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const onNextButtonClick = () => {
    setCurrentImageIndex((currentIndex: number) =>
      currentIndex === IMAGE_URLS.length - 1 ? 0 : currentIndex + 1
    );
  };

  const onPrevButtonClick = () => {
    setCurrentImageIndex((currentIndex: number) =>
      currentIndex === 0 ? IMAGE_URLS.length - 1 : currentIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      onNextButtonClick();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.BannerMainLayout}>
      <div className={styles.BannerImageWrapper}>
        <Image
          src={IMAGE_URLS[currentImageIndex]}
          alt="banner image"
          className={styles.BannerImage}
          priority={true} // 가장 용량이 큰 이미지부터 로드하기 위한 속성
        />
        <div className={styles.BannerImageOverlay}>
          <div className={styles.ArrowButtonWrapper}>
            <button
              className={styles.PrevButton}
              onClick={onPrevButtonClick}
              aria-label="previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M15 3l-9 9 9 9" />
              </svg>
            </button>
            <div className={styles.ImageIndex}>
              {currentImageIndex + 1}/{IMAGE_URLS.length}
            </div>
            <button
              className={styles.NextButton}
              onClick={onNextButtonClick}
              aria-label="next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M9 21l9-9-9-9" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerMainLayout;
