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
import { userStore, setAlarmState } from "../../../store/userStore";
import {IAlarm} from '../../../Types'

const Alarm = () => {
  const history = useHistory();

  const [alarm, setAlarm] = useState<IAlarm>({
    hours: 0,
    minutes: 0,
    meridiem: "am",
  });

  const handleHourChange = (value:number) => {
    console.log(value)

    setAlarm((prevAlarm) => ({
      ...prevAlarm,
      hours: value,
    }));
  };

  const handleMinuteChange = (value:number) => {
    console.log(value)

    setAlarm((prevAlarm) => ({
      ...prevAlarm,
      minutes: value,
    }));
  };

  const handleMeridiemChange = (value:number) => {
    const meridiem = value?'am':'pm';
    setAlarm((prevAlarm) => ({
      ...prevAlarm,
      meridiem: meridiem,
    }));
    console.log(alarm)
  };
  
  const selectedCharacter = useStoreState(userStore, (s) => s.avatar);

  

  const handleNext = () => {
    setAlarmState(alarm);
    history.push("/signup");
  };
  return (
    <IonPage>
      <IonContent className="char-bg content-div">
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
          <IonGrid className="w-80 relative">
            <IonRow>
              <IonCol>
                <Swiper
                  direction={"vertical"}
                  slidesPerView={3}
                  freeMode={true}
                  className="w-24 h-80"
                  initialSlide={9}
                  onSlideChange={(swiper) => {
                    handleHourChange(swiper.activeIndex);
                  }}
                >
                   <SwiperSlide style={{ height: "80px" }}><h1 className="font-bold text-7xl">
                        {" "}
                       
                      </h1></SwiperSlide>

                  {Array.from({ length: 12 }, (_, index) => (
                    <SwiperSlide key={index} style={{ height: "80px" }}>
                      <h1 className="font-bold text-7xl">
                        {" "}
                        {index < 10 ? `0${index}` : index}
                      </h1>
                    </SwiperSlide>
                  ))}
                  <SwiperSlide style={{ height: "80px" }}><h1 className="font-bold text-7xl">
                        {" "}
                       
                      </h1></SwiperSlide>
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
                  className="w-24 h-80"
                  initialSlide={0}
                  onSlideChange={(swiper) => {
                    handleMinuteChange((swiper.activeIndex)*5);
                  }}
                >
                 <SwiperSlide style={{ height: "80px" }}><h1 className="font-bold text-7xl">
                        {" "}
                       
                      </h1></SwiperSlide>
                  {Array.from({ length: 12 }, (_, index) => (
                    <SwiperSlide key={index} style={{ height: "80px" }}>
                      <h1 className="font-bold text-7xl">
                        {" "}
                        {index * 5 < 10 ? `0${index * 5}` : index * 5}
                      </h1>
                    </SwiperSlide>
                  ))}
                  <SwiperSlide style={{ height: "80px" }}><h1 className="font-bold text-7xl">
                        {" "}
                       
                      </h1></SwiperSlide>
                </Swiper>

              </IonCol>
              <IonCol className=" flex justify-center items-center">
                <Swiper
                  direction={"vertical"}
                  slidesPerView={3}
                  freeMode={true}
                  className="w-14 h-40"
                  onSlideChange={(swiper) => {
                    handleMeridiemChange(swiper.activeIndex);
                  }}
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
          <IonButton expand="block" onClick={handleNext}>DONE!</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Alarm;
