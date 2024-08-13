import React from 'react';
import { IonRouterOutlet } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import Landing from './Landing';
import Alarm from './Alarm';
import ChooseCharacter from './ChooseCharacter';
import Signup from '../../auth/pages/Signup';
import SingIn from '../../auth/pages/Signin';

const Intro = () => {
  return (
    <IonRouterOutlet>
      <Route path="/intro" render={() => <Landing />} exact={true} />
      <Route
        path="/choose-character"
        render={() => <ChooseCharacter />}
        exact={true}
      />
      <Route path="/alarm" render={() => <Alarm />} exact={true} />
      <Route path="" render={() => <Redirect to="/intro" />} exact={true} />
      <Route path="/signup" render={() => <Signup />} exact={true} />
      <Route path="/signin" render={() => <SingIn />} exact={true} />
    </IonRouterOutlet>
  );
};

export default Intro;
