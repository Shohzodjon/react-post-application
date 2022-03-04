import React from "react";

// style
import './messages.css';

const Message =()=>{
    return(
        < div className="border">
            <div className="message-search">
                 <h2>Messages</h2>
                 <div>
                     <label htmlFor="search-members">
                     <i className="bi bi-search"></i>
                          <input type="search" placeholder="Search memebers"/>   
                     </label>    
                 </div> 

              <div className="d-flex user-container">
                 <div>
                 <i className="bi bi-person-circle"></i>      
                </div>
                <div>
                  <h3>test3</h3>
                  <p>Salom</p>    
                </div> 
              </div>
             </div>
             <div className="user-leftSide">
               <div className="d-flex flex-column justify-content-between h-100">
                 <div className="r">
                 <i className="bi bi-person-circle"></i>
                 <h3>test3</h3>     
                </div>
                <div className="send-message">
                <input type="text" placeholder="Write message ... "/> 
                <button><i className="bi bi-plus-circle-fill"></i></button>
                </div>
                   
               </div>      
           </div> 
        </div>
    )
}

export default Message;