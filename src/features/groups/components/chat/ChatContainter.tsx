// components/ChatContainer.tsx

import React, { useState } from 'react';
import {
    IonItem,
    IonInput,
    IonButton,
    IonList,
    IonSpinner,
} from '@ionic/react';
import { useMessages, useCreateMessage } from '../../hooks/useMessages'; // Import hooks
import ChatMessage from './ChatMessage'; // Import the ChatMessage component
import { Message } from '../../types';

const ChatContainer: React.FC<{ groupId: string }> = ({ groupId }) => {
    const [messageInput, setMessageInput] = useState('');

    // Use the useMessages hook to fetch messages
    const { data: messages = [], isLoading, error } = useMessages(groupId);

    // Use the useCreateMessage hook to create new messages
    const createMessageMutation = useCreateMessage();

    const handleSendMessage = () => {
        if (messageInput.trim() !== '') {
            createMessageMutation.mutate({
                groupChatId: groupId,
                text: messageInput,
            }, {
                onSuccess: () => {
                    setMessageInput(''); // Clear input field after sending
                }
            });
        }
    };

    return (
        <>
            <IonList>
                {isLoading ? (
                    <IonItem>
                        <IonSpinner name="crescent" />
                    </IonItem>
                ) : error ? (
                    <IonItem>Error loading messages</IonItem>
                ) : (
                    messages.map((message: Message) => (
                        <ChatMessage key={message.id} message={message} />
                    ))
                )}
            </IonList>
            <IonItem>
                <IonInput
                    value={messageInput}
                    onIonInput={(e: any) => setMessageInput(e.target?.value)}
                    placeholder="Type a message"
                />
                <IonButton onClick={handleSendMessage} disabled={createMessageMutation.isPending}>
                    {createMessageMutation.isPending ? 'Sending...' : 'Send'}
                </IonButton>
            </IonItem>
        </>
    );
};

export default ChatContainer;
