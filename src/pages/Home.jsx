import React from 'react'
import DailyInfoCard from '../components/DailyInfoCard'
import Header from '../components/Header'
import style from "../style/home.module.css"

const Home = () => {
    return (
        <>
            <Header />
            <div className={style.home_container}></div>
            <DailyInfoCard />
        </>
    )
}

export default Home
