import React, { useState } from 'react';

// import styles
import styles from '../styles/pages/MainPage.module.scss';

// import components
import Calendar from '@/components/calendar/Calendar';
import RoutineMain from '@/components/routine/Main';
import BannerMainSlider from '@/components/banner/MainSlider';
import UserMainInfo from '@/components/user/MainInfo';
import RoutineSpecial from '@/components/routine/Special';
import { BannerTaskInfoType, TaskInfoType } from '@/types/routine';

export default function MainPage() {
  const [selectedTasks, setSelectedTasks] = useState<TaskInfoType[]>([]);
  const [selectedBannerTasks, setSelectedBannerTasks] = useState<
    BannerTaskInfoType[]
  >([]);
  // console.log(process.env.NODE_ENV);
  // console.log(selectedTasks);
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const updateSelectedTask = (updatedTask: TaskInfoType) => {
    setSelectedTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.taskId === updatedTask.taskId ? updatedTask : task,
      ),
    );
  };

  const updateBannerSelectedTask = (updatedBannerTask: BannerTaskInfoType) => {
    setSelectedBannerTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.bannerId === updatedBannerTask.bannerId ? updatedBannerTask : task,
      ),
    );
  };

  // TODO: 사용할건지 물어보기
  // const handleBannerTasksChange = (tasks: BannerTaskInfoType[]) => {
  //   console.log('Banner tasks have been updated:', tasks);
  // };

  return (
    <div className={styles.page}>
      <div className={styles.contentLayout}>
        <div className={styles.contentCenter}>
          {/* 달력 컴포넌트 */}
          <Calendar
            onTasksChange={setSelectedTasks}
            onBannerTasksChange={setSelectedBannerTasks}
            onAddTaskClick={handleShowForm}
            // onBannerTasksChange={handleBannerTasksChange}
          />
          {/* 루틴 정보를 나타내는 RoutineLayout 컴포넌트 */}
          <div className={styles.routine}>
            <RoutineMain
              selectedTasks={selectedTasks}
              selectedBannerTasks={selectedBannerTasks}
              setSelectedTasks={setSelectedTasks}
              showForm={showForm}
              setShowForm={setShowForm}
              onUpdateSelectedBannerTask={updateBannerSelectedTask}
              onUpdateSelectedTask={updateSelectedTask}
            />
          </div>
          <div className={styles.contentRight}>
            <UserMainInfo />
            <RoutineSpecial />
          </div>
        </div>
        <div className={styles.contentBottom}>
          <BannerMainSlider />
        </div>
      </div>
    </div>
  );
}
