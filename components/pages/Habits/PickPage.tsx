import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonMenuButton,
  } from '@ionic/react';
  import { useState } from 'react';
  import { notificationsOutline } from 'ionicons/icons';
 import PickHabitComponent from './PickHabitComponent.jsx';
  
  
  const PickHabitPage = () => {
    const [showNotifications, setShowNotifications] = useState(false);
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Pick A Habit</IonTitle>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonButtons slot="end">
              <IonButton onClick={() => setShowNotifications(true)}>
                <IonIcon icon={notificationsOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <PickHabitComponent></PickHabitComponent>
      </IonPage>
    );
  };
  
  export default PickHabitPage;
  