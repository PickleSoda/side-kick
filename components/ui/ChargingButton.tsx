import { IonIcon } from '@ionic/react';
import { fingerPrintOutline } from 'ionicons/icons';
import React, { useState, useRef } from 'react';

const ChargingButton = () => {
  const [isCharging, setIsCharging] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseDown = () => {
    setIsCharging(true);
    setIsComplete(false);
    timeoutRef.current = setTimeout(() => {
      setIsComplete(true);
      setIsCharging(false);
      // Add the action you want to perform after 3 seconds here
      console.log('Action triggered after 3 seconds!');
    }, 3000);
  };

  const handleMouseUp = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsCharging(false);
  };

  return (
    <div
      className={`charging-circle ${isCharging ? 'filling' : ''}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <IonIcon
        icon={fingerPrintOutline}
        className="z-20 h-20 w-20 text-white p-5 rounded-full radial-gradient-bg"
      />
      {isComplete && <p>Charged!</p>}
    </div>
  );
};

export default ChargingButton;