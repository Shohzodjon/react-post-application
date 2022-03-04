import React from 'react';
import { Link } from 'react-router-dom';


// style
import './page.css';

const Pages =()=>{
    return(
        <ul className='page-links'>
            <li><Link to="/"><i className="bi bi-house-door-fill"></i> Home</Link></li>
            <li><Link to="/members"><i className="bi bi-people-fill"></i> Members</Link></li>
            <li><Link to="/notife"><i className="bi bi-bell-fill"></i>Notification</Link></li>
            <li><Link to="/message"><i className="bi bi-chat-left-dots-fill"></i> Messages</Link></li>
        </ul>
    )
}
export default Pages;