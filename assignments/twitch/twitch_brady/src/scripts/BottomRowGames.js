import React from 'react';

export default function TopRowGames(props) {
    return (
        <div className="games">
            <div className="gameFormat">
                <img src={'./pics/Game1Row2.png'}/>
                <p className="nameOfGames">Grand Theft Auto V</p>
            </div>
            <div className="gameFormat">
                <img src={'./pics/Game2Row2.png'}/>
                <p className="nameOfGames">Fortnite</p>
            </div>
            <div className="gameFormat">
                <img src={'./pics/Game3Row2.png'}/>
                <p className="nameOfGames">World of WarCraft</p>
            </div>
            <div className="gameFormat">
                <img src={'./pics/Game4Row2.png'}/>
                <p className="nameOfGames">Minecraft</p>
            </div>
        </div>
    );
};