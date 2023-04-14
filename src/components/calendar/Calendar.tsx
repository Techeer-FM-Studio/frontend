import styles from '../../styles/components/calendar/Calendar.module.scss';
import { useEffect, useState } from 'react';
import moment, { Moment } from 'moment';
import { fetchTaskData } from '@/apis/fetchTaskData';
import { TaskInfo, TaskInfoListResponse } from '@/types/routine'; // 이 부분을 추가하세요.
import { text } from 'stream/consumers';

const Calendar = () => {
  const [tasks, setTasks] = useState<TaskInfo[]>([]);

  // useState hook을 사용하여 현재 날짜를 저장하고, setMoment 함수로 현재 날짜를 업데이트합니다.
  const [getMoment, setMoment] = useState(moment());

  // useState hook을 사용하여 최근 클릭한 날짜를 저장하고, setRecentlyClickedDay 함수로 업데이트합니다.
  const [recentlyClickedDay, setRecentlyClickedDay] = useState<Moment>();

  // today 변수에 useState hook에서 저장된 현재 날짜를 할당합니다.
  const today = getMoment;

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await fetchTaskData(2023, 4);
      try {
        setTasks(data[0].taskInfoList);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTasks();
  }, []);

  const hasEvent = (date: moment.Moment, tasks: TaskInfo[]): boolean => {
    return tasks.some((task) => {
      const start = moment(task.startAt);
      const end = moment(task.endAt);
      return date.isBetween(start, end, 'day', '[]');
    });
  };

  // 해당 월의 첫 주와 마지막 주를 계산합니다.
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek =
    today.clone().endOf('month').week() === 1
      ? 53
      : today.clone().endOf('month').week();

  // calendarArr 함수: 캘린더 테이블을 생성하는 함수입니다. -> 나중에 분리할 것
  const calendarArr = (): JSX.Element[] => {
    let result: JSX.Element[] = [];
    let week = firstWeek;

    // 캘린더 테이블의 행을 생성합니다.
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {Array(7)
            .fill(0)
            // 캘린더 테이블의 셀을 생성합니다.
            .map((data, index) => {
              // 해당 셀이 나타내는 날짜를 계산합니다.
              let days = today
                .clone()
                .startOf('year')
                .week(week)
                .startOf('week')
                .add(index, 'day');

              // 날짜를 클릭했을 때 실행되는 함수입니다.
              const handleClick = (date: moment.Moment) => {
                // 다른 달의 날짜를 클릭했을 경우, 캘린더의 월을 업데이트합니다.
                if (date.format('MM') !== getMoment.format('MM')) {
                  const newMonth = date.clone().month();
                  setMoment(getMoment.clone().month(newMonth));
                }
                // 최근에 클릭한 날짜를 업데이트합니다.
                setRecentlyClickedDay(date);
                console.log(
                  `Button Clicked for year ${days.format(
                    'Y'
                  )} week ${week}, day ${days.format('D')}`
                );
              };

              // 버튼의 배경색을 결정합니다.
              const buttonColor =
                moment().format('YYYYMMDD') === days.format('YYYYMMDD') // 오늘 날짜일 경우
                  ? 'yellow'
                  : recentlyClickedDay?.format('YYYYMMDD') === // 최근에 클릭한 날짜일 경우
                    days.format('YYYYMMDD')
                  ? 'green'
                  : days.format('MM') !== today.format('MM') // 다른 달의 날짜일 경우
                  ? 'gray'
                  : 'inherit';

              // 캘린더 테이블의 셀을 반환합니다.
              return (
                <td key={index}>
                  <button
                    onClick={() => handleClick(days)}
                    style={{ backgroundColor: buttonColor }}
                  >
                    <span>{days.format('D')}</span>
                    <br />
                    {hasEvent(days, tasks) && (
                      <span style={{ color: 'red' }}>•</span>
                    )}{' '}
                  </button>
                </td>
              );
            })}
        </tr>
      );
    }
    // 캘린더 테이블을 반환합니다.
    return result;
  };

  // 달력 UI와 관련된 React 컴포넌트를 정의합니다.
  // 컴포넌트 내부에는 현재 날짜를 표시하고, 이전/다음 달로 이동할 수 있도록 버튼이 제공됩니다.
  // 또한 일정 추가하기 버튼도 포함되어 있습니다.
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
        <button onClick={() => setMoment(moment())}>Today</button>
        <button>+ 일정 추가하기</button>
      </div>
      <table>
        <tbody>{calendarArr()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
