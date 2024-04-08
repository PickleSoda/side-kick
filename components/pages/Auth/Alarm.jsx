import React, { useState } from "react";
import { IonPage, IonContent, IonImg, IonIcon, IonButton } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useHistory } from "react-router-dom";

import { chevronBackOutline } from "ionicons/icons";
import { useStoreState } from "pullstate";
import { userStore } from "../../../store/userStore";

const Alarm = () => {
  const history = useHistory();

  const selectedCharacter = useStoreState(userStore, (s) => s.avatar);
  console.log(selectedCharacter);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwiperChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <IonPage>
      <IonContent className="char-bg">
        <div className="flex p-2">
          <IonButton
            fill="clear"
            onClick={() => history.push("/character-select")}
          >
            <IonIcon
              slot="icon-only"
              icon={chevronBackOutline}
              className="text-white"
            ></IonIcon>
          </IonButton>
          <h3 className="text-white font-bold">What time do you wake up</h3>
        </div>

        <div className="text-div">
          <h1>
            you chose <span className="colored-text">{selectedCharacter}</span>
          </h1>
          <p>almost done</p>
          <IonButton expand="block">DONE!</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Alarm;
