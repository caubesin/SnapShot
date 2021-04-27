import React from 'react';
import {getUrlImg} from '../const/urlImg';

export const Popup = (props) => {
    return(
        <div className = 'popup-container'>
                <img src={getUrlImg(props.img)} alt= {props.img.title}/>
                <p>{props.img.title === ''? 'No title' : props.img.title}</p>
                <button type="button" onClick={() => props.setIsShow(false)}></button>
            </div>
    )
}