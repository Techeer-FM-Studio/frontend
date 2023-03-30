import styles from '../../styles/components/calendar/Calendar.module.scss';
import { useState } from 'react';
import moment, { Moment } from 'moment';

const Calendar = () => {
  const [getMoment, setMoment] = useState(moment());

  const today = getMoment;
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

              const handleClick = (date: moment.Moment) => {
                if (date.format('MM') !== getMoment.format('MM')) {
                  const newMonth = date.clone().month();
                  setMoment(getMoment.clone().month(newMonth));
                }
                console.log(
                  `Button Clicked for year ${days.format(
                    'Y'
                  )} week ${week}, day ${days.format('D')}`
                );
              };

              const buttonColor =
                moment().format('YYYYMMDD') === days.format('YYYYMMDD')
                  ? 'red'
                  : days.format('MM') !== today.format('MM')
                  ? 'gray'
                  : 'inherit';

              return (
                <td key={index}>
                  <button
                    onClick={() => handleClick(days)}
                    style={{ backgroundColor: buttonColor }}
                  >
                    <span>{days.format('D')}</span>
                  </button>
                </td>
              );
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
          onClick={() => setMoment(getMoment.clone().subtract(1, 'month'))}
        >
          이전달
        </button>
        <span>{today.format('YYYY 년 MM 월')}</span>
        <button onClick={() => setMoment(getMoment.clone().add(1, 'month'))}>
          다음달
        </button>
        <button onClick={() => setMoment(moment())}>Today</button>
      </div>
      <table>
        <tbody>{calendarArr()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
