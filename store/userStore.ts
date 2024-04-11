// userStore.ts
import { Store as PullStateStore } from "pullstate";
import { IUser, IHabit, IAlarm } from "../Types";
import { characters } from "../mock";
import { Preferences } from '@capacitor/preferences';
const initialState: IUser = {
  isAuth: false,
  username: "",
  email: "",
  avatar: characters[0], // Initialize habits as an empty array
  alarm: { hours: 0, minutes: 0, meridiem: "am" },
  habits: [],
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
const setAvatar = (avatar: string) =>
  userStore.update((state) => ({ ...state, avatar }));

// New actions for managing habits
const addHabit = (habit: IHabit) =>
  userStore.update((state) => ({ ...state, habits: [...state.habits, habit] }));
const removeHabit = (habitName: string) =>
  userStore.update((state) => ({
    ...state,
    habits: state.habits.filter((habit: IHabit) => habit.name !== habitName),
  }));

const setAlarmState = (alarm: IAlarm) =>
  userStore.update((state) => ({ ...state, alarm: alarm }));


    const initializeUserState = async () => {
      const savedState = await Preferences.get({ key: 'userState' });
      if (savedState && typeof savedState.value === 'string') {
      const parsedState = JSON.parse(savedState.value);
      userStore.update((state) => ({
        ...parsedState,
      }));
      }
    };

    userStore.createReaction(
      (state) => state,
      (state: IUser) => {
        Preferences.set({ key: 'userState', value: JSON.stringify(state) });
        document.documentElement.classList.toggle('dark');
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
  setAlarmState,
  initializeUserState,
};
