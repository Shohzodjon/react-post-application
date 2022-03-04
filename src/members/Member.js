import React from "react";



// style
import './member.css';
const members = ['Farrux', 'Jasur', 'Toyir', 'Salohiddin', 'Doston']

const Members = () => {
    return (
        <section className="member-section">
            
            <div className="member-section_leftSide">
                {members.map((item, i) => {
                    return (
                        <div className="card member-card" key={i}>
                            {item[0] === 'D' ? <div className="card-circle" style={{ background: 'rgb(10, 130, 199)' }}><p>{item[0]}</p></div> : <div className="card-circle"><p>{item[0]}</p></div>}

                            <p className="member-name">
                                {item}
                            </p>
                            <button type="button" className="btn btn-outline-dark card-btn ">Follow</button>
                        </div>
                    )
                   })

                }
            </div>
        </section>
    )
}
export default Members