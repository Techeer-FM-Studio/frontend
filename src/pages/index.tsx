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

  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const updateSelectedTask = (updatedTask: TaskInfo) => {
    setSelectedTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.taskId === updatedTask.taskId ? updatedTask : task
      )
    );
  };

  return (
    <div className={styles.page}>
      <div className={styles.contentLayout}>
        <div className={styles.contentCenter}>
          {/* 달력 컴포넌트 */}
          <Calendar
            onTasksChange={setSelectedTasks}
            onAddTaskClick={handleShowForm}
          />
          {/* 루틴 정보를 나타내는 RoutineLayout 컴포넌트 */}
          <div className={styles.routine}>
            <RoutineLayout
              selectedTasks={selectedTasks}
              showForm={showForm}
              setShowForm={setShowForm}
              onUpdateSelectedTask={updateSelectedTask}
            />
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
