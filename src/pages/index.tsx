// 그리드 정보
// Rows = Height == 16, Gutter == 16
// Columns = Width == 80, Gutter == 20

import BannerItem from '@/components/banner/BannerItem';
import React from 'react';
import styles from '../styles/MainPage.module.scss';

export default function MainPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>Header </div>
      <div style={{ position: 'relative', width: 300, height: 400 }}>
        <BannerItem
          item={{
            url: 'https://i.pinimg.com/564x/62/cd/fa/62cdfaba81ec4a1035af0476bb3d57b5.jpg',
            like: 29,
            veiws: 40,
            writer: '전종훈',
          }}
        ></BannerItem>
      </div>
      <div className={styles.contentLayout}>
        <div className={styles.contentCenter}>
          <div className={styles.calendar}>Calendar</div>
          <div className={styles.routine}>Routine</div>
          <div className={styles.contentRight}>
            <div className={styles.info}>Info</div>
            <div className={styles.nextRoutine}>NextRoutine</div>
          </div>
        </div>
        <div className={styles.contentBottom}>
          <div className={styles.banner}>Banner</div>
        </div>
      </div>
    </div>
  );
}
