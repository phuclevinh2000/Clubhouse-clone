import React, {useState} from 'react'
import Header from '../components/Header'
import style from "../style/home.module.css"
import DailyInfoCard from "../components/DailyInfoCard"
import RoomInfoCard from '../components/RoomInfoCard'
import { AiOutlinePlus } from "react-icons/ai"
import { BsGrid3X3Gap } from "react-icons/bs"
import data from "../data/roomCard.json"
import BottomSheet from '../components/BottomSheet'

const Home = () => {
    const [itemVisible, setItemVisible] = useState(true)
    const [sheetVisible, setSheetVisible] = useState(false)
    const [sheetCreateRoom, setSheetCreateRoom] = useState(false)
    const [loaderVisibility, setLoaderVisibility] = useState(false)
    const [cardId, setCardId] = useState(1)
    return (
        <>
            <Header />
            <div className={style.home_container}>
                <DailyInfoCard />
                <RoomInfoCard />
            </div>
            <div className={style.action_btn}>
                <button onClick={() => setSheetVisible(true)}>
                    <AiOutlinePlus className="mr-2"/>
                    Start a room
                </button>
                <button>
                    <BsGrid3X3Gap />
                </button>
                <BottomSheet 
                    sheetTitle='start room'
                    setSheetVisible={(item) => setSheetVisible(item)}
                    sheetVisible={sheetVisible}
                    cardDetail={data.find((item) => item.id === cardId)}    
                    setItemVisible={(item) => {
                        setLoaderVisibility(true)
                        setTimeout(() => {
                            setSheetCreateRoom(item)
                            setLoaderVisibility(false)
                        }, 1000)
                    }}
                />
                    
            </div>
        </>
    )
}

export default Home
