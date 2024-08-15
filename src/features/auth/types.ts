export interface IUser {
    isAuth: boolean;
    username: string;
    email: string;
    token: string;
    avatar: ICharacter;
    alarm: IAlarm;
  }

export interface ICharacter {
    img: IImg;
    name: string;
    text: string;
    info: string;
  }
  export interface IImg {
    blurHeight: number;
    blurWidth: number;
    height: number;
    src: string;
    width: number;
  }
  export interface IAlarm {
    hours: number;
    minutes: number;
    meridiem: "am" | "pm";
  }

  