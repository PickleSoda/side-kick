import React, { useState, useEffect } from "react";
import {
  IonPage,
  IonContent,
  IonButton,
  IonGrid,
  IonCol,
  IonRow,
  IonItem,
  IonInput,
  IonLabel,
} from "@ionic/react";
import { useIonRouter } from "@ionic/react";
import { loginUser } from "../../auth/store/UserStore";
import { useIonLoading } from '@ionic/react';
import { loginRequest } from "../../../utils/requests";


const SingIn = () => {
  // Add your component's state and other initializations here
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [present, dismiss] = useIonLoading();
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const router = useIonRouter();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { username, password } = formData;
    if (!username || !password) {
      setError('All fields are required.');
      console.log('Validation failed: All fields are required.');
      return false;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      console.log('Validation failed: Password must be at least 8 characters.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSignIn = async (e: any) => {
    if (!validateForm()) return;
    e.preventDefault();
    setLoading(true);
    try {
      const { username, password } = formData;
      present({
        message: 'Signing in...',
        duration: 3000,
      });
      const response = await loginRequest(username, password);
      console.log(response);
      loginUser({ username, token: response.data.token });
      router.push('/', 'none', 'push');
    } catch (err: any) {
      setError('Username or password is incorrect');
    } finally {
      dismiss();
      setLoading(false);
    }
  };
  const handleSignUp = () => {
    router.push('/signup', 'none', 'push');
  };
  // const handleSignIn = () => {

  //   userStore.update((s) => {
  //     s.isAuth = true;
  //   });
  //   console.log("User signed in");
  //   history.push("/habits/pick");
  // };

  // useEffect(() => {
  //   const showHandler = () => setKeyboardVisible(true);
  //   const hideHandler = () => setKeyboardVisible(false);

  //   Keyboard.addListener('keyboardWillShow', showHandler);
  //   Keyboard.addListener('keyboardWillHide', hideHandler);


  //   return () => {
  //     Keyboard.removeAllListeners();
  //   };
  // }, []);
  return (
    <IonPage>
      <IonContent className="char-bg content-div">
        <div className="flex justify-end p-2">
          <IonButton fill="clear" onClick={() => router.push("/signup")}>
            <p className="text-white font-bold">Sign up</p>
          </IonButton>
        </div>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1>Sign In</h1>
              {/* Add more JSX elements as needed */}
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                onClick={() => {
                  router.push("/character-select");
                }}
              >
                G with google
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                onClick={() => {
                  router.push("/signin");
                }}
              >
                F
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                onClick={() => {
                  router.push("/signin");
                }}
              >
                T
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>Or with Email</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel className="input-label">Username</IonLabel>
              <IonItem lines="none" className="input-item">
                <IonInput
                  value={formData.username}
                  onInput={(e: any) => handleInputChange(e)}
                  type="text"
                  name="username"
                  mode="md"
                  required
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel className="input-label">Password</IonLabel>
              <IonItem lines="none" className="input-item">
                <IonInput
                  value={formData.password}
                  onInput={(e: any) => handleInputChange(e)}
                  type="password"
                  required
                  name="password"
                  mode="md"
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                expand="block"
                className="signin-button"
                onClick={handleSignIn}
                disabled={loading}
              >
                Log In
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SingIn;
