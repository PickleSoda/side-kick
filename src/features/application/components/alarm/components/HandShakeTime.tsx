import React, { useState } from "react";
import {
  IonGrid,
  IonCol,
  IonRow,
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IAlarm } from "../../../../../types";

interface IHandshakeTimeProps {
  alarm?: IAlarm;
  setAlarm: React.Dispatch<React.SetStateAction<IAlarm>>;
}

const HandshakeTime: React.FC<IHandshakeTimeProps> = ({
  alarm = {
    hours: 0,
    minutes: 0,
    meridiem: "am",
  },
  setAlarm,
}) => {
  // Handle hour change
  const handleHourChange = (value: number) => {
    setAlarm((prevAlarm) => ({
      ...prevAlarm,
      hours: value,
    }));
  };

  // Handle meridiem change (AM/PM)
  const handleMeridiemChange = (value: number) => {
    const meridiem = value ? "pm" : "am";
    setAlarm((prevAlarm) => ({
      ...prevAlarm,
      meridiem: meridiem,
    }));
  };

  return (
    <div className="h-48">
      <IonGrid className="w-full relative">
        <IonRow>
          {/* Hours swiper */}
          <IonCol>
            <Swiper
              direction={"vertical"}
              slidesPerView={3}
              freeMode={true}
              className="w-24 h-48"
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
                    {index + 1}
                  </h1>
                </SwiperSlide>
              ))}
              <SwiperSlide style={{ height: "80px" }}>
                <h1 className="font-bold text-7xl"> </h1>
              </SwiperSlide>
            </Swiper>
          </IonCol>

          {/* Meridiem swiper (AM/PM) */}
          <IonCol className="flex justify-center items-center">
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
                <h1 className="font-bold text-3xl">pm</h1>
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

export default HandshakeTime;