import React from 'react';

export default function ProfileInfo(props) {
    return (
        <div className="container-fluid">
        <input className="searchBar" type="text" placeholder="Search..."></input>
        <img src={'./pics/SearchIcon.png'} className="searchIcon"/>
        </div>
    );
};