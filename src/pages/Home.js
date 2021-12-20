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
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) ||  [])
   

    const pageNumbers = []

    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber)
      
    }

    const addFav = (id, author, title, url) =>{
        const favFiltered = favorites.filter(fav => fav.id !== id)
        console.log(favFiltered)
       
        setFavorites([...favFiltered, {id, author, title, url}])
    }

    const removeFav = (id) => {
      console.log(id)
      const eliminateFav = favorites.filter(item => item.id !== id)
      console.log(eliminateFav)
      setFavorites(eliminateFav)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))

  console.log(favorites)


    useEffect(() => {
        setLoading(true)
        axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${selection}&page=${currentPage}`)
          .then(response => {
            const res = response.data
            setPosts(res.hits)
            setLoading(false)
          })
      
    }, [selection, currentPage])

    const postsFiltered = posts.filter(element => 
      element.author && element.story_url && element.story_title
    )
  
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = postsFiltered.slice(indexOfFirstPost, indexOfLastPost)

    for(let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++){
      pageNumbers.push(i)
  }

   
  
    return (
      <div className="App">

        <div className="filters">
            <Filter handleSelection={selection =>  setSelection(selection)}/>
        </div>

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
                              title={item.story_title}
                              url={item.story_url}
                              id={item.objectID}
                              date={item.created_at}
                              addFav={addFav}
                              removeFav={removeFav}
                            />
                          )           
                        })
                      }
                    </div>
        }

        

        <div className="pagination">
          
          <Pagination 
            postsPerPage={postsPerPage} 
            totalPosts={postsFiltered.length} 
            paginate={paginate}
          
            currentPage={currentPage}
           />
        </div>
  
      </div>
    )
}

