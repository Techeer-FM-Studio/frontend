// 그리드 정보
// Rows = Height == 16, Gutter == 16
// Columns = Width == 80, Gutter == 20

import Header from '@/components/common/Header';
import React, { useState } from 'react';

// css
import styles from '../styles/pages/MainPage.module.scss';

// import pages
import Calendar from '@/components/calendar/Calendar';
import RoutineLayout from '@/components/routine/RoutineLayout';
import BannerMainLayout from '@/components/banner/BannerMainLayout';
import UserInfoMainLayout from '@/components/user/UserInfoMainLayout';
import NextRoutineLayout from '@/components/routine/NextRoutineLayout';

export default function MainPage() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div className={styles.page}>
      <Header />0
      <div className={styles.contentLayout}>
        <div className={styles.contentCenter}>
          <Calendar onAddTaskClick={handleShowForm} />
          <div className={styles.routine}>
            <RoutineLayout showForm={showForm} />
          </div>
          <div className={styles.contentRight}>
            <UserInfoMainLayout />
            <NextRoutineLayout />
          </div>
        </div>
        <div className={styles.contentBottom}>
          <BannerMainLayout />
        </div>
      </div>
    </div>
  );
}
