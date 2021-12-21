/* eslint-disable react/jsx-no-undef */
import React, {  useState } from 'react'
import NewsCard from '../components/news/NewsCard'
import Pagination from '../components/pagination/Pagination';
import './pagesCss/Home.css'

export default function Faves() {
    const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('favorites')) || [])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(8)
    

    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber)
      
    }
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
   
    return (
        <div className="App">
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
                        currentPosts.map((item, index) => {
                          return (
                            <NewsCard 
                              key={index}
                              author={item.author}
                              title={item.title}
                              url={item.url}
                              id={item.id}
                              date={item.date}
                            
                            />
                          )           
                        })
                      }
                    </div>
          }
        

        <div className="pagination">
          
          <Pagination 
            postsPerPage={postsPerPage} 
            totalPosts={posts.length} 
            paginate={paginate}
          
            currentPage={currentPage}
           />
        </div>
  
       
      </div>
    )
}


