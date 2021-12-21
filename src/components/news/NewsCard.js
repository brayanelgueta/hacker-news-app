import React, {useState, useEffect} from 'react'
import './NewsCard.css'

export default function NewsCard(props) {

    const [isFav, setIsFav] = useState(false)
  
    const [time, setTime] = useState('')

    const timeSince = () => {
        const date = new Date(props.date)
        console.log(date)
        var seconds = Math.floor((new Date() - date) / 1000);
        console.log(seconds)
    
   
        var interval = seconds / 3600;
        if (interval > 1) {
            setTime(Math.floor(interval) + " hours")
        }else{
            setTime( Math.floor(seconds) + " seconds")
        }
       
    }
    

const handleFav = (id, author, title, url, date) => {
    
    props.addFav(id, author, title, url, date)

    if(isFav === false){
       
        setIsFav(true)   
    }else{
        
        setIsFav(false)
        props.removeFav(id, author, title, url)
    }
   
}

useEffect(() => {
    
    timeSince()
}, [])

    return (
        
            <div className="card-content">
                <a href={props.url} className="card-body">
                    <div className="timestamp">
                        <img src={process.env.PUBLIC_URL + "./img/iconmonstr-time-2.png"} alt="time-icon"></img>
                        <p className="m-0">{time} ago by {props.author}</p>
                    </div>
                    <div className="description">
                        <p className="m-0">{props.title}</p>
                    </div>
                </a>
                {
                    isFav === true ?
                    <div className="fav-container" onClick={() => handleFav(props.id, props.author, props.title, props.url, props.date)}>
                        <img 
                            src={process.env.PUBLIC_URL + `./img/iconmonstr-favorite-3.png`} 
                            alt="fav-icon" 
                            id={props.id}
                        

                        ></img>
                    </div>

                    :
                    <div className="fav-container" onClick={() => handleFav(props.id, props.author, props.title, props.url, props.date)}>
                        <img 
                            src={process.env.PUBLIC_URL + `./img/iconmonstr-favorite-2.png`} 
                            alt="fav-icon" 
                            id={props.id}
                        

                        ></img>
                    </div>

                }
               
            </div>
       
    )
}


