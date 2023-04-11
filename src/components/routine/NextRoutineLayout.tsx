import { useEffect, useState } from 'react';
import styles from '../../styles/components/routine/NextRoutineLayout.module.scss';
import { getNextRoutine } from '@/apis/getNextRoutine';
import { TaskInfo, TaskInfoListResponse } from '@/types/routine';
import updateTaskStatusAndTimeLeft from '@/utils/updateTaskStatusAndTimeLeft';

const NextRoutineLayout = () => {
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
  const [nextRoutineData, setNextRoutineData] = useState<TaskInfo | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNextRoutine(1, 1);

      if (data?.length > 0) {
        const taskInfo = data[0].taskInfoList[0];
        setNextRoutineData(taskInfo);

        const interval = setInterval(() => {
          updateTaskStatusAndTimeLeft(taskInfo, setTimeLeft, setRoutineStatus);
          // 함수를 호출하면서 setTimeLeft와 setRoutineStatus를 인자로 전달합니다.
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
    <div className={styles.NextRoutineLayout}>
      <div className={styles.SelectMenu}>NextRoutine</div>
      {nextRoutineData ? (
        <div className={styles.RoutineInfo}>
          <p>Writer: {nextRoutineData?.writer}</p>
          <p>Title: {nextRoutineData?.title}</p>
          <p>Memo: {nextRoutineData?.memo}</p>
          <p>
            Start Time:{' '}
            {new Date(nextRoutineData?.startAt).toLocaleString('ko-KR')}
          </p>
          <p>
            End Time: {new Date(nextRoutineData?.endAt).toLocaleString('ko-KR')}
          </p>
          <p>Time Left: {timeLeftDisplay()}</p>
          <p>Status: {routineStatus}</p>
        </div>
      ) : (
        <div>로딩중...</div>
      )}
    </div>
  );
};

export default NextRoutineLayout;
