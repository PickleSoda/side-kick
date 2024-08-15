import { Store as PullStateStore } from "pullstate";

type GroupStoreProps = {
    groups: [];
    };


const initialState: GroupStoreProps = {
  groups: [],
};

const groupStore = new PullStateStore(initialState);


// const getServerGroups = async () => {
//   const groupChats = await getGroups();
//   console.log("server group chats", groupChats);
//   userStore.update((s) => {
//     s.groups = groupChats.data;
//   });
// };

// const setUserState = (alarm: IAlarm) =>
//   userStore.update((state) => ({ ...state, alarm: alarm }));

// export async function initializeUserState() {
//   console.log("Initializing user state");
//   const savedState = await Preferences.get({ key: "userState" });
//   console.log(savedState);
//   if (savedState && typeof savedState.value === "string") {
//     const parsedState = JSON.parse(savedState.value);
//     userStore.update((state) => ({
//       ...parsedState,
//     }));
//   }
// }

// userStore.createReaction(
//   (state) => state,
//   (state: IUser) => {
//     Preferences.set({ key: "userState", value: JSON.stringify(state) });
//   }
// );
export {
  groupStore,
  // getSererGroups,
};
