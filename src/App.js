import React, { useState } from 'react';
import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Mainpage from './pages/Mainpage'
import Calendar from './pages/Calendar'
import Gallery from './pages/Gallery'
import Registration from './pages/Registration';
import Sider from './components/Sider'
import { LoginContext } from './components/loginContext';
import LoginModal from './components/LoginModal'

const App = () => {

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const showLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeModal = () => {
    setLoginModalOpen(false);
  }

  const [isLogedIn, setLogedIn] = useState(!!localStorage.getItem('token'))
  
  const logout = () => {
    setLogedIn(false)
    localStorage.removeItem('token')
    localStorage.removeItem('username')
  }

  return (
    <LoginContext.Provider value={isLogedIn}>  
      <Layout hasSider>
        <Sider showLoginModal={showLoginModal} logout={logout}/>
          <Layout style={{ marginInlineStart: 200, }}>
            <Routes>
              <Route path="/" element={<Mainpage/>}/>
              <Route path="/calendar" element={<Calendar/>}/>
              <Route path="/gallery" element={<Gallery/>}/>
              <Route path="/signup" element={<Registration setLogedIn={setLogedIn}/>}/>
            </Routes>
            <Footer/>
          </Layout>
      </Layout>
      <LoginModal setLogedIn={setLogedIn} isModalOpen={isLoginModalOpen} closeModal={closeModal}/>
    </LoginContext.Provider>
  );
};
export default App;