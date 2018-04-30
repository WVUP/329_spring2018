import React from 'react';

export default function Search(props) {
    return (
        <div className="row">
            <input className="searchBar" type="text" placeholder="Search..."></input>
            <i className="fa fa-search fa-2x searchIcon"></i>
        </div>
    );
};