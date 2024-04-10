import React from 'react';
import { IonApp, IonRouterOutlet, setupIonicReact} from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Alarm from './pages/Auth/Alarm.tsx';
import Tabs from './pages/Tabs';
import Intro from './pages/Auth/Intro';
import CharacterSelect from './pages/Auth/CharacterSelect';
import Signin from './pages/Auth/Signin.jsx';
import Signup from './pages/Auth/Signup.jsx';
// Import useStoreState from Pullstate
import { useStoreState } from 'pullstate';
// Import your userStore
import { userStore } from '../store/userStore';

setupIonicReact({});

window.matchMedia("(prefers-color-scheme: dark)").addListener(async (status) => {
 try {
    await StatusBar.setStyle({
      style: status.matches ? Style.Dark : Style.Light,
    });
 } catch {}
});

const AppShell = () => {
 // Use useStoreState to access the isAuth property from userStore
 const isAuthorized = useStoreState(userStore, (state) => state.isAuth);

 return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          {isAuthorized ? (
            <>
              <Route path="/tabs" render={() => <Tabs />} />
              <Route path="/" render={() => <Redirect to="/tabs/feed" />} exact={true} />
            </>
          ) : (
            <>
              <Route path="/intro" render={() => <Intro />} />
              <Route path="/character-select" render={() => <CharacterSelect />} />
              <Route path="/" render={() => <Redirect to="/intro" />} exact={true} />
              <Route path="/alarm" render={() => <Alarm/>} />
              <Route path="/signup" render={() => <Signup/>} />
              <Route path="/signin" render={() => <Signin/>} />
              
            </>
          )}
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
 );
};

export default AppShell;
