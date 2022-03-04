import React from "react";
import Post from "./userPost/Post";
import BottomPost from "./bottomPost/bottomPost";

import './main.css';

const MainSide = () => {
    return (
        <section className="main-section">
            <div className="post_place">
                <i className="bi bi-person-circle"></i>
                <input type="text" placeholder="What do you want to talk about ? " />
            </div>
            <Post/>
            <BottomPost/>
        </section>
    )
}
export default MainSide;