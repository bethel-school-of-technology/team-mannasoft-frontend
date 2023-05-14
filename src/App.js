import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import EditProfile from './components/EditProfile';
import UploadFiles from './components/UploadFiles';
import ViewAllFiles from './components/ViewAllFiles';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ProfilePage from './components/ProfilePage';
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
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profilepage" element={<ProfilePage />} />
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
