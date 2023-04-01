// 그리드 정보
// Rows = Height == 16, Gutter == 16
// Columns = Width == 80, Gutter == 20
import React from 'react';

// css
import styles from '../styles/pages/MainPage.module.scss';

// import pages
import Calendar from '@/components/calendar/Calendar';
import RoutineLayout from '@/components/routine/RoutineLayout';

export default function MainPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>Header </div>

      <div className={styles.contentLayout}>
        <div className={styles.contentCenter}>
          <Calendar />
          <div className={styles.routine}>
            <RoutineLayout />
          </div>
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
