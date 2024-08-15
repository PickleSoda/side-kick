export interface IHabit {
    id?: string;
    name: string;
    description: string;
    duration: number; // Assuming duration is in days
    selectDate: Date;
    chosen: boolean;
    durations?: HabitDuration[];
    created?: string;
  }

  export interface HabitDuration {
    id?: string;
    habit_id?: string;
    duration: number;
    notifications?: notifications[];
    daily_tasks?: daily_tasks[];
  }
  
  export type notifications = {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    day_indexes: number[];
    time: string;
  };
  export type daily_tasks = {
    id: string;
    title: string;
    description: string;
  };
  export interface ICommitment {
    alarm_time: string;
    creator_id: string;
    habit_id: string;
    id: string;
    length_in_days: number;
    start_time: string;
    status: string;
    habit_duration: HabitDuration;
  }