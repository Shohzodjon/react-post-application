import React from "react";


//style
import './comentary.css';

const Comentary = () => {
    return (
        <div className="comentary-box d-flex justify-content-around">
            <button><i className="bi bi-hand-thumbs-up-fill"></i>Like</button>
            <button><i className="bi bi-chat-fill"></i>Comment</button>
            <button><i className="bi bi-reply-fill"></i> Share</button>
        </div>
    )
}

export default Comentary;