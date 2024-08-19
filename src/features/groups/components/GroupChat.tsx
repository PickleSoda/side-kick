import React, { useEffect, useState } from 'react';
import {
    IonPage,
    IonHeader,
    IonItem,
    IonToolbar,
    IonContent,
} from '@ionic/react';
import ToolBar from '../../application/components/ui/ToolBar.tsx';
import { groupStore } from '../store/GroupStore.ts';
import { HabitStore } from '../../habits/store/habitStore.ts';
import { Group } from '../types';
import ChatContainer from './chat/ChatContainter.tsx';

const GroupChat = () => {


    const GroupChat = groupStore.useState((s) => s.groups);
    const selectedCommitment = HabitStore.useState((s) => s.selectedCommitment);

    const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
    useEffect(() => {
        setSelectedGroup(GroupChat.find((group) => { return group.commitment_id === selectedCommitment?.id }) || null);
        console.log('selected', selectedGroup);
    }, [selectedCommitment, GroupChat]);
    return (
        <IonPage>
            <IonHeader translucent={true} className='shadow-none' mode='md'>
                <IonToolbar className="transparent-bg ion-padding">
                    <ToolBar />
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItem>
                    <h1> {selectedGroup?.name}</h1>
                </IonItem>
                {selectedGroup &&
                    <ChatContainer groupId={selectedGroup.id}></ChatContainer>}
            </IonContent>
        </IonPage>
    );
};

export default GroupChat;
