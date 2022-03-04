import React, { useState } from "react";

import './course.css';

const Courses = () => {
    const [isTrue, setTrue] = useState(false);
    //const [modal, setModal] = useState("modal-box-2")
    const showModal = () => {
        setTrue(true)
    }

    const closeModal =(e)=>{
        e.preventDefault();
         setTrue(false);
    }
    
    return (
        <div className="course-box">
            <ul>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>HTML</li>
                <li><button onClick={showModal} className="button"><i className="bi bi-plus-circle-fill"></i> Create Channel </button></li>
            </ul>

       { isTrue?<div className="modal-box" style={{display:"block"}}>
                <form className="modal-wrapp">
                    <h3>Create channel </h3>
                        <i className="bi bi-x close_modal_btn" onClick={closeModal}></i>
                    <hr />
                    <div className="box_one">
                        <h3>Name</h3>
                        <input type="text" placeholder="Choose a name for your channel name " className="modal_channel-name form-control" />
                    </div>
                    <div className="box_one">
                        <h3>Description</h3>
                        <textarea placeholder="Description of chennel (optional)" className="modal_channel-description form-control" rows="4" cols="7"></textarea>
                    </div>
                    <div className="modal_privacy-box">
                        <div className="privacy-left">
                            <h3>Privacy</h3>
                            <p>Only authenticated users see the channel </p>
                        </div>
                        <div className="privacy-right">
                            Toggle
                        </div>
                    </div>
                    <hr />
                    <div className="modal_button-group">
                        <button className="modal_cancel modal_btn" onClick={closeModal}>Cancel</button>
                        <button className="modal_create modal_btn" onClick={closeModal}>Create</button>
                    </div>

                </form>
            </div>:null
       }



            {
                isTrue ? <div className="overlay" style={{ display: 'block' }}></div> : <div className="overlay" style={{ display: 'none' }}></div>
            }

        </div>
    )
}

export default Courses;