import styles from '../styles/Calendar.module.scss';
import { useState } from 'react';
import moment from 'moment';

const Calendar = () => {
  const [getMoment, setMoment] = useState(moment());

  const today = getMoment; // today == moment() 입니다.
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek =
    today.clone().endOf('month').week() === 1
      ? 53
      : today.clone().endOf('month').week();

  const calendarArr = (): JSX.Element[] => {
    let result: JSX.Element[] = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {Array(7)
            .fill(0)
            .map((data, index) => {
              let days = today
                .clone()
                .startOf('year')
                .week(week)
                .startOf('week')
                .add(index, 'day');

              const handleClick = () => {
                // 클릭 이벤트 핸들러 함수 정의
                console.log(
                  `Button Clicked for year ${days.format(
                    'Y'
                  )} week ${week}, day ${days.format('D')}`
                );
              };

              if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                return (
                  <td key={index}>
                    <button
                      onClick={handleClick}
                      style={{ backgroundColor: 'red' }}
                    >
                      <span>{days.format('D')}</span>
                    </button>
                  </td>
                );
              } else if (days.format('MM') !== today.format('MM')) {
                return (
                  <td key={index}>
                    <button
                      onClick={handleClick}
                      style={{ backgroundColor: 'gray' }}
                    >
                      <span>{days.format('D')}</span>
                    </button>
                  </td>
                );
              } else {
                return (
                  <td key={index}>
                    <button onClick={handleClick}>
                      <span>{days.format('D')}</span>
                    </button>
                  </td>
                );
              }
            })}
        </tr>
      );
    }
    return result;
  };

  return (
    <div className={styles.calendar}>
      <div className="control">
        <button
          onClick={() => {
            setMoment(getMoment.clone().subtract(1, 'month'));
          }}
        >
          이전달
        </button>
        <span>{today.format('YYYY 년 MM 월')}</span>
        {/* YYYY는 년도 MM은 달 입니다. */}
        <button
          onClick={() => {
            setMoment(getMoment.clone().add(1, 'month'));
          }}
        >
          다음달
        </button>
      </div>
      <table>
        <tbody>{calendarArr()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
