import { useEffect, useState } from 'react';
import styles from '../../styles/components/routine/NextRoutineLayout.module.scss';
import { getNextRoutine } from '@/apis/getNextRoutine';
import { TaskInfo, TaskInfoListResponse } from '@/types/routine';
import updateTaskStatusAndTimeLeft from '@/utils/updateTaskStatusAndTimeLeft';
import getTimeLeftDisplay from '@/utils/getTimeLeftDisplay';

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

  // useEffect를 이용해 API로부터 데이터를 받아옵니다.
  useEffect(() => {
    const fetchData = async () => {
      // getNextRoutine 함수를 이용해 데이터를 받아옵니다.
      const data = await getNextRoutine(1, 1);

      if (data?.length > 0) {
        // 받아온 데이터에서 첫 번째 TaskInfo 객체를 가져옵니다.
        const taskInfo = data[0].taskInfoList[0];
        setNextRoutineData(taskInfo);

        // 1초마다 updateTaskStatusAndTimeLeft 함수를 호출합니다.
        const interval = setInterval(() => {
          updateTaskStatusAndTimeLeft(taskInfo, setTimeLeft, setRoutineStatus);
        }, 1000);

        // useEffect cleanup 함수를 이용해 setInterval 함수를 해제합니다.
        return () => {
          clearInterval(interval);
        };
      }
    };

    fetchData();
  }, [setTimeLeft, setRoutineStatus]);

  // getTimeLeftDisplay 함수를 호출하여, 남은 시간을 보여주는 display string을 생성합니다.
  const timeLeftDisplay = () => {
    return getTimeLeftDisplay(timeLeft);
  };

  return (
    <div className={styles.NextRoutineLayout}>
      <div className={styles.SelectMenu}>NextRoutine</div>
      {/* nextRoutineData가 존재한다면 TaskInfo 정보를 표시합니다. */}
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
          {/* getTimeLeftDisplay 함수를 호출하여, 남은 시간을 보여줍니다. */}
          <p>Time Left: {timeLeftDisplay()}</p>
          <p>Status: {routineStatus}</p>
        </div>
      ) : (
        // nextRoutineData가 없다면 로딩 중임을 표시합니다.
        <div>로딩중...</div>
      )}
    </div>
  );
};

export default NextRoutineLayout;
