import React from "react"
import {
    IonIcon,
    IonModal,
    IonContent,
    IonList,
    IonItem,
} from "@ionic/react"
import { heartCircle, menuOutline, } from "ionicons/icons"
import { HabitStore } from "../../../habits/store/habitStore"
import { useState } from "react"
import DaysPassed from "./DaysPassed"
import { ICommitment } from "../../../../types"
const ToolBar = () => {
    const commitments = HabitStore.useState((s) => s.commitments)
    const selectedCommitment = HabitStore.useState((s) => s.selectedCommitment)
    const habits = HabitStore.useState((s) => s.habits)
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen)
        console.log('menu clicked')
    }
    const handleCommitmentClick = (commitment: ICommitment) => {
        console.log('commitment clicked')
        HabitStore.update((s) => {
            s.selectedCommitment = commitment
        })
        setIsMenuOpen(false)
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
                                <IonItem key={index} onClick={() => handleCommitmentClick(commitment)}>
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
                        <IonItem routerDirection="forward" routerLink="/habits/pick" onClick={() => setIsMenuOpen(false)}>
                            <p className="text-lg">Add New Habit</p>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonModal>

        </>
    )
}

export default ToolBar