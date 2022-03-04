
import React from "react";

// style
import './post.css';

const RepeatComponent = () => {
    return (
        <div className="d-flex align-items-center justify-content-between post_section2">
            <div className="d-flex align-items-center">
                <i className="bi bi-person-circle"></i>
                <div>
                    <h2>Xorozov Shohzodjon</h2>
                    <p>28 days ago JavaScript</p>
                </div>
            </div>
            <div>
                <i className="bi bi-three-dots"></i>
            </div>
        </div>
    )
}
export default RepeatComponent;