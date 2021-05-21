import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import SearchResult from './search-result'
import Modal from "./modal"
import SearchDetails from './search-details'
import Scroll from '../assets/scroll.gif'

const SearchContainer = ({ searchHits, fetchMoreData, hasMore }) => {

    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState(null)

    const openModal = (id) => {
        setShow(true)
        setSelected(id)
    }

    return <div className="search-container"> 
            <Modal show={show} onClose={() => setShow(false)} title={"Detail"} >
                <SearchDetails id={selected}/>
            </Modal>
            {searchHits && searchHits.length > 0 ? <div>
                    <InfiniteScroll
                        dataLength={searchHits.length}
                        next={fetchMoreData}
                        hasMore={!!hasMore}
                        loader={<h4>Loading...</h4>}
                        >
                        {searchHits && searchHits.map((searchHit, i) => <div key={i} style={{margin: "1rem"}}>
                                <SearchResult searchHit={searchHit} fetchDetail={openModal} />
                        </div>)}
                    </InfiniteScroll>
                    <img style={{position: "fixed", bottom: "5rem", right: "8rem", width: '50px'}} alt="img" src={Scroll} />
                    </div>
                :
                <div className="search-container" style={{marginTop: "4rem", textAlign: "center"}}>   
                    No result founds
                </div>
            }
            
        </div>
}

export default SearchContainer