import React from "react"
import katie from ".././images/katie.png"
import star from ".././images/star.png"

export default function Card(props) {
    return (
        <div className="card" >
            <img className="card--image" src={ props.img } />
            <div className="card--stats">
                <img className="card--star" src={ star } />
                <span className="card--firstspan" ><b>{props.rating}</b></span>
                <span className="card--span" >{props.reviewCount} &#8226;</span>
                <span className="card--span" >{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><b>From {props.price}</b> / person</p>
        </div>
    )
}