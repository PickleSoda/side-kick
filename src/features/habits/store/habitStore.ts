import { Store as PullStateStore } from "pullstate";
// import { Preferences } from "@capacitor/preferences";
import { IHabit, ICommitment } from "../types";

type HabitStoreProps = {
  habits: IHabit[];
  selectedHabit: IHabit | null;
  commitments: ICommitment[] | [];
  selectedCommitment: ICommitment | null;
};

const HabitStore = new PullStateStore<HabitStoreProps>({
  habits: [],
  selectedHabit: null,
  commitments: [],
  selectedCommitment: null,
});

export { HabitStore};

