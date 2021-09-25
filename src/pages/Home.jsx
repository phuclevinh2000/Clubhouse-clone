import React from 'react'
import Header from '../components/Header'
import style from "../style/home.module.css"
import DailyInfoCard from "../components/DailyInfoCard"
import RoomInfoCard from '../components/RoomInfoCard'

const Home = () => {
    return (
        <>
            <Header />
            <div className={style.home_container}>
                <DailyInfoCard />
                <RoomInfoCard />
            </div>
        </>
    )
}

export default Home
