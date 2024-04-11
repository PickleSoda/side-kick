import React, { useState } from 'react';
import {
 IonModal,
 IonHeader,
 IonToolbar,
 IonTitle,
 IonContent,
 IonButton,
 IonIcon,
 IonInput,
 IonTextarea,
 IonLabel,
 IonItem,
 IonDatetime,
 IonList
} from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';

const AddUserHabit = ({ open, onDidDismiss }) => {
 const [name, setName] = useState('');
 const [description, setDescription] = useState('');
 const [days, setDays] = useState(0);

 const handleDecrement = () => {
    setDays(days - 1);
 };

 const handleIncrement = () => {
    setDays(days + 1);
 };

 const handleSubmit = () => {
    // Handle form submission
    console.log({ name, description, days });
    onDidDismiss(); // Close the modal
 };

 return (
    <IonModal isOpen={open} onDidDismiss={onDidDismiss}>
      <IonHeader className='intro-bg'>
        <IonToolbar>
          <IonButton slot="start" fill="clear" color="dark" onClick={onDidDismiss}>
            <IonIcon icon={chevronBackOutline} />
          </IonButton>
          <IonTitle>Add Your own</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='intro-bg'>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Name</IonLabel>
            <IonInput value={name} onIonChange={e => setName(e.detail.value)} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Description</IonLabel>
            <IonTextarea value={description} onIonChange={e => setDescription(e.detail.value)} />
          </IonItem>
          <IonItem>
            <IonLabel>Days</IonLabel>
            <IonButton slot="start" fill="clear" onClick={handleDecrement}>-</IonButton>
            <IonLabel>{days}</IonLabel>
            <IonButton slot="end" fill="clear" onClick={handleIncrement}>+</IonButton>
          </IonItem>
        </IonList>
        <IonButton expand="full" onClick={handleSubmit}>Submit</IonButton>
      </IonContent>
    </IonModal>
 );
};

export default AddUserHabit;
