import React, { useState, useEffect } from 'react';

const DaysPassed = ({ dateString , className }:{dateString:string, className: string}) => {
  const [daysPassed, setDaysPassed] = useState(0);

  useEffect(() => {
    const calculateDaysPassed = () => {
      const givenDate = new Date(dateString);
      const currentDate = new Date();
      const differenceInTime = currentDate - givenDate;
      const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
      setDaysPassed(differenceInDays);
    };

    calculateDaysPassed();

    // Optional: If you want the days passed to update every day
    const intervalId = setInterval(calculateDaysPassed, 24 * 60 * 60 * 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [dateString]);

  return <p className={className}>{daysPassed + 1 }</p>;
};

export default DaysPassed;
