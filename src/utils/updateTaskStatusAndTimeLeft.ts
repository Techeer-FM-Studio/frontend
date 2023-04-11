import { TaskInfo } from '@/types/routine';

const updateTaskStatusAndTimeLeft = (
  taskInfo: TaskInfo,
  setTimeLeft: (timeLeft: {
    days: number;
    hours: number;
    minutes: number;
  }) => void,
  setRoutineStatus: (status: string) => void
) => {
  const currentTime = new Date().getTime();
  const startAtTime = new Date(taskInfo.startAt).getTime();
  const endAtTime = new Date(taskInfo.endAt).getTime();
  const timeDiff = endAtTime - currentTime;

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

  setTimeLeft({ days, hours, minutes });

  if (currentTime < startAtTime && !taskInfo.isFinished) {
    setRoutineStatus('시작 전');
  } else if (
    currentTime >= startAtTime &&
    currentTime < endAtTime &&
    !taskInfo.isFinished
  ) {
    setRoutineStatus('진행 중');
  } else {
    setRoutineStatus('종료');
  }
};

export default updateTaskStatusAndTimeLeft;
