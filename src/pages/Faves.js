/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react'
import NewsCard from '../components/news/NewsCard'

export default function Faves() {
    const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('favorites')) || [])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
   
    }, [])
    console.log(posts)

    // const removeFav = (id) => {
    //   console.log(id)
    //   const eliminateFav = favorites.filter(item => item.id !== id)
    //   console.log(eliminateFav)
      
    // }
    return (
        <div className="">
          {
            loading === true ? 
              <div className="loading-page">
                <div className="pulse-effect">
                  <div></div>
                  <div></div>
                </div>
              </div>
            :
            <div className="news-card-container">
                      {
                        posts.map((item, index) => {
                          return (
                            <NewsCard 
                              key={index}
                              author={item.author}
                              title={item.title}
                              url={item.url}
                              id={item.id}
                              
                            
                            />
                          )           
                        })
                      }
                    </div>
          }
        
       
      </div>
    )
}


