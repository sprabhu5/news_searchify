/*
Global state manager
*/

import React, { createContext, useState } from 'react'


const StoreContext =  createContext();

const StoreProvider = ({ children }) => {
    const [query, setQuery] = useState(null)
    const [history, setHistory] = useState([])
    
    return (
        <StoreContext.Provider value={{ queryState: [query, setQuery], historyState: [history, setHistory]}}>
            {children}
        </StoreContext.Provider>
    )
}


export { StoreContext, StoreProvider }

