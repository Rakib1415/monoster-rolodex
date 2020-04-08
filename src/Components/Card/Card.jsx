import React from 'react';
import './Card.css';

const Card = (props) => {
    const { name, email, id } = props.monster;
    return (
        <div className="card-container">
            <img src={`https://robohash.org/OOC.png${id}?set=set2&size=180x180`} alt="monster"/>
            <h2>{name}</h2>
            <h3>{email}</h3>
        </div>
    );
};

export default Card;