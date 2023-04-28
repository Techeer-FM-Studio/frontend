import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import useBannerNavigation from '../../hooks/useSlideNavigation'; // Import the custom hook

// Import Sass File
import styles from '../../styles/components/banner/BannerMainLayout.module.scss';

// Import BannerTempImages
import BannerImage1 from '../../../public/temp_images/BannerTempImage1.png';
import BannerImage2 from '../../../public/temp_images/BannerTempImage2.png';
import BannerImage3 from '../../../public/temp_images/BannerTempImage3.png';
import BannerImage4 from '../../../public/temp_images/BannerTempImage4.png';
import BannerImage5 from '../../../public/temp_images/BannerTempImage5.png';

// StaticImageData 타입을 배열로 만듦
const IMAGE_URLS: StaticImageData[] = [
  BannerImage1,
  BannerImage2,
  BannerImage3,
  BannerImage4,
  BannerImage5,
];

interface BannerMainLayoutProps {
  imageUrls?: StaticImageData[]; // 이미지 URL 배열 프로퍼티
}

// 배너 메인 레이아웃 컴포넌트
const BannerMainLayout: React.FC<BannerMainLayoutProps> = ({
  imageUrls = IMAGE_URLS, // 이미지 URL 배열을 전달받지 않으면 기본 이미지 URL 배열 사용
}) => {
  const { currentImageIndex, onNextButtonClick, onPrevButtonClick } =
    useBannerNavigation(imageUrls.length);

  return (
    // BannerMainLayout 컴포넌트의 최상위 요소, 이미지와 함께 배경색을 입히기 위한 wrapper
    <div className={styles.BannerMainLayout}>
      {/* 이미지와 이미지 정보(인덱스, 화살표 버튼)를 감싸는 wrapper */}
      <div className={styles.BannerImageWrapper}>
        {/* 현재 보이는 이미지 */}
        <Image
          src={IMAGE_URLS[currentImageIndex]}
          alt="banner image"
          className={styles.BannerImage}
          priority={true} // 가장 용량이 큰 이미지부터 로드하기 위한 속성
        />
        {/* 이미지 위에 어두운 반투명 레이어 */}
        <div className={styles.BannerImageOverlay}>
          {/* 왼쪽, 오른쪽 화살표 버튼을 감싸는 wrapper */}
          <div className={styles.ArrowButtonWrapper}>
            {/* 왼쪽 화살표 버튼 */}
            <button
              className={styles.PrevButton}
              onClick={onPrevButtonClick}
              aria-label="previous image"
            >
              {/* 왼쪽 화살표 SVG 아이콘 */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M15 3l-9 9 9 9" />
              </svg>
            </button>
            {/* 현재 보이는 이미지의 인덱스와 전체 이미지 개수를 표시하는 div */}
            <div className={styles.ImageIndex}>
              {currentImageIndex + 1}/{IMAGE_URLS.length}
            </div>
            {/* 오른쪽 화살표 버튼 */}
            <button
              className={styles.NextButton}
              onClick={onNextButtonClick}
              aria-label="next image"
            >
              {/* 오른쪽 화살표 SVG 아이콘 */}
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
