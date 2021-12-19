import React from 'react'

export default function Filter(props) {



    const handleChangeValue = (e) => {
      const {value} = e.target
     
      props.handleSelection(value)
    }
    return (
        <div className="filter">
            <form>
                <select onChange={handleChangeValue}>
                    <option title="reactjs">reactjs</option>
                    <option title="angular">angular</option>
                    <option title="vuejs">vuejs</option>
                </select>
            </form>
        </div>
    )
}


