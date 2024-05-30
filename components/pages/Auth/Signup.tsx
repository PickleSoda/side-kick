import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonImg,
  IonIcon,
  IonButton,
  IonGrid,
  IonCol,
  IonRow,
  IonItem,
  IonInput,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { chevronBackOutline, eyeOffOutline, eyeOutline, logoFacebook, logoGoogle, logoTwitter } from "ionicons/icons";
import { useStoreState } from "pullstate";
import { userStore } from "../../../store/userStore";

import BackgroundImg from "../../../public/img/main-bg.png";

const Signup = () => {
  // Add your component's state and other initializations here
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const isAuthorized = useStoreState(userStore, (state) => state.isAuth);

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  return (
    <IonPage>
      <IonContent className="sign-up-bg content-div">
      <IonImg className="into-img" src={BackgroundImg.src} />
          <IonButton className="flex justify-between p-2 " fill="clear" onClick={() => history.push("/signin")}>
            <div className="flex justify-between w-full items-center">
              <IonIcon icon={chevronBackOutline} className="w-6 h-6"/>
              <p className="text-white font-bold">Sign In</p>
            </div>
          </IonButton>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1 className="text-center text-black text-3xl">Sign up</h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                onClick={() => {
                  history.push("/character-select");
                }}
              >
                <span><IonIcon icon={logoGoogle} className="w-6"/></span>
                 with google
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                onClick={() => {
                  history.push("/signin");
                }}
              >
                <IonIcon icon={logoFacebook} className="w-6"/>
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                onClick={() => {
                  history.push("/signin");
                }}
              >
                <IonIcon icon={logoTwitter} className="w-6 bg-transparent"/>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="text-base text-center text-zinc-400">Or with Email</IonCol>
          </IonRow>
          <IonRow className="p-0">
            <IonCol>
                <IonInput
                  className="sign-input-fields"
                  label="Email"
                  labelPlacement="floating"
                  placeholder="Enter email"
                ></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div className="relative">
                <IonInput
                  label="Password"
                  labelPlacement="floating"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  className="sign-input-fields"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                ></IonInput>
                <IonButton 
                  fill="clear" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
                  onClick={togglePasswordVisibility}
                >
                  <IonIcon icon={showPassword ? eyeOffOutline : eyeOutline} />
                </IonButton>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div className="relative">
                <IonInput
                  label="Repeat Password"
                  labelPlacement="floating"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  className="sign-input-fields"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                ></IonInput>
                <IonButton 
                  fill="clear" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
                  onClick={togglePasswordVisibility}
                >
                  <IonIcon icon={showPassword ? eyeOffOutline : eyeOutline} />
                </IonButton>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
              className="text-center bg-black"
              expand="block"
                onClick={() => {
                  history.push("/signin");
                }}
              >
                Sign up
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
