// hooks/useMessages.ts

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchMessages, createMessage } from "../requests";
import { Message } from "../types";

// Hook to fetch messages
export const useMessages = (groupChatId: string) => {
  return useQuery<Message[], Error>({
    queryKey: ["messages", groupChatId],
    queryFn: () => fetchMessages(groupChatId),
  });
};

// Hook to create a new message
export const useCreateMessage = () => {
  const queryClient = useQueryClient();

  return useMutation<
    Message,
    Error,
    { groupChatId: string; text: string }
  >({
    mutationFn: (data) =>
      createMessage(data.groupChatId, data.text),
    onSuccess: (message, variables) => {
      // Invalidate and refetch messages for the specific group chat
      queryClient.invalidateQueries({
        queryKey: ["messages", variables.groupChatId],
      });
    },
  });
};
