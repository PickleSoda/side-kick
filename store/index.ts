import { Store as PullStateStore } from "pullstate";
import { Store } from '../Types';

import { lists, homeItems, notifications } from "../mock";

const initialState: Store = {
  currentIndex: 0,
  safeAreaTop: 0,
  safeAreaBottom: 0,
  menuOpen: false,
  notificationsOpen: false,
  currentPage: null,
  homeItems,
  lists,
  notifications,
  settings: {
    enableNotifications: true,
  },
};



const Store = new PullStateStore(initialState);

export default Store;
