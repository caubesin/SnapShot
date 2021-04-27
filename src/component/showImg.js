import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import './showImg.css'
import {Popup} from './popup';
import actSEARCH from '../action/index';
import Button from './button';
import List from './list';
import Loading from './loader';
import Nothing from './nothing';
import Error from './error'


function ShowImg({stateImg, tags, page, showMore, noResult, isLoading, isNew, error}) {
    const [isShow, setIsShow] = useState(false)
    const [img, setImg] = useState();
    const [currentPage, setPage] = useState(page);
    useEffect(() => {
        setPage(page)
    },[page]);
    const handleClick = (img) => {
        setImg(img);
        setIsShow(true);
    }
    async function handleNext() {
        window.scrollTo(0, 0);
        if(currentPage === stateImg.length){
            await showMore(tags, page + 1)
        }
        else setPage(currentPage + 1)
    }
    const handlePrev = () => {
        window.scrollTo(0, 0);
        setPage(currentPage-1);
    }
    if(isLoading) {
        if(isNew && currentPage !== 1) {
            setPage(1);
        }
        return <Loading></Loading>
    }
    else if(noResult){
        return <Nothing></Nothing>
    }
    else if(error) {
        return <Error></Error>
    }
    else {
        return(
            <div>
                {isShow ? <Popup img = {img} setIsShow  = {setIsShow}></Popup> : ''}
                <div className = 'show-img'>
                    <h2>{tags === null ? "" : tags + ' Picture'}</h2>
                    <ul>
                        {stateImg.length === 0 ? '' : stateImg[currentPage-1].map((img) => {
                            return (
                                <List handleClick={handleClick} img ={img}></List>
                            )
                        })}
                    </ul>
                    {(page >= 1 && stateImg.length !== 0) ?
                        <div className='nav-btn'>
                            <Button disabled={currentPage === 1 ? true : false} handle={handlePrev} name="PREV"></Button>
                            <Button disabled={(stateImg[currentPage-1].length === 0) ? true : false} handle={handleNext} name="NEXT"></Button>
                        </div>
                        : ""
                    }
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showMore : (queryString, page, isNew) => {
            dispatch(actSEARCH(queryString, page, false))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        stateImg : state.searchReducer.image,
        tags : state.searchReducer.tags,
        page : state.searchReducer.page,
        noResult : state.searchReducer.noResult,
        isLoading : state.searchReducer.isLoading,
        isNew : state.searchReducer.isNew,
        error : state.searchReducer.error
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowImg)