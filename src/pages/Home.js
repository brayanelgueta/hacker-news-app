import React, {useEffect, useState} from 'react'
import './pagesCss/Home.css';
import NewsCard from '../components/news/NewsCard';
import axios from 'axios';




export default function Home() {

  

    return (
        <div className="App">
      
        
      <div className="news-card-container">

        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <div className="pagination">
        paginacion
      </div>
  
    </div>
    )
}

