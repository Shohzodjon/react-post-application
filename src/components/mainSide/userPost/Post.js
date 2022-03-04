import React from "react";
import Comentary from "../comentary/Comentary";


// style

import RepeatComponent from "./RepeatComponent";

const Post = () => {
    return (
        <div className="post_section">
            
            <RepeatComponent/>
            <h3>Test post</h3>
            <hr />
       <Comentary/>
        </div>
    )
}

export default Post;
