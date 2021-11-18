import React from 'react'
import './Card.css';
import { Constants } from '../constants';
export default function Card(props) {
    return (
        <>
            <div className="card">
                <img src={!props.image ? Constants.noImage[props.gender] : "http://image.tmdb.org/t/p/original/" + props.image} alt="" className="cardImage" />
                <div className="cardDetails">
                    <h2 className="cardDetails name"> {props.name} </h2>
                    <div style={{ flexDirection: "row", display: "flex", }}>
                        <p className="cardDetails date">{props.date}</p>
                        <div className="cardDetails score">{props.score}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
