import React from 'react'
import style from "../style/explore.module.css"
import { DownOutlined, FireOutLined}  from '@ant-design/icons'
import data from "../data/Explore.json"
import { BsPeople } from 'react-icons/bs'

const Explore = () => {
    const { people, conversation } = data;  //new way to take data ES6

    return (
        <div className={style.exploredContainer}>
            <h6>PEOPLE TO FOLLOW</h6>
            <div className={style.peopleContainer}>
                {people.map((item) => (
                    <div>
                        <div className="d-flex align-items-center">
                            <img src="/images/user_image_1.jpg" alt="" />
                            <div className="ml-2">
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                            <button>Follow</button>
                        </div>
                    </div>
                ))}
                <button className={style.showMore}>
                    Show more people <DownOutlined />
                </button>
            </div>
        </div>
    )
}

export default Explore
