import React from 'react';

export default function TitleWithBreak(props){
    return (
        <div>
            <h5>{props.title}</h5>
            <hr/>
        </div>
    );
}

