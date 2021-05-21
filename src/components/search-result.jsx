import React from 'react'
import moment from 'moment'
import Ripple from 'react-ripples'

const SearchResult = ({ searchHit, fetchDetail }) => {
    const openLink = (event, url) => {
        event.stopPropagation();
        window.open(url,'_blank');
    }

    return <div className="search-card">
        <Ripple className="block cursor-pointer" onClick={() => fetchDetail(searchHit.objectID, searchHit.num_comments)}>
            <div className="search-card-title">
                <div><span className="search-card-label">Title : </span>{searchHit.title}</div>
                <div>{moment(searchHit.created_at).format('DD/MM/YYYY, hh:mm:ss')}</div>
            </div>
            <div>
                <span className="search-card-label">Ref : </span> 
                <div onClick={(e) => openLink(e, searchHit.url)} className="search-card-link">{searchHit.url}</div>
            </div>
            <div className="search-card-footer">
                <span>Author : {searchHit.author}</span>
                <span style={{marginLeft: "2rem", textDecoration: "underline"}}> Comments: {searchHit.num_comments}</span> 
            </div>
        </Ripple>
    </div>
}

export default SearchResult