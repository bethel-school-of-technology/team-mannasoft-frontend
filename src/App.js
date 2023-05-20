import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login'
import EditProfile from './components/EditProfile';
import UploadFiles from './components/UploadFiles';
import ViewAllFiles from './components/ViewAllFiles';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import DisplayProfile from './components/DisplayProfile';
import { UserProvider } from './contexts/UserProvider';

function App() {
  return (
    <div className="">
      <UserProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/displayprofile" element={<DisplayProfile />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/uploadfiles" element={<UploadFiles />} />
            <Route path="/viewallfiles" element={<ViewAllFiles />} />
          </Routes>
          <Footer />
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
