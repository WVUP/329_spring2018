import React from 'react';
import TwitchLogo from './TwitchLogo';
import ProfileInfo from './ProfileInfo';
import Search from './Search';
import DropDownList from './DropDownList';

export default function LeftPanel(props){
    return (
        <div className="row">
            <div className="leftPanel">
                <div className="grayBox">
                    <TwitchLogo/>
                    <ProfileInfo/>
                </div>
                <DropDownList/>
                <Search/>
            </div>
        </div>
    );
};
