// src/components/calendar/CalendarTable.tsx

import { BannerTaskInfo, TaskInfo } from '@/types/routine';
import { hasEvent, hasBannerEvent } from '@/utils/calendarUtils';
import moment, { Moment } from 'moment';

interface CalendarTableProps {
  today: Moment;
  firstWeek: number;
  lastWeek: number;
  recentlyClickedDay: Moment | undefined;
  tasks: TaskInfo[];
  bannerTasks: BannerTaskInfo[];
  handleClick: (date: moment.Moment) => void;
}

const CalendarTable: React.FC<CalendarTableProps> = ({
  today,
  firstWeek,
  lastWeek,
  recentlyClickedDay,
  tasks,
  bannerTasks,
  handleClick,
}) => {
  let result: JSX.Element[] = [];
  let week = firstWeek;

  for (week; week <= lastWeek || result.length < 6; week++) {
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

            const buttonColor =
              moment().format('YYYYMMDD') === days.format('YYYYMMDD')
                ? 'yellow'
                : recentlyClickedDay?.format('YYYYMMDD') ===
                  days.format('YYYYMMDD')
                ? 'green'
                : days.format('MM') !== today.format('MM')
                ? 'lightgray'
                : 'inherit';

            return (
              <td key={index}>
                <button
                  onClick={() => handleClick(days)}
                  style={{ backgroundColor: buttonColor }}
                >
                  <span>{days.format('D')}</span>
                  <br />
                  <span
                    style={{
                      color: hasEvent(days, tasks) ? 'red' : 'transparent',
                    }}
                  >
                    •
                  </span>
                  <span
                    style={{
                      color: hasBannerEvent(days, bannerTasks)
                        ? 'orange'
                        : 'transparent',
                    }}
                  >
                    •
                  </span>
                </button>
              </td>
            );
          })}
      </tr>,
    );
  }

  return (
    <table>
      <tbody>{result}</tbody>
    </table>
  );
};

export default CalendarTable;
