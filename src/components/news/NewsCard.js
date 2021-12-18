import React from 'react'
import './NewsCard.css'

export default function NewsCard() {
    return (
        
            <div className="card-content">
                <div className="card-body">
                    <div className="timestamp">
                        <img src={process.env.PUBLIC_URL + "./img/iconmonstr-time-2.png"} alt="time-icon"></img>
                        <p className="m-0">3 hours ago by author</p>
                    </div>
                    <div className="description">
                        <p className="m-0">Yes, React is taking over front-end development. The question is why.</p>
                    </div>
                </div>
                <div className="fav-container">
                    <img src={process.env.PUBLIC_URL + "./img/iconmonstr-favorite-3.png"} alt="fav-icon"></img>
                </div>
            </div>
       
    )
}


