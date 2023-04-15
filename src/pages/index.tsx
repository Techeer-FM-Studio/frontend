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
import { TaskInfo } from '@/types/routine';

export default function MainPage() {
  const [selectedTasks, setSelectedTasks] = useState<TaskInfo[]>([]);
  return (
    // 전체 페이지를 감싸는 div
    <div className={styles.page}>
      {/* 페이지 상단에 위치한 Header 컴포넌트 */}
      <Header />

      {/* 페이지 내용을 나타내는 contentLayout div */}
      <div className={styles.contentLayout}>
        {/* contentCenter div 내부에 위치한 Calendar, RoutineLayout, contentRight 컴포넌트 */}
        <div className={styles.contentCenter}>
          {/* 달력 컴포넌트 */}
          <Calendar onTasksChange={setSelectedTasks} />
          {/* 루틴 정보를 나타내는 RoutineLayout 컴포넌트 */}
          <div className={styles.routine}>
            <RoutineLayout selectedTasks={selectedTasks} />
          </div>

          {/* 유저 정보와 다음 루틴 정보를 나타내는 UserInfoMainLayout, NextRoutineLayout 컴포넌트 */}
          <div className={styles.contentRight}>
            {/* 유저 정보를 나타내는 UserInfoMainLayout 컴포넌트 */}
            <UserInfoMainLayout />

            {/* 다음 루틴 정보를 나타내는 NextRoutineLayout 컴포넌트 */}
            <NextRoutineLayout />
          </div>
        </div>

        {/* 페이지 하단에 위치한 BannerMainLayout 컴포넌트 */}
        <div className={styles.contentBottom}>
          <BannerMainLayout />
        </div>
      </div>
    </div>
  );
}
