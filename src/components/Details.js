import React, { Component } from 'react';
import queryString from 'query-string';
import {useLocation} from 'react-router-dom'

const Details = (props) =>{
    return(
        <div className='details'>
            <nav>
                <a href="/" className="Home-button">Tube Status</a>
            </nav>
            <h1>How is the {new URLSearchParams(useLocation().search).get('name')} line?</h1>
        </div>
    )
    
}

export default Details