import React from 'react';


var channels = [Gaming101, TheCodingChannel, LazyProgrammer, Nintendo];
export default function DropDownList(props) {
    return (
        <div className="dropdown">
            <button className="dropbtn">Followed Channels</button>
            <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    );
};
