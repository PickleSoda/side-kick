import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonContent,
  IonImg,
  IonRouterLink,
} from '@ionic/react';
import { arrowForward, chatbubbleEllipses, removeCircle } from 'ionicons/icons';
import ToolBar from '../application/components/ui/ToolBar';
import { userStore } from '../auth/store/UserStore';
import { HabitStore } from '../habits/store/habitStore';
import DailyTask from '../habits/components/DailyTask';


const Home = () => {
  const selectedCharacter = userStore.useState((s) => s.avatar);
  const selectedTasks = HabitStore.useState((s) => s.selectedCommitment?.habit_duration.daily_tasks);
  console.log(selectedTasks);
  return (
    <IonPage>
      <IonHeader translucent={true} className='shadow-none' mode='md'>
        <IonToolbar className="transparent-bg overflow-visible ion-padding">
          <ToolBar />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <div className='h-[75vh] flex flex-col justify-between items-center'>
          {
            selectedTasks &&
            <DailyTask selectedTask={selectedTasks[0]} />
          }
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
              <IonRouterLink routerDirection="forward" routerLink="/chat">
                <div>
                  <IonIcon icon={chatbubbleEllipses} />
                  <p>chat</p>
                </div>
              </IonRouterLink>
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
