import { useEffect, useState } from 'react';
import styles from '../../styles/components/routine/NextRoutineLayout.module.scss';
import { getNextRoutine } from '@/apis/getNextRoutine';

const NextRoutineLayout = () => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [routineStatus, setRoutineStatus] = useState<string>('');
  const [nextRoutineData, setNextRoutineData] = useState<any>({});
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNextRoutine(page, size);
      setNextRoutineData(data);

      let interval = setInterval(() => {
        const startAtTime = new Date(data.startAt).getTime();
        const endAtTime = new Date(data.endAt).getTime();
        const currentTime = new Date().getTime();
        const timeDiff = startAtTime - currentTime;
        setTimeLeft(Math.floor(timeDiff / (1000 * 60)));
        if (Math.floor(timeDiff / (1000 * 60)) > 0 && !data.isFinished) {
          setRoutineStatus('시작 전');
        } else if (
          Math.floor(timeDiff / (1000 * 60)) <= 0 &&
          !data.isFinished
        ) {
          setRoutineStatus('진행 중');
        } else {
          setRoutineStatus('종료');
          clearInterval(interval);
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    };

    fetchData();
  }, [page, size]);

  return (
    <div className={styles.NextRoutineLayout}>
      <div className={styles.SelectMenu}>NextRoutine</div>
      <div className={styles.RoutineInfo}>
        <p>Writer: {nextRoutineData.writer}</p>
        <p>Title: {nextRoutineData.title}</p>
        <p>Memo: {nextRoutineData.memo}</p>
        <p>
          Start Time:{' '}
          {new Date(nextRoutineData.startAt).toLocaleString('ko-KR')}
          {/* 기존 데이터 : UTC Time, 07:30분이라고 뜨는데 오후 4시 20분에 확인 해보았더니 10분 전이라고 한다던가 */}
        </p>
        <p>
          End Time: {new Date(nextRoutineData.endAt).toLocaleString('ko-KR')}
        </p>
        <p>Time Left: {timeLeft} minutes</p>
        <p>Status: {routineStatus}</p>
      </div>
    </div>
  );
};

export default NextRoutineLayout;
