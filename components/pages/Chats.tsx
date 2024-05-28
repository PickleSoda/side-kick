import { useStoreState } from 'pullstate';
import { TodoListItem } from '../../mock';
import Store from '../../store';
import * as selectors from '../../store/selectors';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonImg,
} from '@ionic/react';
import { userStore } from '../../store/userStore';
import ToolBar from '../ui/ToolBar';

const ListEntry = ({ list }: { list: TodoListItem }) => {
  return (
    <IonItem routerLink={`/chats/${list.id}`} className="list-entry">
      <IonLabel>{list.name}</IonLabel>
    </IonItem>
  );
};

// const AllLists = () => {
//   const lists = Store.useState(selectors.getLists);

//   return (
//     <>
//       {lists.map((list:TodoListItem, i:number) => (
//         <ListEntry list={list} key={i} />
//       ))}
//     </>
//   );
// };

import max from "../../public/img/max.jpg";

const Chats = () => {

  const selectedCharacter = useStoreState(userStore, (s) => s.avatar);
  return (
    <IonPage>
      <IonHeader translucent={true}>
      <IonToolbar className="transparent-bg">
      <ToolBar />
      </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        {/* <IonList>
          <AllLists />
        </IonList> */}
          {/* <div className="bg-white w-4/5 mx-auto min-h-80 rounded-md relative">
            <div className="rotate-90 absolute bottom-[-9px] right-[50px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-white"></div>
        </div> */}
      <div className="bg-white w-4/5 mx-auto min-h-60 rounded-md relative mt-10 z-10 mb-36">
          <div className="chat-content">
            <div className="border-b-2 flex items-center gap-2">
              <div className='round'>
                <IonImg className="w-12 rounded-md" src={max.src} />
              </div>
              <p className='text-black'>AngryRacoon34</p>
            </div>
            <div className="chat-body z-20 text-black p-4 space-y-2">
              <p className="rounded-lg text-start max-w-xs">hey achi</p>
              <p className="rounded-lg text-end max-w-xs">hey bro</p>
              <p className="rounded-lg text-start max-w-xs">es chatis tema idk rogor undaa</p>
              <p className="rounded-lg text-end max-w-xs">me gaswavli daikide</p>
              <p className="rounded-lg text-start max-w-xs">sps</p>
              <p className="rounded-lg text-start max-w-xs">hey achi</p>
              <p className="rounded-lg text-end max-w-xs">hey bro</p>
              <p className="rounded-lg text-start max-w-xs">es chatis tema idk rogor undaa</p>
              <p className="rounded-lg text-end max-w-xs">me gaswavli daikide</p>
              <p className="rounded-lg text-start max-w-xs">sps</p>
            </div>
          </div>
          <div className='absolute bg-white bottom-[-5px] right-[50px] w-20 h-10 skew-y-12 z-[-1]'></div>
          <IonImg
          src={selectedCharacter.img.src}
          className="w-36 absolute bottom-[-9.5rem] right-[-20px]"
        />
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Chats;
