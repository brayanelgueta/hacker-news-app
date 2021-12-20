import React, {useEffect, useState} from 'react'
import './pagesCss/Home.css';
import NewsCard from '../components/news/NewsCard';
import Filter from '../components/filters/Filter';
import axios from 'axios';
import Pagination from '../components/pagination/Pagination';




export default function Home() {

    const [posts, setPosts] = useState([])
    const [selection, setSelection] = useState('')
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(8)
 
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const pageNumbers = []

    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber)
      
    }

 

    const Previous = () => {
      const prevPage = currentPage - 1
      setCurrentPage(prevPage)
    } 

    const Next = () => {
      const nextPage = currentPage + 1
      setCurrentPage(nextPage)
    } 

    for(let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++){
      pageNumbers.push(i)
  }

    
  
    useEffect(() => {
        setLoading(true)
        axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${selection}&page=${currentPage}`)
          .then(response => {
            const res = response.data
            setPosts(res.hits)
            setLoading(false)
          })
    }, [selection, currentPage])
    console.log(posts)
    return (
      <div className="App">

        <div className="filters">
            <Filter handleSelection={selection =>  setSelection(selection)}/>
        </div>

        {
          loading === true ?
          
          <div class="pulse-effect">
            <div></div>
            <div></div>
          </div>
          :
            <div className="news-card-container">
                      {
                        currentPosts.map((item, index) => {
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
        }

        

        <div className="pagination">
          
          <Pagination 
            postsPerPage={postsPerPage} 
            totalPosts={posts.length} 
            paginate={paginate}
            Previous={Previous}
            Next={Next}
            currentPage={currentPage}
           />
        </div>
  
      </div>
    )
}

