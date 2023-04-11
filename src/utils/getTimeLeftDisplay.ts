const getTimeLeftDisplay = (timeLeft: {
  days: number;
  hours: number;
  minutes: number;
}) => {
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

export default getTimeLeftDisplay;
