import React from "react";
import NewMember from "./newMember/newmember";
import OnlineMember from "./onlineMember/onlinemember";

import './rightside.css';


const RightSide =()=>{
    return(
        <section className="main-rigthSide">
            <NewMember/>
            <OnlineMember/>

        </section>
    )
}
export default RightSide;