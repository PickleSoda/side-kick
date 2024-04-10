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
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useHistory } from "react-router-dom";

import { chevronBackOutline } from "ionicons/icons";
import { useStoreState } from "pullstate";
import { userStore } from "../../../store/userStore";

const Alarm = () => {
  const history = useHistory();

  const selectedCharacter = useStoreState(userStore, (s) => s.avatar);
  console.log(selectedCharacter);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(selectedCharacter);
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
        <div className="h-80">
          <IonGrid className="w-72 relative">
            <IonRow>
              <IonCol>
                <Swiper
                  direction={"vertical"}
                  slidesPerView={3}
                  freeMode={true}
                  loop={true}
                  className="w-20 h-80"
                  initialSlide={7}
                >
                  {Array.from({ length: 24 }, (_, index) => (
                    <SwiperSlide key={index} style={{ height: "80px" }}>
                      <h1 className="font-bold text-7xl">
                        {" "}
                        {index < 10 ? `0${index}` : index}
                      </h1>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </IonCol>
              <IonCol size="auto" className=" flex justify-center items-center">
                <h1 className="font-bold text-7xl pb-4">:</h1>
              </IonCol>
              <IonCol>
                <Swiper
                  direction={"vertical"}
                  slidesPerView={3}
                  freeMode={true}
                  loop={true}
                  className="w-20 h-80"
                  initialSlide={11}
                >
                  {Array.from({ length: 12 }, (_, index) => (
                    <SwiperSlide key={index} style={{ height: "80px" }}>
                      <h1 className="font-bold text-7xl">
                        {" "}
                        {index * 5 < 10 ? `0${index * 5}` : index * 5}
                      </h1>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </IonCol>
              <IonCol className=" flex justify-center items-center">
                <Swiper
                  direction={"vertical"}
                  slidesPerView={3}
                  freeMode={true}
                  className="w-10 h-40"
                >
                  <SwiperSlide style={{ height: "50px" }}>
                    <h1 className="font-bold text-xl"> </h1>
                  </SwiperSlide>
                  <SwiperSlide style={{ height: "40px" }}>
                    <h1 className="font-bold text-3xl">am</h1>
                  </SwiperSlide>
                  <SwiperSlide style={{ height: "40px" }}>
                    <h1 className="font-bold text-3xl"> pm</h1>
                  </SwiperSlide>
                  <SwiperSlide style={{ height: "50px" }}>
                    <h1 className="font-bold text-xl"> </h1>
                  </SwiperSlide>
                </Swiper>
              </IonCol>
            </IonRow>
            <span className="clock-gradient-top"></span>
            <span className="clock-gradient-bottom"></span>
          </IonGrid>
        </div>
        <IonImg src={selectedCharacter.img.src} className="char-img !-mr-10" />
        <div className="text-div">
          <h1>
            you chose{" "}
            <span className="colored-text">{selectedCharacter.name}</span>
          </h1>
          <p>almost done</p>
          <IonButton expand="block">DONE!</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Alarm;
