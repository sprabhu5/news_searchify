import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Comments from './comments'
import Skeleton from 'react-loading-skeleton';

const SearchDetails = ({ id }) => {

    const [detail, setDetail] = useState({})
    
    useEffect(() => {
        console.log(id + ' - mounting')
        axios.get('http://hn.algolia.com/api/v1/items/'+id)
            .then((res) => {
                setDetail(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [id])

    return <div>
        <div style={{paddingBottom: "2rem"}}>
            <span>Title : </span><span style={{fontWeight:"bold"}}>{detail.title || <Skeleton height={50} />}</span>
        </div>
        <div className="search-card-footer border-bottom" style={{paddingBottom: '1rem'}}>
                <div>
                    <div style={{color: 'gray'}}>Author</div>
                    <div> {detail.author || <Skeleton />}</div>
                </div>
                <div style={{marginLeft: "2rem"}}>
                    <div style={{color: 'gray'}}>Type</div>
                    <div> {detail.type || <Skeleton />}</div>
                </div>
        </div>
        <Comments comments={detail.children} root={true} />
    </div>
}

export default SearchDetails