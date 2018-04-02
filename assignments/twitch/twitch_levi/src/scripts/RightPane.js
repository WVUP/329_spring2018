import React from 'react';

export default function RightPane(props){
    return (
        
            <div className="rightpane">
                <div className="arrowContainer"> 
                    <div className='arrowBox'>
                        <span className="glyphicon glyphicon-chevron-right"></span>
                    </div>
                    <div className='arrowBox'>
                        <span className="glyphicon glyphicon-chevron-right"></span>
                    </div>
                    <div className='arrowBox'>
                        <span className="glyphicon glyphicon-chevron-right"></span>
                    </div>
                </div>
                {/* Add in Additional right pane here */}
            </div>
    );
}