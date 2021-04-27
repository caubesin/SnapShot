import React, {useState} from 'react';
import {connect} from 'react-redux';
import actSEARCH from '../action/index'
import "./header.css"
import Nav from "./nav";

function Header(props) {
    const [query, setQuery] = useState('');
    const handleChange = (e) => {
        setQuery(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.search(query, 1, true);
    }
    return(
        <div className = "form-container">
            <h1>SnapShot</h1>
            <form onSubmit = {handleSubmit} className = "form-main">
                <input type="text" placeholder="Search..."onChange={handleChange}/>
                <button type="submit" disabled={query === '' ? true : false}>Search</button>
            </form>
            <div className="nav">
                <Nav></Nav>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        search: (queryString, page, isNew) => {
            dispatch(actSEARCH(queryString, page, isNew));
        }
    }
}

export default connect(null, mapDispatchToProps)(Header);