import { Store as PullStateStore } from "pullstate";

type GroupStoreProps = {
    groups: [];
    };


const initialState: GroupStoreProps = {
  groups: [],
};

const groupStore = new PullStateStore(initialState);


export {
  groupStore,
};
