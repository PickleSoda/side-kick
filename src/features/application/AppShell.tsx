import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Intro from '../intro/pages/Intro';
import Tabs from './layout/Tabs';
import { useStoreState } from "pullstate";
import { userStore } from "../../store/userStore";
import { getCommitments, getGroups } from '../../utils/requests';
import { useEffect, useState } from 'react';
import { initializeAppState } from '../../store';
import { initializeUserState } from '../../store/userStore';
setupIonicReact({});

const initUser = async () => {
  try {
    const commitments = await getCommitments();
    console.log('server commitments', commitments);
    userStore.update((s) => {
      s.commitments = commitments.data;
    });
  }
  catch (err: any) {
    console.log(err);
  }
  try {
    const groupChats = await getGroups();
    console.log('server group chats', groupChats);
    userStore.update((s) => {
      s.groups = groupChats.data;
    });
  }
  catch (err: any) {
    console.log(err);
  }

}

const AppShell = () => {

  const [initialized, setInitialized] = useState(false);
  const isAuthorized = useStoreState(userStore, (state) => state.token !== "");

  useEffect(() => {
    const init = async () => {
      await initializeUserState();
      await initializeAppState();
      setInitialized(true);
      console.log('initialized');
    };

    init();
  }, []);
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
