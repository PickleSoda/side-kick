import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // Ensure you import useHistory
import {
  IonPage,
  IonContent,
  IonImg,
  IonIcon,
  IonCard, IonCardContent,
  IonButton
} from '@ionic/react';

import { arrowForwardOutline } from 'ionicons/icons';

import BackgroundImg from '../../../public/img/main-bg.png';

const Intro = () => {
  const history = useHistory();
  const [headerText, setHeaderText] = useState("Let's start your ");
  const [highlightedHeaderText, setHighlightedHeaderText] = useState("journey");
  const [contentText, setContentText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non turpis lectus. Aliquam fringilla, nunc sit amet consequat dignissim, nisi risus dapibus erat, quis vehicula...");
  const [clickCounter, setClickCounter] = useState(0);

  const handleNextClick = () => {
    const nextCounter = clickCounter + 1;
    setClickCounter(nextCounter);

    switch (nextCounter) {
      case 1:
        setHeaderText("Build ");
        setHighlightedHeaderText("new habits");
        setContentText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non turpis lectus. Aliquam fringilla, nunc sit amet consequat dignissim, nisi risus dapibus erat, quis vehicula...");
        break;
      case 2:
        setHeaderText("With an ");
        setHighlightedHeaderText("accountability partner");
        setContentText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non turpis lectus. Aliquam fringilla, nunc sit amet consequat dignissim, nisi risus dapibus erat, quis vehicula...");
        break;
      default:
        history.push('/character-select');
        break;
    }
  };


  return (
    <IonPage>
      <IonContent className="intro-bg">
        <IonImg
          className='into-img'
          src={BackgroundImg.src}
        />
        <div className='into-div'>
          <h1>{headerText}<span className='colored-text'>{highlightedHeaderText}</span></h1>
          <IonCard>
            <IonCardContent>{contentText}</IonCardContent>
          </IonCard>

          <IonButton className='next-button' onClick={handleNextClick}>
            <IonIcon icon={arrowForwardOutline} className='next-icon'></IonIcon>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Intro;