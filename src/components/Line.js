import React from 'react';
import '../css/Line.css'

const Line = (props) =>{
    return(
        <div className="tubeLine" >
            <p className="name" >{props.info.name}</p>
            <div className="bar" id={props.info.id}></div>
            <p className="status">{props.info.lineStatuses[0].statusSeverityDescription}</p>
        </div>
    )
}

export default Line