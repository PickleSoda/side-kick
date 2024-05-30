import React, { useState } from 'react';
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonDatetime
} from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import { IAlarm, IHabit } from '../../../types';
import { initializeCommitment } from '../../../utils/requests';
import AlarmClock from '../../ui/AlarmClock';
import { userStore } from '../../../store/userStore';
import IntensitySelect from '../../ui/IntensitySelect';
type AddUserHabitProps = {
  open: boolean;
  onDidDismiss: () => void;
  habit: IHabit | undefined;
};

const DetailModal: React.FC<AddUserHabitProps> = ({ open, onDidDismiss, habit }) => {
  const [selectedDuration, setSelectedDuration] = useState<number>(0);
  const [intensity, setIntensity] = useState('');
  const userAlarm = userStore.useState<IAlarm>((s) => {
    return s.alarm
  });
  const [alarmTime, setAlarmTime] = useState<IAlarm>({ hours: 0, minutes: 0, meridiem: "am" });

  const handleSubmit = async () => {
    if (habit && selectedDuration && intensity && alarmTime) {
      const data = {
        habit_id: habit.id || '',
        duration: selectedDuration,
        intensity: intensity,
        alarm_time: (alarmTime.meridiem == "am" ? alarmTime.hours: (alarmTime.hours + 12 )) + ':' + (alarmTime.minutes < 10 && '0')+ alarmTime.minutes  + ':00'
      };
      await initializeCommitment(data);
      onDidDismiss(); // Close the modal
    } else {
      console.log("All fields are required");
    }
  };

  return (
    <IonModal isOpen={open} onDidDismiss={onDidDismiss}>
      <IonHeader className='intro-bg'>
        <IonToolbar>
          <IonButton slot="start" fill="clear" color="dark" onClick={onDidDismiss}>
            <IonIcon icon={chevronBackOutline} />
          </IonButton>
          <IonTitle>{habit?.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='intro-bg'>
        <IonRow>
          {habit?.available_durations && habit.available_durations.map((duration, index) => (
            <IonButton
              key={index}
              onClick={() => setSelectedDuration(duration)}
              mode='ios'
              className={`white-background min-w-[100px] font-bold ${selectedDuration === duration ? "selected-background" : "white-background-opacity"
                }`}
            >
              <p className="colored-text text-xs">{duration} DAYS</p>
            </IonButton>
          ))}
        </IonRow>
        <IntensitySelect intensity={intensity} setIntensity={setIntensity} />
        <AlarmClock alarm={userAlarm} setAlarm={setAlarmTime} />
        <IonButton
          mode='ios'
          className='mt-20'
          shape='round'
          expand="full" onClick={handleSubmit}>Submit</IonButton>
      </IonContent>
    </IonModal>
  );
};

export default DetailModal;
