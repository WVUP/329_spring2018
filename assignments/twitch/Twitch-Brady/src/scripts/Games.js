import React from 'react';

//export default class Games extends Component{
  //  constructor(props){
    //    super(props);
//
  //      this.state = {
    //        Games: [
      //          {
        //            title: "Game 1"
          //      },
            //    {
              //      title: "Game 2"
                //},
                //{
                  //  title: "Game 3"
                //}
            //]
        //}
    //};
//}




export default function Banner(props) {
    return (
        <div>
            <ul>
                <li>Game 1</li>
                <li>Game 2</li>
                <li>Game 3</li>
                <li>Game 4</li>
                <li>Game 5</li>
            </ul>
        </div>
    );
};