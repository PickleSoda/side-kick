// types.ts

export interface UserInfo {
    habit_id: number;
    id: number;
    name: string;
  }
  export interface Message {
    id: number;
    user_id: number;
    group_chat_id: number;
    text: string;
    timestamp: string; // Consider using Date if you need date manipulation
    is_system_message: boolean;
  }
  
  export interface Group {
    id: string;
    name: string;
    commitment_id: string;
    commitments: UserInfo[];
    start_time: string; // Consider using Date if you need date manipulation
    end_time: string;   // Consider using Date if you need date manipulation
    messages: Message[];    // You can define a type for messages if needed
    reminders: [];   // You can define a type for reminders if needed
  }
  