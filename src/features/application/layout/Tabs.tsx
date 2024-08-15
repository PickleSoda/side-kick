import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { personOutline, homeOutline, fingerPrintOutline } from 'ionicons/icons';
import Home from '../../pages/Home';
import Settings from '../../pages/Settings';
import PickHabit from '../../habits/components/modals/Pick';
import SingIn from '../../auth/pages/Signin';
import Signup from '../../auth/pages/Signup';
import FingerPrint from '../../pages/Fingerprint';
import GroupChat from '../../groups/components/GroupChat';
const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/home" render={() => <Home />} exact={true} />
        <Route path="/habits/pick" render={() => <PickHabit />} exact={true} />
        <Route
          path="/chat"
          render={() => <GroupChat />}
          exact={true}
        />
        <Route path="/settings" render={() => <Settings />} exact={true} />
        <Route path="/fingerprint" render={() => <FingerPrint />} exact={true} />
        <Route path="/signin" render={() => <SingIn />} exact={true} />
        <Route path="/signup" render={() => <Signup />} exact={true} />
        <Route path="" render={() => <Redirect to="/home" />} exact={true} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom" color={'secondary'} className='h-20'>
        <IonTabButton tab="tab1" href="/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/fingerprint">
          <div className='circle'></div>
          <IonIcon icon={fingerPrintOutline} className='z-20 absolute h-10 w-10 text-white' />
        </IonTabButton>
        <IonTabButton tab="tab3" href="/settings">
          <IonIcon icon={personOutline} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
