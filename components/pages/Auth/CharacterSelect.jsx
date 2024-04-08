import React, { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonImg,
  IonIcon
} from '@ionic/react';

import FoxImg from '../../../public/chars/fox/fox.svg';
import FoxText from '../../../public/chars/fox/fox-name.svg';

import RaccoonImg from '../../../public/chars/raccoon/raccoon.svg';
import RaccoonText from '../../../public/chars//raccoon/raccoon-name.svg';

import AramdilloImg from '../../../public/chars/aramdillo/aramdillo.svg';
import AramdilloText from '../../../public/chars/aramdillo/aramdillo-name.svg';

import { arrowForwardOutline, arrowBackOutline } from 'ionicons/icons';
import { useStoreState, useStoreActions } from 'pullstate';
import Store from '../../../store/index';


const characters = [
  { img: FoxImg, text: FoxText, info: 'Fox Info Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed arcu hendrerit, eleifend nibh euismod, consequat libero. Fusce feugiat dui a sodales maximus. ' },
  { img: RaccoonImg, text: RaccoonText, info: 'Raccoon Info Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed arcu hendrerit, eleifend nibh euismod, consequat libero. Fusce feugiat dui a sodales maximus. ' },
  { img: AramdilloImg, text: AramdilloText, info: 'Armadillo Info Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed arcu hendrerit, eleifend nibh euismod, consequat libero. Fusce feugiat dui a sodales maximus. ' },
];

const CharacterSelect = () => {
  const currentIndex = useStoreState(Store, s => s.currentIndex);

  const handleNext = () => {
    Store.update(s => {
      s.currentIndex = (s.currentIndex + 1) % characters.length;
    });
  };

  const handlePrev = () => {
    Store.update(s => {
      s.currentIndex = (s.currentIndex - 1 + characters.length) % characters.length;
    });
  };

  const { img, text, info } = characters[currentIndex];

  return (
    <IonPage>
      <IonContent className="char-bg">
        <div className="char-div">
          <IonIcon icon={arrowBackOutline} onClick={handlePrev} className="arrow-left" />
          <div className="char-container">
            <IonImg src={text.src} className='char-text' />
            <IonImg src={img.src} className='char-img' />
            <p className='char-info'>{info}</p>
          </div>
          <IonIcon icon={arrowForwardOutline} onClick={handleNext} className="arrow-right" />
        </div>
        <div className="text-div">
          <h1>Choose your <span className='colored-text'>character</span></h1>
          <p>Pick the character for your adventure</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CharacterSelect;