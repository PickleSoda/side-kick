// hooks/useFetchGroups.ts
import { useQuery } from "@tanstack/react-query";
import { getGroups } from "../requests";
import { groupStore } from "../store/GroupStore";

export const useFetchGroups = () => {
  return useQuery({
    queryKey: ["groups"],
    queryFn: async () => {
      const response = await getGroups();
        groupStore.update((state) => {
            state.groups = response.data;
        });
      return response.data;
    },
  });
};
