import React, {useEffect, useState} from 'react'
import './pagesCss/Home.css';
import NewsCard from '../components/news/NewsCard';
import axios from 'axios';




export default function Home() {

    const [posts, setPosts] = useState([])


    useEffect(() => {
        axios.get('https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0')
          .then(response => {
            const res = response.data
            setPosts(res.hits)
          })
    }, [])
console.log(posts)
    return (
        <div className="App">
      
        
      <div className="news-card-container">
        {
          posts.map((item, index) => {
            return (
              <NewsCard 
                author={item.author}
                title={item.story_title}
              />
            )
            
          })


        }
        
       
      </div>
      <div className="pagination">
        paginacion
      </div>
  
    </div>
    )
}

