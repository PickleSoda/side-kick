// User.ts
export interface Habit {
    name: string;
    description: string;
    duration: number; // Assuming duration is in days
    selectDate: Date;
  }
  
  export interface User {
    isAuth: boolean;
    username: string;
    email: string;
    avatar: string;
    habits: Habit[]; // Add an array of Habit objects
  }
  
  export interface Store {
    currentIndex: number;
    safeAreaTop: number;
    safeAreaBottom: number;
    menuOpen: boolean;
    notificationsOpen: boolean;
    currentPage: string | null;
    homeItems: any[];
    lists: any[];
    notifications: any[];
    settings: {
      enableNotifications: boolean;
    };
  }
  export interface Image {
      title: string;
      type: string;
      text: string;
      author: string;
      authorAvatar: string;
      image: string;
  }
  
  export interface Notification {
      title: string;
      when: string;
  }
  
  export interface List {
      name: string;
      id: string;
      items?: { name: string }[];
  }
  