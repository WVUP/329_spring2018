import React from 'react';
import TwitchLogo from './TwitchLogo';
import TopRowGames from './TopRowGames';
import BottomRowGames from './BottomRowGames';

export default function MainPanel(props){
    return (
        <div>
        <div className="mainPanel">
            <TopRowGames/>
            <BottomRowGames/>
        </div>
        </div>
    );
};