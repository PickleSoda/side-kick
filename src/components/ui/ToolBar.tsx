import {
    IonIcon,
    IonModal,
    IonContent,
    IonList,
    IonItem,
} from "@ionic/react"
import { heartCircle, menuOutline, navigate } from "ionicons/icons"
import { motion } from "framer-motion"
import { userStore } from "../../store/userStore"
import Store from "../../store"
import { useState } from "react"
import DaysPassed from "./DaysPassed"
const ToolBar = () => {
    const commitments = userStore.useState((s) => s.commitments)
    const [selectedCommitment, setSelectedCommitment] = useState(commitments[0] || null)
    const habits = Store.useState((s) => s.habits)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const variants = {
        open: { opacity: 1, x: 0 },
        close: { opacity: 0, y: "-100%" }
    }

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen)
        console.log('menu clicked')
    }
    return (
        <>
            <div className=" toolbar">
                {
                    selectedCommitment ?
                        <div className="flex justify-between items-center">
                            <div className="flex gap-1">
                                <IonIcon icon={heartCircle} style={{ width: '30px', height: '30px' }} />
                                <p>{habits.find((habit) => { return habit.id === selectedCommitment.habit_duration.habit_id })?.name}</p>

                            </div>
                            <div className="flex w-24">

                                {selectedCommitment.status == "Ongoing" ?
                                    <>
                                        <p className="px-1">DAY </p> <DaysPassed dateString={selectedCommitment.start_time} className="" />  <p>/</p> <p> {selectedCommitment.length_in_days}</p>
                                    </>
                                    : <p className="px-1">Pending</p>
                                }
                            </div>
                            {
                                commitments.length > 1 ?
                                    <IonIcon icon={menuOutline} style={{ width: '30px', height: '30px' }} onClick={handleMenuClick} />
                                    : null
                            }
                        </div>
                        : <div className="flex gap-1">
                            <IonIcon icon={heartCircle} style={{ width: '30px', height: '30px' }} />
                            <p className="text-lg leading-4 my-auto mx-auto">No Commitments</p>
                        </div>
                }
            </div>
            <IonModal id="example-modal" isOpen={isMenuOpen} onDidDismiss={() => setIsMenuOpen(false)} className="ion-padding">
                <IonContent>
                    <IonList>

                        {
                            commitments.map((commitment, index) => (
                                <IonItem key={index} onClick={() => { setSelectedCommitment(commitment); setIsMenuOpen(false) }}>
                                    <div className="flex justify-between items-center w-full">
                                        <div className="flex gap-1 text-lg">
                                            <IonIcon icon={heartCircle} style={{ width: '30px', height: '30px' }} />
                                            <p>{habits.find((habit) => { return habit.id === commitment.habit_duration.habit_id })?.name}</p>
                                        </div>
                                        <div className="flex w-24">
                                            {commitment.status == "Ongoing" ?
                                                <>
                                                    <p className="px-1">DAY </p> <DaysPassed dateString={commitment.start_time} className="" />  <p>/</p> <p> {commitment.length_in_days}</p>
                                                </>
                                                : <p className="px-1">Pending</p>
                                            }
                                        </div>
                                    </div>
                                </IonItem>
                            ))
                        }
                    </IonList>
                </IonContent>
            </IonModal>

        </>
    )
}

export default ToolBar