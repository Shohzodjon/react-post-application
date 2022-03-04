import React from "react";
import RepeatComponent from "../userPost/RepeatComponent";


// style
import './bottompost.css';

const BottomPost =()=>{
    return(
        <div className="bottom-post">
       <RepeatComponent/>
        <h3>JavaScript is love of life</h3>

        <div className="bottom_post-img">
    <img src="./images/js-picture.jpg" alt="Post img"/>
        </div>
        </div>
    )
}

export default BottomPost;