import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonItem,
} from "@ionic/react";
import { useState } from "react";
import { chevronBackOutline } from "ionicons/icons";
import { useHistory } from "react-router";
import { habits } from "../../../mock";
import AddUserHabit from "./AddUserHabit";
const PickHabitComponent = () => {
  const [showHabitModal, setShowHabitModal] = useState(false);
  const history = useHistory();
  return (
    <IonContent className="ion-padding intro-bg" fullscreen>

      <IonToolbar  className='intro-bg'>
          <IonButton slot="start" fill="clear" color="dark" onClick={() => history.push("/")}>
            <IonIcon icon={chevronBackOutline} />
          </IonButton>
          <IonTitle >Pick a Habit</IonTitle>
        </IonToolbar>

      <IonGrid className="ion-padding">
        <IonRow>
          {habits.map((habit) => (
            <IonButton key={habit.name}>
              <div>
                <h4>{habit.name}</h4>
                <p>{habit.duration}</p>
              </div>
            </IonButton>
          ))}
          <IonButton
            onClick={() => setShowHabitModal(true)}
          >
              <h4>Add Your own</h4>
            <div>
            </div>
          </IonButton>
        </IonRow>
      </IonGrid>
      <AddUserHabit open={showHabitModal} onDidDismiss={() => setShowHabitModal(false)} />
    </IonContent>
  );
};

export default PickHabitComponent;
