import React from 'react';
import './loader.css'

export default function Loading() {
    return(
        <div className='loading'>
            <div className="circ">
            <div className="load">Loading . . . </div>
            <div className="hands"></div>
            <div className="body"></div>
            <div className="head">
                <div className="eye"></div>
            </div>
        </div>
        </div>
    )
}