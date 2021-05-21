/*
Modal component
*/

import React from 'react'
import "../styles/modal.css"

const Modal = ({ children, title, show, onClose}) => {
    return <div>
        {show? <div className="modal"> 
                    <div className="modal-content">
                        <div className="flex justify-between border-bottom p-1_5">
                            <div>{title}</div>
                            <div className="cursor-pointer" onClick={onClose}> X </div>
                        </div>
                        <div className="p-1 modal-content-view">
                            {children}        
                        </div>
                    </div>
            </div> : <div/>}
    </div>
}

export default Modal