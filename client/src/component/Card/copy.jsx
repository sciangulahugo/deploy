import React from 'react';
import './Card.css';
export default function Card({ name, temperaments, weight, image }) {
    return (
        <div
            className="card"
            style={{
                background: `url("${image}")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            {/* <div className="imgContainer">
                <img className="breedImg" src={image} alt="" />
            </div> */}
            <h3 className="cardInfo">{name}</h3>
            <h5 className="cardInfo">
                {temperaments.join(', ').slice(0, 25)}...
            </h5>
            <h4 className="cardInfo">Peso: {weight.join(' - ')}</h4>
        </div>
    );
}
