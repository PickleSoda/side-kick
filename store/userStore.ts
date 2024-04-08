// userStore.ts
import { Store as PullStateStore } from "pullstate";
import { User, Habit } from '../Types';

const initialState: User = {
 isAuth: false,
 username: '',
 email: '',
 avatar: '',
 habits: [], // Initialize habits as an empty array
};

const userStore =  new PullStateStore(initialState);

// Existing actions
const setUser = (user: User) => userStore.update(() => user);
const setAuth = (isAuth: boolean) => userStore.update((state) => ({ ...state, isAuth }));
const setUsername = (username: string) => userStore.update((state) => ({ ...state, username }));
const setEmail = (email: string) => userStore.update((state) => ({ ...state, email }));
const setAvatar = (avatar: string) => userStore.update((state) => ({ ...state, avatar }));

// New actions for managing habits
const addHabit = (habit: Habit) => userStore.update((state) => ({ ...state, habits: [...state.habits, habit] }));
const removeHabit = (habitName: string) => userStore.update((state) => ({
 ...state,
 habits: state.habits.filter((habit) => habit.name !== habitName),
}));

// Export the store and actions
export { userStore, setUser, setAuth, setUsername, setEmail, setAvatar, addHabit, removeHabit };
