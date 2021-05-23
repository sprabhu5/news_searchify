//Comments component
import React, { useState } from 'react'
import moment from 'moment'

const Comments = ({ comments, root }) => {
    const elementStyle = { fontSize: "12px", color:"gray", marginTop: '4px', marginLeft: '10px', cursor: 'pointer' }
    
    const [display, setDisplay] = useState(true)

    return <div>
        {comments && comments.map( (comment, i) => <div key={i} className={`${root ? 'border-bottom pt-1' : ''}`}>
                <div >
                    <div className="flex">
                        <div style={{fontWeight: "bold"}}>{comment.author}</div>
                        <div style={elementStyle}>
                            {moment(comment.created_at).format('DD/MM/YYYY, hh:mm:ss')}
                        </div>
                        {/* <div onClick={() => setDisplay(!display)} className style={elementStyle}>
                            {display ? '[-]' : '[+]'}
                        </div> */}
                    </div>
                    <div style={{fontSize: '14px'}} dangerouslySetInnerHTML={{ __html: comment.text }} />
                </div>
                {/* To handle children of childrens espcially for comments*/}
                <div style={{marginLeft: "1rem", display: display ? 'block' : 'none'}}>
                    <Comments  comments={comment.children} />
                </div>
            </div>)}
    </div>
}

export default Comments