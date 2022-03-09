import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import LeftComponent from './components/leftSideBar/LeftComponent';
import Navbar from './components/navbar/Navbar';
import Members from './members/Member';
import Messages from './messages/Message';
import Notification from './notification/Notification';

//style
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <section className='root-section_one'>
        <Navbar />
        <section className='root-section'>
          <div className='app_left-section'>
            <LeftComponent />
          </div>

          <section className='app_right-section'>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/notife' element={<Notification />} />
              <Route path='/members' element={<Members />} />
              <Route path='/message' element={<Messages />} />
            </Routes>
          </section>
        </section>
      </section>
    </BrowserRouter>
  );
}

export default App;
