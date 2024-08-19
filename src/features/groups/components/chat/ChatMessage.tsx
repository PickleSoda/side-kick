// components/ChatMessage.tsx

import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';
import { Message } from '../../types';

interface ChatMessageProps {
    message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
    return (
        <IonItem>
            <IonLabel>
                <strong>{message.user_id}</strong>
                <p>{message.text}</p>
                <small>{new Date(message.timestamp).toLocaleTimeString()}</small>
            </IonLabel>
        </IonItem>
    );
};

export default ChatMessage;
