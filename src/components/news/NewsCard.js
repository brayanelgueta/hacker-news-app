import React, {useState} from 'react'
import './NewsCard.css'

export default function NewsCard(props) {

    const [isFav, setIsFav] = useState(false)
    const [image, setImage] = useState('iconmonstr-favorite-2.png')


    const fecha = Math.floor((new Date() - props.date) / 1000)
    console.log(fecha)

const handleFav = (id, author, title, url) => {
    
    props.addFav(id, author, title, url)

    if(isFav === false){
        setImage('iconmonstr-favorite-3.png')
        setIsFav(true)
        
        
       
        
    }else{
        setImage('iconmonstr-favorite-2.png')
        setIsFav(false)
        props.removeFav(id, author, title, url)
    }
   
}

    return (
        
            <div className="card-content">
                <a href={props.url} className="card-body">
                    <div className="timestamp">
                        <img src={process.env.PUBLIC_URL + "./img/iconmonstr-time-2.png"} alt="time-icon"></img>
                        <p className="m-0">{props.date}hours ago by {props.author}</p>
                    </div>
                    <div className="description">
                        <p className="m-0">{props.title}</p>
                    </div>
                </a>
                <div className="fav-container" onClick={() => handleFav(props.id, props.author, props.title, props.url)}>
                    <img 
                        src={process.env.PUBLIC_URL + `./img/${image}`} 
                        alt="fav-icon" 
                        id={props.id}
                       

                    ></img>
                </div>
            </div>
       
    )
}


