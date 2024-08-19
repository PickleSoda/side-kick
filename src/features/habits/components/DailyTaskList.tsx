import React from "react";
import {
    IonGrid,
    IonCol,
    IonRow,
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { daily_task } from "../types";

interface IIntensitySelectProps {
    TaskList?: daily_task[];
    setTask: React.Dispatch<React.SetStateAction<string>>;
}

const DailyTaskList: React.FC<IIntensitySelectProps> = ({ TaskList, setTask }) => {

    console.log(TaskList);
    // const handleChange = (value: number) => {
    //     intensity = value === 1 ? "medium" : value === 2 ? "intense" : "light";
    //     setIntensity(intensity);
    //     console.log(intensity);
    // };
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
                                // handleChange(swiper.activeIndex);
                                console.log(swiper.activeIndex);
                            }}
                        >
                            {
                                TaskList?.map((task, index) => {
                                    return (
                                        <SwiperSlide key={index} style={{ height: "50px" }}>
                                            <h1 className="font-bold text-xl" onClick={() => setTask(task.title)}>Day {index} <span className="px-1"></span>{task.title}</h1>
                                        </SwiperSlide>
                                    );
                                })
                            }
                        </Swiper>
                    </IonCol>
                </IonRow>
                <span className="intensity-gradient-top"></span>
                <span className="intensity-gradient-bottom"></span>
            </IonGrid>
        </div>
    );
};

export default DailyTaskList;
