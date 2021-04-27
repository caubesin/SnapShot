import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import actSEARCH from '../action/index';

function Nav({search}) {
    const navArr = ['Mountain','Fish','Beaches','Food','Girl'];
    useEffect(() => {
        search(navArr[0],1,true);
    })
    const handleClick = (tag) => {
        search(tag,1,true);
    }
    return(
        <ul>
            {navArr.map((tag,index) => {
                return <li onClick={() => handleClick(tag)} key={index}>{tag}</li>
            })}
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        search : (queryString, page, isNew) => {
            dispatch(actSEARCH(queryString, page, isNew))
        }
    }
}

export default connect(null,mapDispatchToProps)(Nav)