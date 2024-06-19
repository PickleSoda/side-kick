
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
  IonImg,
} from '@ionic/react';
import { useState } from 'react';
import { arrowForward, chatbubble, chatbubbleEllipses, notificationsOutline, removeCircle } from 'ionicons/icons';
import ToolBar from '../ui/ToolBar';
import { userStore } from '../../store/userStore';
import { useStoreState } from 'pullstate';




const FingerPrint = () => {
  const selectedCharacter = useStoreState(userStore, (s) => s.avatar);

  return (
    <IonPage>
      <IonHeader translucent={true} className='shadow-none' mode='md'>
        <IonToolbar className="transparent-bg overflow-visible ion-padding">
          <ToolBar />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <div className='h-[75vh] flex flex-col justify-between items-center'>
          <div className='text-xl text-center'>Your <br /> Journey</div>
          <div className='text-3xl text-center'>Meditate <br /> for 5 minutes daily</div>
          <div>
            <div className='flex justify-between w-full'>
              <IonImg
                src={selectedCharacter.img.src}
                className="w-36 -scale-x-100"
              />
              <IonImg
                src={selectedCharacter.img.src}
                className="w-36"
              />
            </div>
            <div className='flex justify-between w-full text-2xl text-center'>
              <div>
                <IonIcon icon={arrowForward} />
                <p>nudge</p>
              </div>
              <div>
                <IonIcon icon={chatbubbleEllipses} />
                <p>chat</p>
              </div>
              <div>
                <IonIcon icon={removeCircle} />
                <p>unmatch</p>
              </div>
            </div>
          </div>
        </div>


      </IonContent>
    </IonPage>
  );
};

export default FingerPrint;
