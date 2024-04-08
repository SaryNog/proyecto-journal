import React, { useEffect, useState } from 'react';

export const DigitalClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const hours = now.getHours() % 12 || 12; // Convert 24-hour format to 12-hour format
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const currentDate = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };
    return now.toLocaleDateString('en-US', options);
  };

  return (
    <div className="fixed bottom-0 right-0 m-6 p-4 bg-purple-100 text-black rounded-lg">
      <h1 className="text-4xl font-bold">{currentTime}</h1>
      <p className="text-sm">{currentDate()}</p>
    </div>
  );
};



