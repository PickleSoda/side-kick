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

} from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import { IHabit } from '../../../types';
import { initializeCommitment } from '../../../utils/requests';
type AddUserHabitProps = {
  open: boolean;
  onDidDismiss: () => void;
  habit: IHabit|undefined;
};

const DetailModal: React.FC<AddUserHabitProps> = ({ open, onDidDismiss, habit }) => {
  const [commitmentDetails, setCommitmentDetails] = useState<any>(undefined);

  const handleSubmit = () => {
    // Handle form submission
    initializeCommitment(commitmentDetails);
    onDidDismiss(); // Close the modal
  };

  return (
    <IonModal isOpen={open} onDidDismiss={onDidDismiss}>
      <IonHeader className='intro-bg'>
        <IonToolbar>
          <IonButton slot="start" fill="clear" color="dark" onClick={onDidDismiss}>
            <IonIcon icon={chevronBackOutline} />
          </IonButton>
          <IonTitle>Some title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='intro-bg'>
      <IonRow>
          {habit?.available_durations && habit.available_durations.map(( duration,index) => (
            <IonButton
              key={index}
              onClick={() => console.log(habit)}
              mode='ios'
              className={`white-background min-w-[100px] font-bold ${
                habit.chosen ? "white-background" : "white-background-opacity"
              }`}
            >
              <div>
                <p>{habit.name}</p>
                <p className="colored-text text-xs">{duration} DAYS</p>
              </div>
            </IonButton>
          ))}
        </IonRow>
        <IonButton expand="full" onClick={handleSubmit}>Submit</IonButton>
      </IonContent>
    </IonModal>
  );
};

export default DetailModal;
