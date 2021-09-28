import React, {useState} from 'react'
import style from "../../style/bottomSheet.module.css"
import { FcGlobe } from "react-icons/fc"

const StartRoom = () => {
    const [room, setRoom] = useState("open")
    return (
        <>
            <div className={style.switch_line}></div>
            <div className="text-right">
                <button className={style.addTopicBtn}>+ Add a topic</button>
                
            </div>
        </>
    )
}

export default StartRoom
