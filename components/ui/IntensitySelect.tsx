import React, { useState } from "react";
import {
    IonGrid,
    IonCol,
    IonRow,
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IAlarm } from "../../types";


interface IIntensitySelectProps {
    intensity?: string;
    setIntensity: React.Dispatch<React.SetStateAction<string>>;
}

const IntensitySelect: React.FC<IIntensitySelectProps> = ({ intensity, setIntensity }) => {

    const handleChange = (value: number) => {
        intensity = value === 1 ? "medium" : value === 2 ? "intense" : "light";
        setIntensity(intensity);
        console.log(intensity);
    };
    return (

        <div className="h-40">
            <IonGrid className="w-full p-5 relative">
                <IonRow>
                    <IonCol className=" flex justify-center items-center">
                        <Swiper
                            direction={"vertical"}
                            slidesPerView={3}
                            freeMode={true}
                            className="w-full h-40"
                            onSlideChange={(swiper) => {
                                handleChange(swiper.activeIndex);
                            }}
                        >
                            <SwiperSlide style={{ height: "50px" }}>
                                <h1 className="font-bold text-xl"> </h1>
                            </SwiperSlide>
                            <SwiperSlide style={{ height: "40px" }}>
                                <h1 className="font-bold text-5xl">Light</h1>
                            </SwiperSlide>
                            <SwiperSlide style={{ height: "40px" }}>
                                <h1 className="font-bold text-5xl"> Medium</h1>
                            </SwiperSlide>
                            <SwiperSlide style={{ height: "40px" }}>
                                <h1 className="font-bold text-5xl"> Intense</h1>
                            </SwiperSlide>
                            <SwiperSlide style={{ height: "50px" }}>
                                <h1 className="font-bold text-xl"> </h1>
                            </SwiperSlide>
                        </Swiper>
                    </IonCol>
                </IonRow>
                <span className="intensity-gradient-top"></span>
                <span className="intensity-gradient-bottom"></span>
            </IonGrid>
        </div>
    );
};

export default IntensitySelect;
