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
import Settings from './Settings';
import PickHabit from './Habits/Pick';

import Chats from './Chats';
import ChatDetails from './Chats/details';
import SingIn from './Auth/Signin';
import Signup from './Auth/Signup';
import ChooseCharacter from './Intro/ChooseCharacter';
import Alarm from './Intro/Alarm';
import Landing from './Intro/Landing';
import FingerPrint from './Fingerprint';
const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/home" render={() => <Home />} exact={true} />
        <Route path="/habits/pick" render={() => <PickHabit />} exact={true} />
        <Route
          path="/chats/:listId"
          render={() => <ChatDetails />}
          exact={true}
        />
        <Route path="/chats" render={() => <Chats />} exact={true} />
        <Route path="/settings" render={() => <Settings />} exact={true} />
        <Route path="/fingerprint" render={() => <FingerPrint />} exact={true} />
        <Route path="/signin" render={() => <SingIn />} exact={true} />
        <Route path="/signup" render={() => <Signup />} exact={true} />
        <Route path="/intro/choosecharacter" render={() => <ChooseCharacter />} exact={true} />
        <Route path="/intro/alarm" render={() => <Alarm />} exact={true} />
        <Route path="/intro/landing" render={() => <Landing />} exact={true} />
        <Route path="" render={() => <Redirect to="/home" />} exact={true} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom" color={'secondary'} className='h-20'>
        <IonTabButton tab="tab1" href="/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/habits/pick">
          <IonIcon icon={gitBranchOutline} />
          <IonLabel>Habits</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/fingerprint">
          <div className='circle'></div>
          <IonIcon icon={fingerPrintOutline} className='z-20 absolute h-10 w-10 text-white' />
        </IonTabButton>
        <IonTabButton tab="tab4" href="/chats">
          <IonIcon icon={chatbubbleEllipsesOutline} />
          <IonLabel>Chats</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab5" href="/settings">
          <IonIcon icon={personOutline} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
        {/* <IonTabButton tab="tab6" href="/signin">
          <IonIcon icon={personOutline} />
          <IonLabel>signin</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab7" href="/intro/choosecharacter">
          <IonIcon icon={personOutline} />
          <IonLabel>choose</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab8" href="/intro/alarm">
          <IonIcon icon={personOutline} />
          <IonLabel>alarm</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab9" href="/intro/landing">
          <IonIcon icon={personOutline} />
          <IonLabel>landing</IonLabel>
        </IonTabButton> */}
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
