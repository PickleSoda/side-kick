// requests.ts

import { request } from "../../../lib/axios";
import { Message } from "../types";

export const getGroups = async () => {
  return request({
    url: "/user/group-chats",
    method: "GET",
  });
};

export const fetchMessages = async (groupChatId: string): Promise<Message[]> => {
  const response = await request({
    url: `/messages/group_chats/${groupChatId}`,
    method: "GET",
  });
  return response.data; // Ensure response.data matches Message[]
};

export const createMessage = async (
  groupChatId: string,
  text: string
): Promise<Message> => {
  const response = await request({
    url: `/messages/group_chats/${groupChatId}`,
    method: "POST",
    data: {
      text,
    },
  });
  return response.data; // Ensure response.data matches Message
};
