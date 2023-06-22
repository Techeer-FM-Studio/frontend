import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

type MonthYearSelectorPropsType = {
  currentMonth: number;
  currentYear: number;
  onMonthYearChange: (month: number, year: number) => void;
};

const CalendarMonthYearSelector: React.FC<MonthYearSelectorPropsType> = ({
  currentMonth,
  currentYear,
  onMonthYearChange,
}) => {
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);

  useEffect(() => {
    setMonth(currentMonth);
    setYear(currentYear);
  }, [currentMonth, currentYear]);

  const handleChange = () => {
    onMonthYearChange(month, year);
  };

  return (
    <div className={styles.calendarMonthYearSelector}>
      <input
        type="number"
        value={year}
        onChange={(e) => {
          setYear(parseInt(e.target.value));
          handleChange();
        }}
      />
      년&nbsp;&nbsp;
      <select
        value={month}
        onChange={(e) => {
          setMonth(parseInt(e.target.value));
          handleChange();
        }}
      >
        {Array.from({ length: 12 }, (_, i) => i).map((m) => (
          <option key={m} value={m}>
            {m + 1}월
          </option>
        ))}
      </select>
    </div>
  );
};

export default CalendarMonthYearSelector;
