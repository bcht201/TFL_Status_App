import React from 'react';
import '../css/Line.css'

const Line = (props) =>{
    const trimStatus = (status) =>{
        let position = status.search(":")
        let newStatus = status.slice(position + 1);
        return newStatus;
    }
    
    return(
        <div className="tubeLine" >
            <p className="name" >{props.info.name}</p>
            <div className="bar" id={props.info.id}></div>
            <div>
                <p className="status" id={props.info.lineStatuses[0].statusSeverity}>
                    {props.info.lineStatuses[0].statusSeverityDescription} 
                    {/* {props.info.serviceTypes.length === 2 &&
                        ", Night Tube"
                    } */}
                </p>
                {props.info.lineStatuses[0].reason ?
                    <p className="statusDetails">{trimStatus(props.info.lineStatuses[0].reason)}</p>
                        : <p className="statusDetails" id={props.info.lineStatuses[0].statusSeverity}>{props.info.lineStatuses[0].statusSeverityDescription} </p>
                }
            </div>
            
        </div>
    )
}

export default Line