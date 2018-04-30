import React from 'react';


export default function DropDownList(props) {
    return (
        <div className="dropdown" id="drop-down">
            <button className="dropbtn">Followed Channels</button>
            <div className="dropdown-content">
                <a href="#">Gaming101</a>
                <a href="#">TheCodingChannel</a>
                <a href="#">LazyProgrammer</a>
                <a href="#">Nintendo</a>
            </div>
        </div>
    );
};

var channels = ["Gaming101", "TheCodingChannel", "LazyProgrammer", "Nintendo"];
//var select = document.getElementById("drop-down")
//for (var index = 0; index < channels.length; index++) {
  //  var names = document.createElement("NAMES"), txt = document.createTextNode(channels[i]);
    //names.appendChild(txt);
   // select.insertBefore(names, select.lastChild);
//}