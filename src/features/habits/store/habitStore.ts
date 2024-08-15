import { Store as PullStateStore } from "pullstate";
// import { Preferences } from "@capacitor/preferences";
import { IHabit, ICommitment } from "../types";
import { getHabits } from "../requests";

type HabitStoreProps = {
  habits: IHabit[];
  selectedHabit: IHabit | null;
  commitments: ICommitment[] | [];
  selectedCommitment: ICommitment | null;
};

const HabitStore = new PullStateStore<HabitStoreProps>({
  habits: [],
  selectedHabit: null,
  commitments: [],
  selectedCommitment: null,
});

const getHabitsFromServer = async () => {
  try {
    const habits = await getHabits();
    console.log("server habits", habits);
    HabitStore.update((state) => {
      state.habits = habits.data;
    });
  } catch (e) {
    console.log(e);
  }
};

const addHabit = (habit: IHabit) =>
  HabitStore.update((state) => ({
    ...state,
    commitments: [...state.commitments, habit],
  }));
const removeHabit = (id: string) =>
  HabitStore.update((state) => ({
    ...state,
    commitments: state.commitments.filter(
      (commitment: ICommitment) => commitment.habit_id !== id
    ),
  }));
export { HabitStore, getHabitsFromServer, addHabit, removeHabit };

// export async function initializeAppState() {
//   console.log("Initializing app state");
//   const savedState = await Preferences.get({ key: "appState" });
//   console.log(savedState);
//   if (savedState && typeof savedState.value === "string") {
//     const parsedState = JSON.parse(savedState.value);
//     if (typeof parsedState === "object" && isStoreProps(parsedState)) {
//       Store.update((state) => ({
//         ...parsedState,
//       }));
//     } else {
//       console.error("Saved state is not valid");
//     }
//   }
// }

// Store.createReaction(
//   (state) => state,
//   (state: StoreProps) => {
//     Preferences.set({ key: "appState", value: JSON.stringify(state) });
//   }
// );

// const getServerCommitments = async () => {
//   const commitments = await getCommitments();
//   console.log("server commitments", commitments);
//   userStore.update((s) => {
//     s.commitments = commitments.data;
//   });
// };
