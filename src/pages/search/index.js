/*
This component holds the search box and search container
*/


import React, { useContext, useEffect, useState } from "react"
import "../../styles/search.css"
import SearchBox from "../../components/search-box"
import axios from "axios"
import { StoreContext } from "../../store/StoreProvider"
import SearchContainer from "../../components/search-container"
import Loader from "react-loader-spinner";


const Search = () => {

    const { queryState, historyState } = useContext(StoreContext)

    const [queryValue, setQueryValue] = queryState

    const[historyValues, setHistoryValues] = historyState

    const [searchHits, setSearchHits] = useState([])

    const [page, setPage] = useState({})

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        return () => setQueryValue(null)
    }, [setQueryValue])
    
    
    useEffect(() => {
        console.log(3)
        if(queryValue && queryValue.trim() !== '' ) {
            setLoading(true)
            fetchHackerNews(queryValue, false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryValue, setQueryValue])

    const updateQuery = (query) => {
        console.log(2)
        setQueryValue(query)
        setPage({})
    }

    const fetchMoreData = () => {
        fetchHackerNews(queryValue, true)
    }

    const fetchHackerNews = (query, scroll) => {
        console.log(4)
        const payload = {
            query: query,
            page: page.next ? page.next : 0,
            tags: 'story'
        }
        const API_URL = 'http://hn.algolia.com/api/v1/search'
        axios.get(API_URL, {
            params: payload
        }).then(res => {
            // To handle next links to the viewport
            if(scroll) {
                setSearchHits([
                    ...searchHits,
                    ...res.data.hits
                ])
                // To handle new search
            } else {
                setSearchHits(res.data.hits)
                // pushing the searched value to history
                setHistoryValues([
                    { date: new Date(), api: API_URL, payload: payload },
                    ...historyValues,
                ])
            }
            const next = res.data.page + 1
            const hasMore =  res.data.nbPages > next
            setPage({ next: next, hasMore: hasMore, hits: res.data.nbHits})
            setLoading(false)

        }).catch((err) => {
            console.log(err)
            setLoading(false)
        })
    }

    return (    
        <div>
            {loading ?
            <div className="loader">
                <Loader
                    type="Bars"
                    color="#ff742a"
                    height={70}
                    width={70}
                />
            </div> 
            :
            <div/>
            }
            <SearchBox updateQuery={updateQuery} hits={page.hits}/>
            {
            queryValue && queryValue.trim() !== '' ?
                <SearchContainer searchHits={searchHits} fetchMoreData={fetchMoreData} hasMore={page.hasMore}/>
                :
                <div className="search-container" style={{textAlign: "center", marginTop: "5rem", color: "#6f6f6f"}}>
                    Give your query above and hit enter !
                </div>
            }
        
        </div>
    )
}

export default Search