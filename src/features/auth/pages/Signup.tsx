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
import { registerRequest } from "../../../utils/requests";
import BackgroundImg from "../../../public/img/bg-white.png";
import { useIonRouter } from "@ionic/react";

const Signup = () => {
  // Add your component's state and other initializations here
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const isAuthorized = useStoreState(userStore, (state) => state.isAuth);
  const router = useIonRouter();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const validateForm = () => {
    const { username, email, password, confirmPassword } = formData;
    if (!username || !email || !password) {
      setError('All fields are required.');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return false;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSignUp = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await registerRequest(formData.email, formData.username, formData.password);

      console.log(response);
      history.push("/signin");

    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to sign up');
    } finally {
      setLoading(false);
    }
  };
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  return (
    <IonPage>
      <IonContent className="sign-up-bg content-div">
        <IonImg className="bg-white" src={BackgroundImg.src} />
        <IonButton className="flex justify-between p-2" fill="clear" onClick={() => history.push("/signin")}>
          <div className="flex justify-between w-full items-center">
            <IonIcon icon={chevronBackOutline} className="w-6 h-6 bg-primary " />
            <p className="font-bold bg-color-primary ">Sign In</p>
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
                <span><IonIcon icon={logoGoogle} className="w-6" /></span>
                with google
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                className="bg-transparent"
                onClick={() => {
                  history.push("/signin");
                }}
              >
                <IonIcon icon={logoFacebook} className="w-6" />
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                className="bg-transparent"
                onClick={() => {
                  history.push("/signin");
                }}
              >
                <IonIcon icon={logoTwitter} className="w-6" />
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="text-base text-center text-zinc-400">Or with Email</IonCol>
          </IonRow>
          <IonRow className="p-0">
            <IonCol>
              <IonInput
                value={formData.email}
                onInput={(e: any) => handleInputChange(e)}
                className="sign-input-fields"
                label="Email"
                labelPlacement="floating"
                placeholder="Enter email"
                type="email"
                name="email"
              ></IonInput>
            </IonCol>
          </IonRow>
          <IonRow className="p-0">
            <IonCol>
              <IonInput
                value={formData.username}
                onInput={(e: any) => handleInputChange(e)}
                className="sign-input-fields"
                label="Username"
                labelPlacement="floating"
                placeholder="Enter username"
                type="text"
                name="username"
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
                  name="password"
                  placeholder="Enter password"
                  className="sign-input-fields"
                  value={formData.password}
                  onInput={(e: any) => handleInputChange(e)}
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
                  name="confirmPassword"
                  placeholder="Enter password"
                  className="sign-input-fields"
                  value={formData.confirmPassword}
                  onInput={(e: any) => handleInputChange(e)}
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
              {error && <p className="text-red-600 text-base pl-2 -mt-1">{error}</p>}
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                className="text-center bg-primary"
                expand="block"
                onClick={() => {
                  handleSignUp()
                }}
                mode="ios"
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
