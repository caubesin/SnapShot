import React from 'react';
import img from '../img/preview.jpg';
import './nothing.css'

export default function Nothing() {
    return(
        <div className="nothing">
            <img src={img} alt='Nothing...'/>
            <h2>oops! nothing found</h2>
            <p>Please try something else !</p>
        </div>
    )
}