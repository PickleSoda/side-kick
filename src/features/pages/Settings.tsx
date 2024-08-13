import {
  IonPage,
  IonHeader,
  IonItem,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonToggle,
} from '@ionic/react';

import Store from '../../store/index.ts';
import * as selectors from '../../store/selectors.js';
import { setSettings } from '../../store/actions.ts';
import useAlerts from '../native/hooks/useAlerts.tsx';




const Settings = () => {
  const { showLogoutAlert } = useAlerts();

  const handleLogout = () => {
    showLogoutAlert();
  };

  const settings = Store.useState(selectors.getSettings);
  return (
    <IonPage>
      <IonHeader translucent={true} className='shadow-none' mode='md'>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonToggle
              checked={settings.enableNotifications}
              onIonChange={e => {
                setSettings({
                  ...settings,
                  enableNotifications: e.target.checked,
                });
              }}
            >
              Enable Notifications
            </IonToggle>
          </IonItem>
          <IonItem onClick={() => handleLogout()}>
            <h5>Logout</h5>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
