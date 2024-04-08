import React from "react";
import { useHistory } from "react-router-dom";
import {
  IonPage,
  IonContent,
  IonImg,
  IonCard,
  IonCardContent,
  IonSpinner,
  IonChip,
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import BackgroundImg from "../../../public/img/main-bg.png";

const Intro = () => {
  const history = useHistory();
  const slides = [
    {
      headerText: "Let's start your ",
      highlightedHeaderText: "journey",
      contentText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non turpis lectus. Aliquam fringilla, nunc sit amet consequat dignissim, nisi risus dapibus erat, quis vehicula...",
    },
    {
      headerText: "Build ",
      highlightedHeaderText: "new habits",
      contentText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non turpis lectus. Aliquam fringilla, nunc sit amet consequat dignissim, nisi risus dapibus erat, quis vehicula...",
    },
    {
      headerText: "With an ",
      highlightedHeaderText: "accountability partner",
      contentText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non turpis lectus. Aliquam fringilla, nunc sit amet consequat dignissim, nisi risus dapibus erat, quis vehicula...",
    },
    {
      headerText: "Start your ",
      highlightedHeaderText: "journey",
    },
  ];

  const handleSwiperChange = (index) => {
    console.log(index);
    if (index == slides.length - 1) {
      setTimeout(() => {
        history.push("/character-select");
      }, 1000);
    }
  };

  return (
    <IonPage>
      <IonContent className="intro-bg">
        <IonImg className="into-img" src={BackgroundImg.src} />
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          onSlideChange={(swiper) => {
            handleSwiperChange(swiper.activeIndex);
          }}
          style={{
            "--swiper-pagination-color": "#FFBA08",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="into-div">
                <h1 className="h-20">
                  {slide.headerText}
                  <span className="colored-text">
                    {slide.highlightedHeaderText}
                  </span>
                </h1>
                {slide.contentText ? (
                  <IonCard>
                    <IonCardContent>{slide.contentText}</IonCardContent>
                  </IonCard>
                ) : (
                  <IonSpinner name="circular"></IonSpinner>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Intro;
