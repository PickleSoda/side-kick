import React from "react";
import { IonContent, IonHeader, IonIcon, IonPage } from "@ionic/react"
import { userStore } from "../auth/store/UserStore";
import ChargingButton from "../application/components/ui/ChargingButton.tsx";
import HandshakeTime from "../application/components/alarm/HandShakeTime.tsx";
const Fingerprint = () => {

    const userAlarm = userStore.useState((s) => {
        return s.alarm
      });

    return (
        <IonPage>
            <IonHeader className="text-white text-center p-4">
                <div className="leading-3">
                    {/* <p>Handshake</p><br />
                    <p>subtitle</p> */}
                </div>
            </IonHeader>
            <IonContent className="flex flex-col justify-center items-center min-h-screen">
                <div className="flex items-center justify-center">
                    <h3>
                        We will <br /> shake <br /> hands <br /> everyday
                    </h3>
                <div>
                    <HandshakeTime alarm={userAlarm} setAlarm={console.log}/>
                </div>
                </div>
                <div className="mt-4 flex justify-center">
                    <ChargingButton />
                </div>

                {/* <div className="px-4">
                    <h3 className="text-xl">
                        <span className="text-5xl">“</span>
                        I will
                        <input className="border-b-2 bg-transparent" type="text" placeholder="meditate for 5 minutes as soon as I wake up" />
                        so that
                        I can become
                        <input className="border-b-2 bg-transparent" type="text" placeholder="more mindful person." />
                        <span className="text-5xl">”</span>
                    </h3>
                </div> */}
                <div className="flex flex-col items-start px-4 pt-20">
                    <div className="flex justify-start w-full">
                        <h3 className="text-3xl font-extrabold">
                            <span>Do the </span><br /><span className="colored-text"> handshake</span>
                        </h3>
                    </div>
                    <div className="flex justify-start w-full">
                        <p className="text-xl">
                            Agree on a desired time and <br />simultaneously press your <br />thumbs <span className="colored-text">for 3 seconds</span>
                        </p>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Fingerprint