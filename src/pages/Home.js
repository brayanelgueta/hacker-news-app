import React, {useEffect, useState} from 'react'
import './pagesCss/Home.css';
import NewsCard from '../components/news/NewsCard';
import Filter from '../components/filters/Filter';
import axios from 'axios';




export default function Home() {

    const [posts, setPosts] = useState([])
    const [selection, setSelection] = useState('')
 
  
    useEffect(() => {
        
        axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${selection}&page=0`)
          .then(response => {
            const res = response.data
            setPosts(res.hits)
          })
    }, [selection])
console.log(posts)
    return (
      <div className="App">

        <div className="filters">
            <Filter handleSelection={selection =>  setSelection(selection)}/>
        </div>
        <div className="news-card-container">
          {
            posts.map((item, index) => {
              return (
                <NewsCard 
                  key={index}
                  author={item.author}
                  title={item.story_title}
                  url={item.story_url}
                  id={item.objectID}
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

