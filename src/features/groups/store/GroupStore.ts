import { Store as PullStateStore } from "pullstate";
import { Group } from "../types";
type GroupStoreProps = {
    groups: Group[];
    };


const initialState: GroupStoreProps = {
  groups: [],
};

const groupStore = new PullStateStore(initialState);


export {
  groupStore,
};
