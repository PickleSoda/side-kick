import React, { useState, useEffect } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonImg,
} from "@ionic/react";
import { chevronBackOutline, logoGoogle } from "ionicons/icons";
import { useHistory } from "react-router";
import { habits } from "../../../mock";
import AddHabit from "./Add";
import { userStore, addHabit, removeHabit } from "../../../store/userStore";
import { useStoreState } from "pullstate";
import { IHabit } from "../../../types";

const PickHabit = () => {
  const [showHabitModal, setShowHabitModal] = useState(false);
  const history = useHistory();
  const selectedCharacter = useStoreState(userStore, (s) => s.avatar);
  const userHabits = useStoreState(userStore, (s) => s.habits);
  const [extendedHabits, setExtendedHabits] = useState<IHabit[]>([]);
  useEffect(() => {
    // Function to update the extendedHabits state
    const updateExtendedHabits = () => {
      const updatedHabits = habits.map((habit) => ({
        ...habit,
        chosen: userHabits.some((userHabit) => userHabit.name === habit.name),
      }));
      setExtendedHabits(updatedHabits);
    };

    // Subscribe to changes in the userStore
    const unsubscribe = userStore.subscribe(
      (s) => s.habits,
      updateExtendedHabits
    );

    // Initial update
    updateExtendedHabits();
    console.log(userHabits);

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, [userHabits]);

  const handleHabitClick = (habit: IHabit) => {
    if (habit.chosen) {
      removeHabit(habit.name);
    } else {
      addHabit(habit);
    }
  };
  const handleNext = () => {
    history.push("/");
  };

  return (
    <IonPage>

    <IonContent className="ion-padding intro-bg" fullscreen>
      <IonToolbar className="transparent-bg">
        <IonTitle>Pick a Habit</IonTitle>
      </IonToolbar>

      <IonGrid>
        <IonRow>
          {extendedHabits.map((habit) => (
            <IonButton
              key={habit.name}
              onClick={() => handleHabitClick(habit)}
              className={`white-background min-w-[100px] font-bold ${
                habit.chosen ? "white-background" : "white-background-opacity"
              }`}
            >
              <div>
                <p>{habit.name}</p>
                <p className="colored-text text-xs">{habit.duration} DAYS</p>
              </div>
            </IonButton>
          ))}
          <IonButton
            onClick={() => setShowHabitModal(true)}
            className="font-bold"
          >
            <p>Add Your own</p>
          </IonButton>
        </IonRow>
      </IonGrid>
      <div className="w-full border-t border-white"></div>
      <h2 className="text-center">+ User Journeys</h2>
      <IonImg
        src={selectedCharacter.img.src}
        className="absolute z-10 char-img right-2 !bottom-40 w-48"
      />
      <div className="text-div content-div pb-14">
        <h1>
          Pick a <span className="colored-text">habit</span>
          <br />
          or define new
        </h1>
        <p>Lorem Ipsum Dolor Sit Amet, Ipsum Dolor Sit Ame</p>
        <div className="flex justify-center mt-4">
          <IonButton
            shape="round"
            onClick={handleNext}
            className="white-background font-bold px-12"
          >
            <p className="text-lg mx-12">NEXT</p>
          </IonButton>
        </div>
      </div>
      <AddHabit
        open={showHabitModal}
        onDidDismiss={() => setShowHabitModal(false)}
      />
    </IonContent>
    </IonPage>
  );
};

export default PickHabit;
