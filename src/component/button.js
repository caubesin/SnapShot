import React from 'react';
import './button.css'

export default function Button(props) {
    return(
        <button disabled = {props.disabled} type="button" className="button" onClick={() => props.handle()}>{props.name}</button>
    )
}