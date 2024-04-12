import { Redirect, Route } from 'react-router-dom';
import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonImg,
  IonLabel,
} from '@ionic/react';
import { personOutline, chatbubbleEllipsesOutline, homeOutline, fingerPrintOutline,checkmarkOutline , gitBranchOutline } from 'ionicons/icons';
import Home from './Home';
import Lists from './Lists';
import ListDetail from './ListDetail';
import Settings from './Settings';
import PickHabit from './Habits/Pick';

import Chats from './Chats';
import decoration from '../../public/ui/navbar.svg';
const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/home" render={() => <Home />} exact={true} />
        <Route path="/habits/pick" render={() => <PickHabit />} exact={true} />
        <Route
          path="/chats/:listId"
          render={() => <ListDetail />}
          exact={true}
        />
        <Route path="/chats" render={() => <Chats />} exact={true} />
        <Route path="/settings" render={() => <Settings />} exact={true} />
        <Route path="" render={() => <Redirect to="/home" />} exact={true} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom" color={'secondary'} className='h-20 mt-4'>
        <IonTabButton tab="tab1" href="/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/habits/pick">
          <IonIcon icon={gitBranchOutline} />
          <IonLabel>Habits</IonLabel>
        </IonTabButton>
        <IonTabButton >
          <IonIcon icon={gitBranchOutline} />
      <div className='circle'></div>
      <IonIcon icon={fingerPrintOutline} className='z-20 absolute h-10 w-10 text-white' />
          <IonLabel>Habits</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/chats">
          <IonIcon icon={chatbubbleEllipsesOutline} />
          <IonLabel>Chats</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab4" href="/settings">
          <IonIcon icon={personOutline} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
