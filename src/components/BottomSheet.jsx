import React from 'react'
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import style from "../style/bottomSheet.module.css"
import StartRoom from './bottom_sheets/StartRoom';
import NewRoom from './bottom_sheets/NewRoom';

const BottomSheet = (props) => {
    return (
        <div>
            <SwipeableBottomSheet 
                open={props.sheetVisible}
                onChange={() => {
                    props.setSheetVisible(!props.sheetVisible)
                    props.setItemVisible(true)
                }}
                fullScreen={props.sheetTitle === 'room detail' ? true : false} 
            >
               <div className={style.BottomSheetContainer}
                    style={{
                        backgroundColor: props.sheetTitle ==='profile' ? 'transparents' : 'empty'
                    }}
                >
                    {props.sheetTitle === "new room" ? (
                        <NewRoom
                            cardDetail={props.cardDetail} 
                            setSheetCreateRoom =  {props.setSheetCreateRoom}
                            setSheetVisible = {(item) => {
                                props.setSheetVisible(item);
                                props.setItemVisible(true);
                            }}
                        /> 
                    ) : props.sheetTitle==="start room" ?(
                        <StartRoom
                            setSheetCreateRoom =  {props.setSheetCreateRoom}
                            setSheetVisible = {(item) => {
                                props.setSheetVisible(item);
                                props.setItemVisible(true);
                            }}
                        /> 
                    ) : (
                        ""
                    )}
                </div> 

            </SwipeableBottomSheet>
        </div>
    )
}

export default BottomSheet
