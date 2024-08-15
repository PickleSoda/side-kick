import React from 'react';
import {
    IonPage,
    IonHeader,
    IonItem,
    IonToolbar,
    IonContent,
    IonList,
} from '@ionic/react';
import ToolBar from '../../application/components/ui/ToolBar.tsx';
import { groupStore } from '../store/GroupStore.ts';
import { HabitStore } from '../../habits/store/habitStore.ts';



const GroupChat = () => {


    const GroupChat = groupStore.useState((s) => s.groups);
    const selectedCommitment = HabitStore.useState((s) => s.selectedCommitment);
    console.log(GroupChat);
    console.log(selectedCommitment);
    return (
        <IonPage>
            <IonHeader translucent={true} className='shadow-none' mode='md'>
                <IonToolbar className="transparent-bg ion-padding">
                    <ToolBar />
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>
                        hi
                    </IonItem>
                    <IonItem >
                        bye
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default GroupChat;
