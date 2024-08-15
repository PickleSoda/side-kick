import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonImg,
  IonButton,
} from "@ionic/react";
import { useIonRouter } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { chevronBackOutline } from "ionicons/icons";
import { setAvatar } from "../../auth/store/UserStore";
import { useHistory } from "react-router-dom";

import { characters } from "../../../mock/index";

const ChooseCharacter = () => {
  console.log(characters);
  const router = useIonRouter()
  const handleNext = () => {
    setAvatar(characters[currentIndex]);
    
  };

  const history = useHistory();

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwiperChange = (index:number) => {
    setCurrentIndex(index);
  };

  return (
    <IonPage>
      <IonContent className="char-bg content-div">
        <div className="flex p-2 h-20">

          <h3 className="text-white font-bold text-base absolute left-1/2 -translate-x-1/2">Choose a character</h3>
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{
            clickable: true,
          }}
          onSlideChange={(swiper) => {
            handleSwiperChange(swiper.activeIndex);
          }}
        >
          {characters.map((character, index) => (
            <SwiperSlide key={index}>
              <div className="char-container">
                <IonImg src={character.img.src} className="char-img" />

                <IonImg src={character.text.src} className="char-text" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-div">
          <h1>
            Choose your <span className="colored-text">character</span>
          </h1>
          <p>{characters[currentIndex].info}</p>
          <IonButton expand="block" routerDirection="forward" routerLink="/alarm" onClick={handleNext} className="white-background font-bold">
          <p className="text-lg">
            NEXT
          </p>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ChooseCharacter;
