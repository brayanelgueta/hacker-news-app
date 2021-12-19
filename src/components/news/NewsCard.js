import React from 'react'
import './NewsCard.css'

export default function NewsCard(props) {




    return (
        
            <div className="card-content">
                <a href={props.url} className="card-body">
                    <div className="timestamp">
                        <img src={process.env.PUBLIC_URL + "./img/iconmonstr-time-2.png"} alt="time-icon"></img>
                        <p className="m-0">3 hours ago by {props.author}</p>
                    </div>
                    <div className="description">
                        <p className="m-0">{props.title}</p>
                    </div>
                </a>
                <div className="fav-container">
                    <img 
                        src={process.env.PUBLIC_URL + "./img/iconmonstr-favorite-3.png"} 
                        alt="fav-icon" 
                        id={props.id}
                    ></img>
                </div>
            </div>
       
    )
}


