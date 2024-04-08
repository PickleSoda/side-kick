import React from 'react';
import { IonApp, IonLabel, IonRouterOutlet, setupIonicReact, IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/react';
import { cog, flash, list } from 'ionicons/icons';
import { StatusBar, Style } from '@capacitor/status-bar';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import Lists from './pages/Lists';
import ListDetail from './pages/ListDetail';
import Settings from './pages/Settings';
import Tabs from './pages/Tabs';
import Intro from './pages/Auth/Intro';
import CharacterSelect from './pages/Auth/CharacterSelect';

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
            </>
          )}
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
 );
};

export default AppShell;
