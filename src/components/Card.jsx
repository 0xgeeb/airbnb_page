import React from "react"
import star from ".././images/star.png"

export default function Card(props) {
    console.log(props)
    let badgeText
    if (props.x.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.x.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card" >
            {badgeText && <div className="card--badge" >{badgeText}</div>}
            <img className="card--image" src={ props.x.coverImg } />
            <div className="card--stats">
                <img className="card--star" src={ star } />
                <span className="card--firstspan" ><b>{props.x.stats.rating}</b></span>
                <span className="card--span" >{props.x.stats.reviewCount} &#8226;</span>
                <span className="card--span" >{props.x.location}</span>
            </div>
            <p>{props.x.title}</p>
            <p className="card--price" ><b>From ${props.x.price}</b> / person</p>
        </div>
    )
}