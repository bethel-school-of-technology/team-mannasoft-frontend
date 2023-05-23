import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import EditProfile from './components/EditProfile';
import UploadFiles from './components/UploadFiles';
import ViewAllFiles from './components/ViewAllFiles';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import DisplayProfile from './components/DisplayProfile';
import { UserProvider } from './contexts/UserProvider';

function App() {
  return (
    <UserProvider>
      <div className="">
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profilepage" element={<DisplayProfile />} />
              <Route path="/editprofile" element={<EditProfile />} /> {/* Does not go to the right place */}
              <Route path="/uploadfiles" element={<UploadFiles />} />
              <Route path="/viewallfiles" element={<ViewAllFiles />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
