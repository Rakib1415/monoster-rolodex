import React from 'react';
import './SearchBox.css';

const SearchBox = (props) => {
    return (
        <div>
            <input onChange={props.handleChange} className="search" type="search" placeholder="Search monster"/>
        </div>
    );
};

export default SearchBox;