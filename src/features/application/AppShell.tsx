import React, { useEffect, useState } from 'react';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Intro from './layout/Intro';
import Tabs from './layout/Tabs';
import { userStore, initializeUserState } from "../auth/store/UserStore";
import { useFetchCommitments } from '../habits/hooks/useFetchCommitments';
import { useFetchGroups } from '../groups/hooks/useFetchGroups';
import { useFetchHabits } from '../habits/hooks/useFetchHabits';

setupIonicReact({});

const AppShell = () => {
  const [initialized, setInitialized] = useState(false);
  const isAuthorized = userStore.useState((state) => state.token !== "");

  // Fetch data using TanStack Query hooks
  const { data: commitments, isLoading: isLoadingCommitments } = useFetchCommitments();
  const { data: groups, isLoading: isLoadingGroups } = useFetchGroups();
  const { data: habits, isLoading: isLoadingHabits } = useFetchHabits();

  useEffect(() => {
    const init = async () => {
      await initializeUserState();
      setInitialized(true);
    };

    init();
  }, []);

  useEffect(() => {
    if (isAuthorized) {
      // Handle logic based on fetched commitments and groups
    }
    console.log('commitments', commitments);
    console.log('groups', groups);
  }, [isAuthorized, commitments, groups]);

  if (!initialized || isLoadingCommitments || isLoadingGroups) {
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
