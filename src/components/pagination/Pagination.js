import React, {useState} from 'react'
import './Pagination.css'
import ReactPaginate from 'react-paginate'
export default function Pagination({ postsPerPage, totalPosts, paginate, Previous, Next, currentPage}) {

    const [pageNumber,setPageNumber] = useState(1)
    const pageNumbers = Math.ceil(totalPosts / postsPerPage)
    const selectedPage = ({selected}) => {
        setPageNumber(selected+1)
        paginate(selected+1)
    }
 
    
    
 

    return (
            
            <ul className="item-list">

                 <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    pageCount={pageNumbers}
                    onPageChange={selectedPage}
                    containerClassName='item-list'
                    pageLinkClassName='item'
                    previousLinkClassName='item'
                    nextLinkClassName='item'
                    disabledClassName='paginationDisabled'
               
                    activeLinkClassName='active'
                 >

                 </ReactPaginate>
            </ul>

            
      
    )
}
