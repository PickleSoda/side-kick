import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonContent,
  IonImg,
  IonItem,
} from '@ionic/react';
import { arrowForward, chatbubbleEllipses, removeCircle } from 'ionicons/icons';
import ToolBar from '../application/components/ui/ToolBar';
import { userStore } from '../auth/store/UserStore';
import Markdown from 'react-markdown'


const markdown = '# Hi,*Pluto*!'
const Home = () => {
  const selectedCharacter = userStore.useState((s) => s.avatar);

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
          <Markdown>{markdown}</Markdown>
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
                <IonItem routerDirection="forward" routerLink="/chats" className="white-background font-bold">

                  <IonIcon icon={chatbubbleEllipses} />
                </IonItem>
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

export default Home;
