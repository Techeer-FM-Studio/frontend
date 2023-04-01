// 그리드 정보
// Rows = Height == 16, Gutter == 16
// Columns = Width == 80, Gutter == 20

import BannerItem from '@/components/banner/BannerItem';
import Header from '@/components/common/Header';
import React from 'react';
import styles from '../styles/pages/MainPage.module.scss';
import Calendar from '@/components/calendar/Calendar';

export default function MainPage() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <div className={styles.contentLayout}>
        <div className={styles.contentCenter}>
          <Calendar />
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
