import { Store as PullStateStore } from 'pullstate';
import { Preferences } from "@capacitor/preferences";
import { getHabits } from '../utils/requests';
import { lists, homeItems, notifications, settings, TodoListItem, HomeItem, NotificationItem, Settings, habits } from '../mock';
import { IHabit } from '../types';

type StoreProps = {
  safeAreaTop: number;
  safeAreaBottom: number;
  menuOpen: boolean;
  notificationsOpen: boolean;
  currentPage: number | null;
  homeItems: HomeItem[];
  lists: TodoListItem[];
  notifications: NotificationItem[];
  settings: Settings;
  selectedList: TodoListItem | undefined;
  habits: IHabit[];
}

const Store = new PullStateStore<StoreProps>({
  safeAreaTop: 0,
  safeAreaBottom: 0,
  menuOpen: false,
  notificationsOpen: false,
  currentPage: null,
  homeItems,
  lists,
  notifications,
  settings,
  selectedList: undefined,
  habits: habits,
});

export default Store;


export async function initializeAppState() {
  console.log("Initializing user state");
  const savedState = await Preferences.get({ key: "appState" });
  console.log(savedState);
  if (savedState && typeof savedState.value === "string") {
    const parsedState = JSON.parse(savedState.value);
    if (typeof parsedState === "object" && isStoreProps(parsedState)) {
      Store.update((state) => ({
        ...parsedState,
      }));
    } else {
      console.error("Saved state is not valid");
    }
  }
  const response = await getHabits();
  console.log('server habits',response);
  Store.update((state) => {
    state.habits = response.data;
  });
}

function isStoreProps(obj: any): obj is StoreProps {
  // Check if obj has all the required properties of StoreProps
  return (
    typeof obj.safeAreaTop === "number" &&
    typeof obj.safeAreaBottom === "number" &&
    typeof obj.menuOpen === "boolean" &&
    typeof obj.notificationsOpen === "boolean" &&
    (typeof obj.currentPage === "number" || obj.currentPage === null) &&
    Array.isArray(obj.homeItems) &&
    Array.isArray(obj.lists) &&
    Array.isArray(obj.notifications) &&
    typeof obj.settings === "object" &&
    (typeof obj.selectedList === "object" || obj.selectedList === undefined) &&
    Array.isArray(obj.habits)
  );


}