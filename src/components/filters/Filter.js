import React from 'react'
import './Filters.css'


export default function Filter(props) {

  

    const handleChangeValue = (e) => {
      let {value} = e.target
        if(value === 'React JS'){
            value = 'reactjs'
            props.handleSelection(value)
        }
        if(value === 'Angular'){
            value = 'angular'
            props.handleSelection(value)
        }
        if(value === 'Vue JS'){
            value = 'vuejs'
            props.handleSelection(value)
        }
      
    }
    return (
        <div className="filter">
          
                <select onChange={handleChangeValue}>
                    <option selected>Select your news</option>
                    <option id="angular"> Angular</option>
                    <option id="reactjs">React JS</option>
                    <option id="vuejs">Vue JS</option>
                </select>
    
        </div>
    )
}


