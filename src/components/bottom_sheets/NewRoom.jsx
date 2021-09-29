import React, {useState} from 'react'
import style from "../../style/roomDetail.module.css"
import { AiOutlineFile } from 'react-icons/ai'
import { BsMicMuteFill } from 'react-icons/bs'

const NewRoom = (props) => {
    const [micMuteVisible, setMicMuteVisible] = useState(false)
    const card = props.cardDetail

    return (
        <>
            <div className={style.roomDetailContainer}>
                <div className={style.head}>
                    <div className="d-flex align-items-center">
                        <a 
                            href="google.com" 
                            onClick={() => props.setSheetVisible(false)} 
                        >
                            <img src="/images/arrow.png" alt="" />
                        </a>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default NewRoom
