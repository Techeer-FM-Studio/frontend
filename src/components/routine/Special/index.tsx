import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { TaskInfoType } from '@/types/routine';
import { getSingleRoutine } from '@/apis/routine';

const RoutineSpecial = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
  });
  const [routineStatus, setRoutineStatus] = useState<string>('');
  const [nextRoutineData, setNextRoutineData] = useState<
    TaskInfoType | undefined
  >(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSingleRoutine(1);
      // console.log(data);
      if (data) {
        setNextRoutineData(data);

        const interval = setInterval(() => {
          const currentTime = new Date().getTime();
          const startAtTime = new Date(data.startAt).getTime();
          const endAtTime = new Date(data.endAt).getTime();
          const timeDiff = endAtTime - currentTime;

          const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          );
          const minutes = Math.floor(
            (timeDiff % (1000 * 60 * 60)) / (1000 * 60),
          );

          setTimeLeft({ days, hours, minutes });

          if (currentTime < startAtTime && !data.isFinished) {
            setRoutineStatus('시작 전');
          } else if (
            currentTime >= startAtTime &&
            currentTime < endAtTime &&
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
      }
    };

    fetchData();
  }, []);

  const timeLeftDisplay = () => {
    let display = '';
    if (timeLeft.days > 0) {
      display += `${timeLeft.days}일 `;
    }
    if (timeLeft.hours > 0) {
      display += `${timeLeft.hours}시간 `;
    }
    display += `${timeLeft.minutes}분`;
    return display;
  };

  return (
    <div className={styles.routineSpecial}>
      <div className={styles.routineSpecial__selectMenu}>NextRoutine</div>
      {nextRoutineData ? (
        <div className={styles.routineSpecial__info}>
          <p>Writer: {nextRoutineData?.writer}</p>
          <p>Title: {nextRoutineData?.title}</p>
          <p>Memo: {nextRoutineData?.memo}</p> <br />
          <p>
            Start Time:{' '}
            {new Date(nextRoutineData?.startAt).toLocaleString('ko-KR')}
          </p>
          <p>
            End Time: {new Date(nextRoutineData?.endAt).toLocaleString('ko-KR')}
          </p>
          <p className={styles.routineSpecial__timeLeft}>
            Time Left: {timeLeftDisplay()}
          </p>
          <p>Status: {routineStatus}</p>
        </div>
      ) : (
        <div>로딩중...</div>
      )}
    </div>
  );
};

export default RoutineSpecial;
