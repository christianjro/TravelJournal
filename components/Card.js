import React from "react"

export default function Card(props) {
    console.log(props)
    return(
        <div className="card">
            <img src={`../images/${props.img}`} className="card--img"/>
            <div className="info--stack">
                <div className="location">
                    <img src="../images/placeholder.png" />
                    <h2>{props.location}</h2>
                    <a href={props.googleMapsUrl}> View on Google Maps </a>
                </div>
                <h1 className="stack--title">{props.title}</h1>
                <h2 className="stack--dates">{props.startDate} - {props.endDate}</h2>
                <p className="stack--description">{props.description} </p>
            </div>
        </div>
    )
}