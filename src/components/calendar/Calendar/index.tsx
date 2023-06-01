import styles from './styles.module.scss';
import { useState, useEffect } from 'react';
import moment, { Moment } from 'moment';
import { BannerTaskInfoType, TaskInfoType } from '@/types/routine';
import {
  fetchTasks,
  fetchBannerTasks,
  updateSelectedTasks,
  updateSelectedBannerTasks,
} from '@/utils/calendarUtils';
import CalendarTable from '../CalendarTable';
import MonthYearSelector from '../MonthYearSelector';

interface CalendarProps {
  onTasksChange: (tasks: TaskInfoType[]) => void;
  onBannerTasksChange: (tasks: BannerTaskInfoType[]) => void;
  onAddTaskClick: () => void;
}

const Calendar: React.FC<CalendarProps> = ({
  onAddTaskClick,
  onTasksChange,
  onBannerTasksChange,
}) => {
  const [getMoment, setMoment] = useState(moment());
  const [recentlyClickedDay, setRecentlyClickedDay] = useState<Moment>();
  const [tasks, setTasks] = useState<TaskInfoType[]>([]);
  const [selectedTasks, setSelectedTasks] = useState<TaskInfoType[]>([]);
  const [bannerTasks, setBannerTasks] = useState<BannerTaskInfoType[]>([]);
  const [selectedBannerTasks, setSelectedBannerTasks] = useState<
    BannerTaskInfoType[]
  >([]);

  const today = getMoment;

  // MonthYearSelector에서 변경된 년도와 월을 처리하는 함수를 추가합니다.
  const handleMonthYearChange = (month: number, year: number) => {
    setMoment(getMoment.clone().set({ month, year }));
  };

  // 기존 일정 불러오기 useEffect
  useEffect(() => {
    fetchTasks(moment(), setTasks);
  }, []);

  // 새로운 배너 일정 불러오기 useEffect
  useEffect(() => {
    fetchBannerTasks(moment(), setBannerTasks);
  }, []);

  useEffect(() => {
    fetchTasks(today, setTasks);
  }, [today]);

  useEffect(() => {
    if (recentlyClickedDay) {
      fetchTasks(recentlyClickedDay, setTasks);
    }
  }, [recentlyClickedDay]);

  const firstWeek = today.clone().startOf('month').week();
  const lastWeek =
    today.clone().endOf('month').week() === 1
      ? 53
      : today.clone().endOf('month').week();

  const handleClick = (date: moment.Moment) => {
    if (date.month() !== today.month()) {
      if (date.isBefore(today, 'month')) {
        setMoment(getMoment.clone().subtract(1, 'month'));
      } else {
        setMoment(getMoment.clone().add(1, 'month'));
      }
    }
    setRecentlyClickedDay(date);
    updateSelectedTasks(date, tasks, setSelectedTasks, onTasksChange);
    updateSelectedBannerTasks(
      date,
      bannerTasks,
      setSelectedBannerTasks,
      onBannerTasksChange,
    );
  };

  const handleClickToday = (date: moment.Moment) => {
    setRecentlyClickedDay(date);
    updateSelectedTasks(date, tasks, setSelectedTasks, onTasksChange);
    updateSelectedBannerTasks(
      date,
      bannerTasks,
      setSelectedBannerTasks,
      onBannerTasksChange,
    );
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.control}>
        <div className={styles.monthControl}>
          <button
            onClick={() => setMoment(getMoment.clone().subtract(1, 'month'))}
          >
            이전달
          </button>
          {/* 기존 년도와 월 텍스트를 새로운 MonthYearSelector 컴포넌트로 변경합니다. */}
          <MonthYearSelector
            currentMonth={today.month()}
            currentYear={today.year()}
            onMonthYearChange={handleMonthYearChange}
          />
          <button onClick={() => setMoment(getMoment.clone().add(1, 'month'))}>
            다음달
          </button>
        </div>
        <div className={styles.otherControl}>
          <button
            onClick={() => {
              setMoment(moment());
              setRecentlyClickedDay(moment());
              handleClickToday(moment());
            }}
          >
            Today
          </button>
          <button onClick={onAddTaskClick}>+ 일정 추가하기</button>
        </div>
      </div>
      <CalendarTable
        today={today}
        firstWeek={firstWeek}
        lastWeek={lastWeek}
        recentlyClickedDay={recentlyClickedDay}
        tasks={tasks}
        bannerTasks={bannerTasks} // 배너 일정 추가
        handleClick={handleClick}
      />
    </div>
  );
};

export default Calendar;
