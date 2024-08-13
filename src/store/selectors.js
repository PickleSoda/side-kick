import Store from '.';


import { createSelector } from 'reselect';
const getState = state => state;

export const getHomeItems = createSelector(getState, state => state.homeItems);
export const getLists = createSelector(getState, state => state.lists);
export const getNotifications = createSelector(getState, state => state.notifications);
export const getSettings = createSelector(getState, state => state.settings);

export const getCurrentIndex = () => Store.useState(s => s.currentIndex);

export const getCurrentCharacter = () => {
  const currentIndex = Store.useState(s => s.currentIndex);
  const characters = Store.useState(s => s.characters);
  return characters[currentIndex];
};