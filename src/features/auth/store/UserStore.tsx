import { Store as PullStateStore } from "pullstate";
import { IUser,  IAlarm, ICharacter } from "../types";
import { characters } from "../../../mock";
import { Preferences } from "@capacitor/preferences";

const initialState: IUser = {
  isAuth: false,
  username: "",
  email: "",
  token: "",
  avatar: characters[0], // Initialize habits as an empty array
  alarm: { hours: 0, minutes: 0, meridiem: "am" },

};
const userStore = new PullStateStore(initialState);

const setAvatar = (avatar: ICharacter) =>
  userStore.update((state) => ({ ...state, avatar }));

const loginUser = ({
  username,
  token,
}: {
  username: string;
  token: string;
}) => {
  userStore.update((s) => {
    s.isAuth = true;
    s.username = username;
    s.token = token;
  });
};

const logoutUser = () => {
  userStore.update((s) => {
    s.isAuth = false;
    s.username = "";
    s.token = "";
    s.alarm = { hours: 0, minutes: 0, meridiem: "am" };
  });
};

// const getServerCommitments = async () => {
//   const commitments = await getCommitments();
//   console.log("server commitments", commitments);
//   userStore.update((s) => {
//     s.commitments = commitments.data;
//   });
// };

// const getSererGroups = async () => {
//   const groupChats = await getGroups();
//   console.log("server group chats", groupChats);
//   userStore.update((s) => {
//     s.groups = groupChats.data;
//   });
// };

const setUserAlarm = (alarm: IAlarm) =>
  userStore.update((state) => ({ ...state, alarm: alarm }));

export async function initializeUserState() {
  console.log("Initializing user state");
  const savedState = await Preferences.get({ key: "userState" });
  console.log(savedState);
  if (savedState && typeof savedState.value === "string") {
    const parsedState = JSON.parse(savedState.value);
    userStore.update(() => ({
      ...parsedState,
    }));
  }
}

userStore.createReaction(
  (state) => state,
  (state: IUser) => {
    Preferences.set({ key: "userState", value: JSON.stringify(state) });
  }
);
// Export the store and actions
export {
  userStore,
  setAvatar,
  setUserAlarm,
  loginUser,
  logoutUser,
};
