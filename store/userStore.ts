import { Store as PullStateStore } from "pullstate";
import { IUser, IHabit, IAlarm, ICharacter } from "../types";
import { characters } from "../mock";
import { Preferences } from "@capacitor/preferences";
const initialState: IUser = {
  isAuth: false,
  username: "",
  email: "",
  token: "",
  avatar: characters[0], // Initialize habits as an empty array
  alarm: { hours: 0, minutes: 0, meridiem: "am" },
  habits: [],
  groups: [],
};

const userStore = new PullStateStore(initialState);

// Existing actions
const setUser = (user: IUser) => userStore.update(() => user);
const setAuth = (isAuth: boolean) =>
  userStore.update((state: IUser) => ({ ...state, isAuth }));
const setUsername = (username: string) =>
  userStore.update((state) => ({ ...state, username }));
const setEmail = (email: string) =>
  userStore.update((state) => ({ ...state, email }));
const setAvatar = (avatar: ICharacter) =>
  userStore.update((state) => ({ ...state, avatar }));

// New actions for managing habits
const addHabit = (habit: IHabit) =>
  userStore.update((state) => ({ ...state, habits: [...state.habits, habit] }));
const removeHabit = (habitName: string) =>
  userStore.update((state) => ({
    ...state,
    habits: state.habits.filter((habit: IHabit) => habit.name !== habitName),
  }));
const loginUser = ({
  username,
  token,
}: {
  username: string;
  token: string;
}) => {
  userStore.update((s) => {
    s.isAuth = true;
    s.username = username;
    s.token = token;
  });
};

const logoutUser = () => {
  userStore.update((s) => {
    s.isAuth = false;
    s.username = "";
    s.token = "";
  });
};

const setUserState = (alarm: IAlarm) =>
  userStore.update((state) => ({ ...state, alarm: alarm }));

export async function initializeUserState() {
  console.log("Initializing user state");
  const savedState = await Preferences.get({ key: "userState" });
  console.log(savedState);
  if (savedState && typeof savedState.value === "string") {
    const parsedState = JSON.parse(savedState.value);
    userStore.update((state) => ({
      ...parsedState,
    }));
  }
}

userStore.createReaction(
  (state) => state,
  (state: IUser) => {
    Preferences.set({ key: "userState", value: JSON.stringify(state) });
  }
);
// Export the store and actions
export {
  userStore,
  setUser,
  setAuth,
  setUsername,
  setEmail,
  setAvatar,
  addHabit,
  removeHabit,
  setUserState,
  loginUser,
  logoutUser,
};
