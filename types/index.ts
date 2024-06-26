
export interface IHabit {
  id?: string;
  name: string;
  description: string;
  duration: number; // Assuming duration is in days
  selectDate: Date;
  chosen: boolean;
  available_durations?: number[];
}
export interface IGroup {
}

export interface ICommitment {
  alarm_time: string;
  creator_id: string;
  habit_id: string;
  id: string;
  length_in_days: number;
  start_time: string;
  status: string;
}

export interface IUser {
  isAuth: boolean;
  username: string;
  email: string;
  token: string;
  avatar: ICharacter;
  alarm: IAlarm;
  commitments: ICommitment[]; // Add an array of Habit objects
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

// export interface IGroup {
//   commitments: Array [ {…}, {…} ]
//   ​​​​
//   0: Object { habit_id: 14, id: 3, name: "testuser" }
//   ​​​​​
//   habit_id: 14
//   ​​​​​
//   id: 3
//   ​​​​​
//   name: "testuser"
//   ​​​​​
//   <prototype>: Object { … }
//   ​​​​
//   1: Object { habit_id: 17, id: 4, name: "testuser2" }
//   ​​​​
//   length: 2
//   ​​​​
//   <prototype>: Array []
//   ​​​
//   end_time: "2024-06-29T03:47:35"
//   ​​​
//   id: 10
//   ​​​
//   messages: Array []
//   ​​​
//   name: "spooky dookie"
//   ​​​
//   reminders: Array []
//   ​​​
//   start_time: "2024-05-30T03:47:35"
// }