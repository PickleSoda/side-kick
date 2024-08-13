export interface IHabit {
    id?: string;
    name: string;
    description: string;
    duration: number; // Assuming duration is in days
    selectDate: Date;
    chosen: boolean;
    durations?: HabitDuration[];
    reminder_schedules?: ReminderSchedule[];
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
  
export interface ReminderSchedule {
    id: string;
    text_template: string;
    time: string;
    requires_confirmation?: boolean;
    is_active?: boolean;
    habit_id?: string;
    reminder_type?: string;
    priority?: number;
    day_indexes?: number[];
  }