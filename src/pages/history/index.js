/*
History Tab
Displays the search history
*/


import React, { useContext } from "react"
import { StoreContext } from "../../store/StoreProvider"
import "../../styles/history.css"
import moment from "moment"
import Ripples from 'react-ripples'
import Cards from "../../components/card"


const History = () => {
    const { historyState } = useContext(StoreContext)

    const[historyValues ] = historyState

    return (
        <Cards classes="histroy-container">
            <div className="history-title histoyr-card" style={{width: "100%"}}>
                Recent search history
            </div>
            <div className="histoyr-card">
                {historyValues && historyValues.length > 0 ? 
                    historyValues.map((history, i) => 
                        <Ripples key={i} className="block cursor-pointer">
                            <div className="history-card-items" key={i}>
                                <div style={{display: "flex", justifyContent: "space-between", marginBottom: "4px"}}>
                                    <div>
                                        <span className="history-type">GET</span>
                                        <span style={{marginLeft: "1rem"}}>{history.api}</span>
                                    </div>
                                    <div style={{fontSize: "14px", color: "gray"}}>{moment(history.date).format('DD/MM/YYYY, hh:mm:ss')}</div>
                                </div>
                                <div style={{marginLeft: "3rem", display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <span style={{fontSize: "14px"}}>Search :</span> 
                                        <span>{history.payload.query}</span>
                                    </div>
                                    <div>
                                        <span style={{fontSize: "14px"}}>Tags :</span> 
                                        <span> [{history.payload.tags}]</span>
                                    </div>
                                </div>
                            </div>
                        </Ripples>
                    )
                    :
                    <div>
                        No history found
                    </div>
                }
            </div>
        </Cards>
    )
}

export default History