import React from 'react';
import {useLocation, Link, Redirect} from 'react-router-dom';
import '../css/Details.css'

const Details = (props) =>{
    let query = new URLSearchParams(useLocation().search).get('name');
    let findPosition = props.lines.indexOf(query);

    const parseAndCapitalise = (query) =>{
        let parsedQuery = query.replace("-", " & ");
        let final = parsedQuery.split(' ')
                    .map( string => string.charAt(0).toUpperCase() + string.substring(1))
                    .join(' ');
        return final;
    }

    const trimStatus = (status) =>{
        let position = status.search(":")
        let newStatus = status.slice(position + 1);
        return newStatus;
    }

    if(findPosition === -1){
        return(
            <Redirect to="/"/>
        )
    }
    else{
        return(
            <div className='details'>
                <Link to="/" className="Home-button">Home</Link>
                <div className="info">
                    <h1 className={ "line " + query}> {parseAndCapitalise(query)}: </h1>
                    <h1 className="current-status">{props.data[findPosition].lineStatuses[0].statusSeverityDescription} </h1>
                </div>
                
                    {props.data[findPosition].lineStatuses[0].reason ? 
                        <p className="reason disruption"> {trimStatus(props.data[findPosition].lineStatuses[0].reason)}</p>
                        : <p className="reason goodService">No disruptions anywhere on the line.</p>
                    }
            </div>
        )
    }
}

export default Details