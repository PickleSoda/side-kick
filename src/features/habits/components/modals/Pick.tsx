import React, { useState, useEffect } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonButton,
  IonGrid,
  IonRow,
  IonImg,
} from "@ionic/react";
import ToolBar from "../../../application/components/ui/ToolBar";
import ChooseHabitModal from "./ChooseHabitModal";
import { userStore } from "../../../auth/store/UserStore";
import { HabitStore, getHabitsFromServer } from "../../store/habitStore"
import { useStoreState } from "pullstate";
import { IHabit } from "../../types";

const PickHabit = () => {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const habits = useStoreState(HabitStore, (s) => s.habits);
  const selectedCharacter = useStoreState(userStore, (s) => s.avatar);
  const commitments = useStoreState(HabitStore, (s) => s.commitments);
  const [extendedHabits, setExtendedHabits] = useState<IHabit[]>([]);
  const [selectedHabit, setSelectedHabit] = useState<IHabit | undefined>(undefined);
  useEffect(() => {
    getHabitsFromServer();
    // Function to update the extendedHabits state


    // Subscribe to changes in the userStore
    const unsubscribe = HabitStore.subscribe(
      (s) => s.commitments,
      updateExtendedHabits
    );
    // Initial update
    updateExtendedHabits();
    console.log(HabitStore);
    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, [HabitStore]);

  const handleHabitClick = (habit: IHabit) => {
    if (habit.chosen) {
      console.log("habit already chosen");
      return;
    }
    setSelectedHabit(habit);
    setShowDetailModal(true);
  };

  const updateExtendedHabits = () => {
    const updatedHabits = habits.map((habit) => ({
      ...habit,
      chosen: commitments?.some((userHabit) => userHabit.habit_duration.habit_id === habit.id),
    }));
    setExtendedHabits(updatedHabits);
  };
  return (
    <IonPage>
      <IonHeader translucent={true} className='shadow-none' mode='md'>
        <IonToolbar className="transparent-bg ion-padding">
          <ToolBar />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding intro-bg" fullscreen>
        <IonGrid>
          <IonRow>
            {extendedHabits.map((habit, index) => (
              <IonButton
                mode="ios"
                key={index + habit.name}
                onClick={() => handleHabitClick(habit)}
                className={`white-background min-w-[100px] font-bold ${habit.chosen ? "white-background" : "white-background-opacity"
                  }`}
              >
                <div>
                  <p>{habit.name}</p>
                </div>
              </IonButton>
            ))}
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
            {/* <IonButton
              shape="round"
              onClick={handleNext}
              className="white-background font-bold px-12"
            >
              <p className="text-lg mx-12">NEXT</p>
            </IonButton> */}
          </div>
        </div>
        <ChooseHabitModal
          open={showDetailModal && selectedHabit !== undefined}
          onDidDismiss={() => setShowDetailModal(false)}
          habit={selectedHabit}
        />
      </IonContent>
    </IonPage>
  );
};

export default PickHabit;
