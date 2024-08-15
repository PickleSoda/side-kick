// hooks/useFetchCommitments.ts
import { useQuery } from "@tanstack/react-query";
import { getCommitments } from "../requests";
import { HabitStore } from "../store/habitStore";

export const useFetchCommitments = () => {
  return useQuery({
    queryKey: ["commitments"],
    queryFn: async () => {
      const response = await getCommitments();
      HabitStore.update((state) => {
        state.commitments = response.data;
      });
      return response.data;
    },
  });
};
