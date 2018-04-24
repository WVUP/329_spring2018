import React from 'react';

export default function TopRowGames(props) {
    return (
        <div className="games">
            <div className="gameFormat">
                <img src={'./pics/Game1Row1.png'}/>
                <p className="nameOfGames">Call of Duty</p>
            </div>
            <div className="gameFormat">
                <img src={'./pics/Game2Row1.png'}/>
                <p className="nameOfGames">League of Legends</p>
            </div>
            <div className="gameFormat">
                <img src={'./pics/Game3Row1.png'}/>
                <p className="nameOfGames">Overwatch</p>
            </div>
            <div className="gameFormat">
                <img src={'./pics/Game4Row1.png'}/>
                <p className="nameOfGames">PlayerUnknown Battlegrounds</p>
            </div>
        </div>
    );
};