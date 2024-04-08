import { Image, Notification, List,Character } from '../Types';

import FoxImg from "../public/chars/fox/fox.svg";
import FoxText from "../public/chars/fox/fox-name.svg";

import RaccoonImg from "../public/chars/raccoon/raccoon.svg";
import RaccoonText from "../public/chars/raccoon/raccoon-name.svg";

import AramdilloImg from "../public/chars/aramdillo/aramdillo.svg";
import AramdilloText from "../public/chars/aramdillo/aramdillo-name.svg";

export const images: string[] = [
  '/img/c1.avif',
  '/img/c2.avif',
  '/img/c3.avif',
];

export const homeItems: Image[] = [
  {
      title: 'Exploring Maui',
      type: 'Blog',
      text: 'We just got back from a trip to Maui, and we had a great time...',
      author: 'Max Lynch',
      authorAvatar: '/img/max.jpg',
      image: images[0],
  },
  {
      title: 'Arctic Adventures',
      type: 'Blog',
      text: 'Last month we took a trek to the Arctic Circle. The isolation was just what we needed after...',
      author: 'Max Lynch',
      authorAvatar: '/img/max.jpg',
      image: images[1],
  },
  {
      title: 'Frolicking in the Faroe Islands',
      type: 'Blog',
      text: 'The Faroe Islands are a North Atlantic archipelago located 320 kilometres (200 mi) north-northwest of Scotland...',
      author: 'Max Lynch',
      authorAvatar: '/img/max.jpg',
      image: images[2],
  },
];

export const notifications: Notification[] = [
  { title: 'New friend request', when: '6 hr' },
  { title: 'Please change your password', when: '1 day' },
  { title: 'You have a new message', when: '2 weeks' },
  { title: 'Welcome to the app!', when: '1 month' },
];

export const lists: List[] = [
  {
      name: 'Groceries',
      id: 'groceries',
      items: [{ name: 'Apples' }, { name: 'Bananas' }, { name: 'Milk' }, { name: 'Ice Cream' }],
  },
  {
      name: 'Hardware Store',
      id: 'hardware',
      items: [
          { name: 'Circular Saw' },
          { name: 'Tack Cloth' },
          { name: 'Drywall' },
          { name: 'Router' },
      ],
  },
  { name: 'Work', id: 'work', items: [{ name: 'TPS Report' }, { name: 'Set up email' }] },
  { name: 'Reminders', id: 'reminders' },
];



export const characters: Character[] = [
  {
    img: FoxImg,
    name: "fox",
    text: FoxText,
    info:
      "Fox Info Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed arcu hendrerit, eleifend nibh euismod, consequat libero. Fusce feugiat dui a sodales maximus. ",
  },
  {
    img: RaccoonImg,
    name: "raccoon",
    text: RaccoonText,
    info:
      "Raccoon Info Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed arcu hendrerit, eleifend nibh euismod, consequat libero. Fusce feugiat dui a sodales maximus. ",
  },
  {
    img: AramdilloImg,
    name: "armadillo",
    text: AramdilloText,
    info:
      "Armadillo Info Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed arcu hendrerit, eleifend nibh euismod, consequat libero. Fusce feugiat dui a sodales maximus. ",
  },
];