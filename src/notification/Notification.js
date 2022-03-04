import React from "react";

//style
import './notification.css';
const users = [
    { name: 'Komil', condition: 'messaged you' },
    { name: 'Dilshod', condition: 'started following you' },
    { name: 'Toyir', condition: 'started following you' },
    { name: 'Farrux', condition: 'messaged you' },
    { name: 'Otabek', condition: 'started following  you' },
    { name: 'Farxod', condition: 'messaged you' },
];
const Notification = () => {
    return (
        <>

            <section className="notification-section">
              
                <div className="left__side" >
                    {users.map((item, i) => {
                        return (
                            <div className="d-flex align-items-center my-2 notife-flex " key={i}>
                                <div>
                                    <i className="bi bi-person-circle"></i>
                                </div>
                                <h2 className="user-name1">{item.name}
                                    {
                                        item.condition === 'messaged you' ? <span className="user-condition" style={{ color: "blue" }}>{item.condition}</span> : <span className="user-condition">{item.condition}</span>
                                    }


                                </h2>
                            </div>
                        )
                    })
                    }
                </div>
            </section>
        </>
    )
}
export default Notification;