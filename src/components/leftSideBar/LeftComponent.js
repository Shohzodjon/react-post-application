import React from "react";
import Courses from "./courses/course";
import Pages from "./pages/Page";
import User from "./user/user";
import './style.css';

const LeftComponent =()=>{
    return(
        <section className="left-section">
          <User/>
          <Pages/>
          <hr/>
          <Courses/>
        </section>
    )
}
export default LeftComponent;