// hooks/useFetchHabits.ts
import { useQuery } from '@tanstack/react-query';
import { getHabits } from '../requests';
import { HabitStore } from '../store/habitStore';

export const useFetchHabits = () => {
  return useQuery({
    queryKey: ['habits'],
    queryFn: async () => {
      const response = await getHabits();
      HabitStore.update((state) => {
        state.habits = response.data;
      });
      return response.data;
    },
  });
};
