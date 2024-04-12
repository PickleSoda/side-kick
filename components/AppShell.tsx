import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Tabs from './pages/Tabs';
import { useStoreState } from "pullstate";
import { userStore} from "../store/userStore";

setupIonicReact({});

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', async status => {
    try {
      await StatusBar.setStyle({
        style: status.matches ? Style.Dark : Style.Light,
      });
    } catch {}
  });

const AppShell = () => {

  const isAuthorized = useStoreState(userStore, (state) => state.isAuth);
  console.log(isAuthorized);
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
