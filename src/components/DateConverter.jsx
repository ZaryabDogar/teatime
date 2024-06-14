import React from 'react';

const formatDate = (inputDate) => {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
if(inputDate==''){
return `day/date/month`
}
 else{
  const dateObj = new Date(inputDate);
  const dayOfWeek = dateObj.toLocaleString('en-US', { weekday: 'short' });
  const dayOfMonth = dateObj.getDate();
  const month = months[dateObj.getMonth()];

  const suffix = getDaySuffix(dayOfMonth);

  return `${dayOfWeek} ${dayOfMonth}${suffix} ${month}`;
 }
};

const getDaySuffix = (day) => {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

const DateConverter = ({ inputDate }) => {
 
  const formattedDate = formatDate(inputDate);

  return (
    
      <span>{formattedDate}</span>
    
  );
};

export default DateConverter;
