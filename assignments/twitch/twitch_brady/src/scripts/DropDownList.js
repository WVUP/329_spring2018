import React from 'react';


export default function DropDownList(props) {
    return (
        <div className="dropdown">
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

//class DropDownList extends React.Component {
   // constructor() {
   //     super();
   // }
//
   // render () {
   //     let channels = this.props.state.channels;
     //   let items = channels.map((DropDownList) =>
          //      <option key={DropDownList.name}>{DropDownList.name}</option>
         //   );

    //    return (
           // <div className="dropdown">
           // <button className="dropbtn">Followed Channels</button>
         //   <div className="dropdown-content">
         //   {channels}
        //    </div>
      //  </div>
      //  )
   // }
//}

//export default Channels;



 //var channels = [{"Gaming101"}, "TheCodingChannel", "LazyProgrammer", "Nintendo"];

 var channels = [
     {
        "Channel Name":"Gaming101",
        "Online" : "Online"
     },
     {
        "Channel Name":"TheCodingChannel",
        "Online" : "Offline"
     },
     {
        "Channel Name":"LazyProgrammer",
        "Online" : "Online"
     },
     {
        "Channel Name":"Nintendo",
        "Online" : "Offline"
     },
 ]


//var select = document.getElementById("drop-down")
//for (var index = 0; index < channels.length; index++) {
  //  var names = document.createElement("NAMES"), txt = document.createTextNode(channels[i]);
    //names.appendChild(txt);
   // select.insertBefore(names, select.lastChild);
//}