import React from 'react';
import {getUrlImg} from '../const/urlImg';

export default function List(props) {
    return(
        <li key={props.img.key} onClick={() => props.handleClick(props.img)}>
            <img src={getUrlImg(props.img)} alt= {props.img.title}/>
            <p>{props.img.title === '' ? "No Title" : props.img.title}</p>
        </li>
    )
}