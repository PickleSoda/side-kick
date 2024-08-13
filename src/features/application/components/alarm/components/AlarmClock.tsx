import React, { useState } from "react";
import {
  IonGrid,
  IonCol,
  IonRow,
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IAlarm } from "../types";


interface IAlarmClockProps {
  alarm?: IAlarm;
  setAlarm: React.Dispatch<React.SetStateAction<IAlarm>>;
}

const AlarmClock: React.FC<IAlarmClockProps> = ({ alarm = {
  hours: 0,
  minutes: 0,
  meridiem: "am",
}, setAlarm }) => {


  const handleHourChange = (value: number) => {
    console.log(value);

    setAlarm((prevAlarm) => ({
      ...prevAlarm,
      hours: value,
    }));
  };

  const handleMinuteChange = (value: number) => {
    console.log(value);

    setAlarm((prevAlarm) => ({
      ...prevAlarm,
      minutes: value,
    }));
  };

  const handleMeridiemChange = (value: number) => {
    const meridiem = value ? "am" : "pm";
    setAlarm((prevAlarm) => ({
      ...prevAlarm,
      meridiem: meridiem,
    }));
    console.log(alarm);
  };
  return (

    <div className="h-64">
      <IonGrid className="w-full p-5 relative">
        <IonRow>
          <IonCol>
            <Swiper
              direction={"vertical"}
              slidesPerView={3}
              freeMode={true}
              className="w-24 h-64"
              initialSlide={alarm.hours}
              onSlideChange={(swiper) => {
                handleHourChange(swiper.activeIndex);
              }}
            >
              <SwiperSlide style={{ height: "80px" }}>
                <h1 className="font-bold text-7xl"> </h1>
              </SwiperSlide>

              {Array.from({ length: 12 }, (_, index) => (
                <SwiperSlide key={index} style={{ height: "80px" }}>
                  <h1 className="font-bold text-7xl">
                    {" "}
                    {index < 10 ? `0${index}` : index}
                  </h1>
                </SwiperSlide>
              ))}
              <SwiperSlide style={{ height: "80px" }}>
                <h1 className="font-bold text-7xl"> </h1>
              </SwiperSlide>
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
              className="w-24 h-64"
              initialSlide={alarm.minutes}
              onSlideChange={(swiper) => {
                handleMinuteChange(swiper.activeIndex * 5);
              }}
            >
              <SwiperSlide style={{ height: "80px" }}>
                <h1 className="font-bold text-7xl"> </h1>
              </SwiperSlide>
              {Array.from({ length: 12 }, (_, index) => (
                <SwiperSlide key={index} style={{ height: "80px" }}>
                  <h1 className="font-bold text-7xl">
                    {" "}
                    {index * 5 < 10 ? `0${index * 5}` : index * 5}
                  </h1>
                </SwiperSlide>
              ))}
              <SwiperSlide style={{ height: "80px" }}>
                <h1 className="font-bold text-7xl"> </h1>
              </SwiperSlide>
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
  );
};

export default AlarmClock;
