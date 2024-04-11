import React, { useState, useEffect } from "react";
import {
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
import { chevronBackOutline } from "ionicons/icons";
import { useHistory } from "react-router";
import { habits } from "../../../mock";
import AddUserHabit from "./AddUserHabit";
import { userStore, addHabit, removeHabit } from "../../../store/userStore";
import { useStoreState } from "pullstate";
import { IHabit } from "../../../Types";

const PickHabitComponent = () => {
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
    <IonContent className="ion-padding intro-bg" fullscreen>
      <IonToolbar className="transparent-bg">
        <IonButton
          slot="start"
          fill="clear"
          color="dark"
          onClick={() => history.push("/")}
        >
          <IonIcon icon={chevronBackOutline} />
        </IonButton>
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

      <IonImg
        src={selectedCharacter.img.src}
        className="absolute z-10 char-img right-2 !bottom-40 w-48"
      />
      <div className="text-div content-div">
        <h1>
          Pick a <span className="colored-text">habit</span>
          <br />
          or define new
        </h1>
        <p>Lorem Ipsum Dolor Sit Amet, Ipsum Dolor Sit Ame</p>
        <IonButton
          expand="block"
          onClick={handleNext}
          className="white-background font-bold"
        >
          <p className="text-lg">NEXT</p>
        </IonButton>
      </div>
      <AddUserHabit
        open={showHabitModal}
        onDidDismiss={() => setShowHabitModal(false)}
      />
    </IonContent>
  );
};

export default PickHabitComponent;
