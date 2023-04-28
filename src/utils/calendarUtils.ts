// src/utils/calendarUtils.ts

import moment, { Moment } from 'moment';
import { TaskInfo } from '@/types/routine';
import { getRoutineListMonthly } from '@/apis/tasks/getRoutineListMonthly';

export const fetchTasks = async (
  selectedDate: Moment,
  setTasks: (tasks: TaskInfo[]) => void
) => {
  try {
    const data = await getRoutineListMonthly({
      memberId: 'Alice',
      year: selectedDate.year(),
      month: selectedDate.month() + 1,
    });
    setTasks(data);
  } catch (error) {
    console.error(error);
    // 에러 핸들링 로직 추가
  }
};

export const hasEvent = (
  date: moment.Moment,
  tasks: TaskInfo[] = []
): boolean => {
  return tasks.some((task) => {
    const start = moment(task.startAt);
    const end = moment(task.endAt);
    return date.isBetween(start, end, 'day', '[]');
  });
};

export const updateSelectedTasks = (
  date: moment.Moment,
  tasks: TaskInfo[],
  setSelectedTasks: (tasks: TaskInfo[]) => void,
  onTasksChange: (tasks: TaskInfo[]) => void
) => {
  const tasksOnSelectedDay = tasks.filter((task) => {
    const start = moment(task.startAt);
    const end = moment(task.endAt);
    return date.isBetween(start, end, 'day', '[]');
  });
  setSelectedTasks(tasksOnSelectedDay);
  onTasksChange(tasksOnSelectedDay);
};
