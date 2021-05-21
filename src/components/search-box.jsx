/*
Search box component
*/
import React, { useState } from "react"
import Lens from "../assets/lens.svg"
import Delete from "../assets/delete.svg"

const SearchBox = ({ updateQuery }) => {

    const [query, setQuery] = useState('')

    const handleKeyPress = (event) => {
        console.log(1)
        if(query.trim() === '') return
        
        if(event.key === 'Enter'){
            updateQuery(query)
          }
    }
    return (
        <div>
            <div className="search-header">
                <div className="search-box">
                    <div className="search-box-left">
                        <img src={Lens} width="20" alt="img"/>
                        <input onKeyPress={handleKeyPress} onChange={(e) => setQuery(e.target.value)} value={query} className="search-input-box" placeholder="Search.."/>
                    </div>
                    <img src={Delete} onClick={(e) => setQuery('')}  width="18" className="cursor-pointer" style={{paddingRight: "20px"}} alt="img"/>
                </div>
            </div>
        </div>
    )
}

export default SearchBox