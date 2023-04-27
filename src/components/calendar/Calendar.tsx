import styles from '../../styles/components/calendar/Calendar.module.scss';
import { useState, useEffect } from 'react';
import moment, { Moment } from 'moment';
import { TaskInfo } from '@/types/routine';
import { fetchTasks, updateSelectedTasks } from '@/utils/calendarUtils';
import CalendarTable from './CalendarTable';

interface CalendarProps {
  onTasksChange: (tasks: TaskInfo[]) => void;
  onAddTaskClick: () => void;
}

const Calendar: React.FC<CalendarProps> = ({
  onAddTaskClick,
  onTasksChange,
}) => {
  const [getMoment, setMoment] = useState(moment());
  const [recentlyClickedDay, setRecentlyClickedDay] = useState<Moment>();
  const [tasks, setTasks] = useState<TaskInfo[]>([]);
  const [selectedTasks, setSelectedTasks] = useState<TaskInfo[]>([]);

  const today = getMoment;

  useEffect(() => {
    fetchTasks(moment(), setTasks);
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
    setRecentlyClickedDay(date);
    updateSelectedTasks(date, tasks, setSelectedTasks, onTasksChange);
  };

  return (
    <div className={styles.calendar}>
      <div className="control">
        <button
          onClick={() => setMoment(getMoment.clone().subtract(1, 'month'))}
        >
          이전달
        </button>
        <span>{today.format('YYYY 년 MM 월')}</span>
        <button onClick={() => setMoment(getMoment.clone().add(1, 'month'))}>
          다음달
        </button>
        <button
          onClick={() => {
            setMoment(moment());
            setRecentlyClickedDay(moment());
            handleClick(moment());
          }}
        >
          Today
        </button>
        <button onClick={onAddTaskClick}>+ 일정 추가하기</button>
      </div>
      <CalendarTable
        today={today}
        firstWeek={firstWeek}
        lastWeek={lastWeek}
        recentlyClickedDay={recentlyClickedDay}
        tasks={tasks}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Calendar;
