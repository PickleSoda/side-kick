import ToolBar from '../../../components/ui/ToolBar';
import { userStore } from '../../../store/userStore';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonList,
} from '@ionic/react';

const ListEntry = ({ group }: { group: any }) => {
    return (
        <IonItem routerLink={`/chats/${group.id}`} className="list-entry">
            <h1 className='font-bold text-2xl ion-padding'>{group.name}</h1>
        </IonItem>
    );
};

const AllChats = () => {
    const groups = userStore.useState((s) => s.groups);
    return (
        <>
            {groups?.length === 0 ? (
                <div className='flex justify-center items-center h-[75vh]'>
                    <h1 className='text-2xl'>No chats available</h1>
                </div>
            ) : (groups.map((group: any, i: number) => (
                <ListEntry group={group} key={i} />
            )))}
        </>
    );
};

const Chats = () => {
    return (
        <IonPage>
            <IonHeader translucent={true} className='shadow-none' mode='md'>
                <IonToolbar className="transparent-bg ion-padding">
                    <ToolBar />
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen={true}>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Lists</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList>
                    <AllChats />
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Chats;
