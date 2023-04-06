import { useEffect, useState } from 'react';
import styles from '../../styles/components/routine/NextRoutineLayout.module.scss';

interface NextRoutineType {
  writer: string;
  title: string;
  memo: string;
  startAt: string;
  endAt: string;
  isFinished: boolean;
  isOpened: boolean;
}

const mockNextRoutineData: NextRoutineType = {
  writer: 'John Doe',
  title: 'Morning Routine',
  memo: 'Drink water, brush teeth, meditate, exercise',
  startAt: '2023-04-06T07:30:00.000Z',
  endAt: '2023-04-06T08:30:00.000Z',
  isFinished: false,
  isOpened: true,
};

const NextRoutineLayout = () => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [routineStatus, setRoutineStatus] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      const startAtTime = new Date(mockNextRoutineData.startAt).getTime();
      const endAtTime = new Date(mockNextRoutineData.endAt).getTime();
      const currentTime = new Date().getTime();
      const timeDiff = startAtTime - currentTime;
      setTimeLeft(Math.floor(timeDiff / (1000 * 60)));
      if (timeLeft > 0 && !mockNextRoutineData.isFinished) {
        setRoutineStatus('시작 전');
      } else if (timeLeft <= 0 && !mockNextRoutineData.isFinished) {
        setRoutineStatus('진행 중');
      } else {
        setRoutineStatus('종료');
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft]);

  return (
    <div className={styles.NextRoutineLayout}>
      <div className={styles.SelectMenu}>NextRoutine</div>
      <div className={styles.RoutineInfo}>
        <p>Writer: {mockNextRoutineData.writer}</p>
        <p>Title: {mockNextRoutineData.title}</p>
        <p>Memo: {mockNextRoutineData.memo}</p>
        <p>Start Time: {new Date(mockNextRoutineData.startAt).toISOString()}</p>
        <p>End Time: {new Date(mockNextRoutineData.endAt).toISOString()}</p>
        <p>Time Left: {timeLeft} minutes</p>
        <p>Status: {routineStatus}</p>
      </div>
      <div className={styles.TimeLeft}>TimeLeft</div>
    </div>
  );
};

export default NextRoutineLayout;
