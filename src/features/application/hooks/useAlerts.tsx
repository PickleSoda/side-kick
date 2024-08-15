import { useIonAlert } from '@ionic/react';
import { logoutUser } from '../../auth/store/UserStore';

const useAlerts = () => {
  const [presentAlert] = useIonAlert();

  

  const showErrorAlert = async () => {
    await presentAlert({
      header: 'Error!',
      subHeader: 'Something went wrong.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => console.log('Alert canceled'),
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => console.log('Alert confirmed'),
        },
      ],
    });
  };
  const showLogoutAlert = async () => {
    presentAlert({
      header: 'Log Out',
      buttons: [
        {
          text: 'Cancel',
          htmlAttributes: {
            'aria-label': 'close',
          },
        },
        {
          text: 'Log Out',
          htmlAttributes: {
            'aria-label': 'logout',
          },
          handler: () => {
            logoutUser();
          },
        },
      ],
    });
  };

  return { showErrorAlert, showLogoutAlert };
};

export default useAlerts;
