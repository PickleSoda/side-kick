import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Tabs from './pages/Tabs';
import { useStoreState } from "pullstate";
import { userStore } from "../store/userStore";
import { getCommitments, getGroups } from '../utils/requests';
import { useEffect, useState } from 'react';
import { initializeAppState } from '../store';
import { initializeUserState } from '../store/userStore';
setupIonicReact({});

const initUser = async () => {
  const commitments = await getCommitments();
  const groupChats = await getGroups();
  console.log('server group chats', groupChats);
  console.log('server commitments', commitments);
}

const AppShell = () => {

  const [initialized, setInitialized] = useState(false);
  const isAuthorized = useStoreState(userStore, (state) => state.token !== "");

  useEffect(() => {
    const init = async () => {
      await initializeUserState();
      await initializeAppState();
      setInitialized(true);
    };

    init();
  }, []);
  console.log(isAuthorized);
  useEffect(() => {
    if (isAuthorized) {
      initUser();
    }
  }, [isAuthorized]);
  
  if (!initialized) {
    return <div>Loading...</div>; // Show loading indicator or a splash screen
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          {
            !isAuthorized ? (
              <Route path="/" render={() => <Intro />} />
            ) : (
              <Route path="/" render={() => <Tabs />} />
            )
          }
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;
