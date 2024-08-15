import { ICharacter } from "../types";

import FoxImg from "../../public/chars/fox/fox.svg";
import FoxText from "../../public/chars/fox/fox-name.svg";

import RaccoonImg from "../../public/chars/raccoon/raccoon.svg";
import RaccoonText from "../../public/chars/raccoon/raccoon-name.svg";

import AramdilloImg from "../../public/chars/aramdillo/aramdillo.svg";
import AramdilloText from "../../public/chars/aramdillo/aramdillo-name.svg";


export type NotificationItem = {
  id: number;
  title: string;
  when: string;
};

export const notifications: NotificationItem[] = [
  { id: 1, title: "New friend request", when: "6 hr" },
  { id: 2, title: "Please change your password", when: "1 day" },
  { id: 3, title: "You have a new message", when: "2 weeks" },
  { id: 4, title: "Welcome to the app!", when: "1 month" },
];

export type Settings = {
  enableNotifications: boolean;
};

export const settings: Settings = {
  enableNotifications: true,
};
export const characters: ICharacter[] = [
  {
    img: FoxImg,
    name: "fox",
    text: FoxText,
    info: "Fox Info Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed arcu hendrerit, eleifend nibh euismod, consequat libero. Fusce feugiat dui a sodales maximus. ",
  },
  {
    img: RaccoonImg,
    name: "raccoon",
    text: RaccoonText,
    info: "Raccoon Info Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed arcu hendrerit, eleifend nibh euismod, consequat libero. Fusce feugiat dui a sodales maximus. ",
  },
  {
    img: AramdilloImg,
    name: "armadillo",
    text: AramdilloText,
    info: "Armadillo Info Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed arcu hendrerit, eleifend nibh euismod, consequat libero. Fusce feugiat dui a sodales maximus. ",
  },
];
