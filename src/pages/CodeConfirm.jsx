import React from 'react'
import style from "../style/phoneConfirm.module.css"
import { Link } from 'react-router-dom'

const CodeConfirm = () => {
    return (
        <div className={style.phoneConfirmContainer}>
            <Link exact to="/get_username" className={style.backBtn}>
                <img src="/images/arrow.png" alt="" />
            </Link>
            <div className="text-center">
                <h1 style={{width: '100%', maxWidth:"300px", marginBottom:"1em"}}>
                    Enter the code that we just texted you
                </h1>
                <input 
                    type="text" 
                    style={{
                        width: "100%",
                        border: "none",
                        textAlign: "center",                        outline: "none"
                    }}/>
                <p className="mt-2">
                    Didn't receive it? <span>Tap to resend</span>
                </p>
            </div>
            <Link exact to="/get_username" className="primaryBtn d-flex align-items-center">
                Next 
            </Link>
        </div>
    )
}

export default CodeConfirm

