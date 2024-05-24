import { IonIcon } from "@ionic/react"
import { heartCircle, menuOutline, navigate } from "ionicons/icons"

const ToolBar = () => {
    return (
        <div className="flex justify-between toolbar items-center">
            <div className="flex gap-1">
                <IonIcon icon={heartCircle} style={{ width: '30px', height: '30px' }}/>
                <p className="text-lg leading-4">Smoke<br />Less</p>
            </div>
            <div className="text-lg">
                <p>DAY <span className="text-2xl">1</span>/21</p>
            </div>
            <IonIcon icon={menuOutline} style={{ width: '30px', height: '30px' }}/>
        </div>
    )
}

export default ToolBar