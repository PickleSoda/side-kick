
export interface IHabit {
  id?: string;
  name: string;
  description: string;
  duration: number; // Assuming duration is in days
  selectDate: Date;
  chosen: boolean;
  available_durations?: number[];
}
export interface IUser {
  isAuth: boolean;
  username: string;
  email: string;
  token: string;
  avatar: ICharacter;
  alarm: IAlarm;
  habits: IHabit[]; // Add an array of Habit objects
  groups: any[];
}
export interface IStore {
  currentIndex: number;
  safeAreaTop: number;
  safeAreaBottom: number;
  menuOpen: boolean;
  notificationsOpen: boolean;
  currentPage: string | null;
  homeItems: object[];
  lists: object[];
  notifications: object[];
  settings: {
    enableNotifications: boolean;
  };
}
export interface IImage {
  title: string;
  type: string;
  text: string;
  author: string;
  authorAvatar: string;
  image: string;
}
export interface INotification {
  title: string;
  when: string;
}
export interface IList {
  name: string;
  id: string;
  items?: { name: string }[];
}
export interface IAlarm {
  hours: number;
  minutes: number;
  meridiem: "am" | "pm";
}

export interface ICharacter {
  img: IImg;
  name: string;
  text: any;
  info: string;
}

export interface IAlarm {
  hours: number;
  minutes: number;
  meridiem: "am" | "pm";
}
export interface IImg {
    blurHeight: number;
    blurWidth: number;
    height: number;
    src: string;
    width: number;
}

export interface IFormData {
  username: string;
  email: string;
  password: string;
}