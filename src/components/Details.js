import React from 'react';
import {useLocation, Link, Redirect} from 'react-router-dom';
import '../css/Details.css'

const Details = (props) =>{
    let query = new URLSearchParams(useLocation().search).get('name');
    let parseAndCapitalise = (query) =>{
        let parsedQuery = query.replace("-", " & ");
        let final = parsedQuery.split(' ')
                    .map( string => string.charAt(0).toUpperCase() + string.substring(1))
                    .join(' ');
        return final;
    }

    if(props.lines.indexOf(query) == -1){
        return(
            <Redirect to="/"/>
        )
    }
    else{
        return(
            <div className='details'>
                <Link to="/" className="Home-button">Tube Status</Link>
                <h1>How is the {parseAndCapitalise(query)} line?</h1>
            </div>
        )
    }
}

export default Details