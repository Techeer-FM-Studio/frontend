import Image from 'next/image';
import styles from '../../styles/components/banner/BannerMainLayout.module.scss';
import BannerImage from '../../../public/temp_images/BannerTempImage.png';

const BannerMainLayout = () => {
  return (
    <div className={styles.BannerMainLayout}>
      <Image
        src={BannerImage}
        alt="banner image"
        className={styles.BannerImage}
      />
    </div>
  );
};

export default BannerMainLayout;
