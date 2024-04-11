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
 import PickHabitComponent from './PickHabitComponent.tsx';
  
  
  const PickHabitIntro = () => {
  
    return (
      <IonPage>
        
        <PickHabitComponent></PickHabitComponent>
      </IonPage>
    );
  };
  
  export default PickHabitIntro;
  