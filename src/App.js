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
import About from './components/About';
import DisplayProfile from './components/DisplayProfile';
import { UserProvider } from './contexts/UserProvider';
import './styles/global.css'; // Import the App.css file

function App() {
  return (
    <UserProvider>
      <div>
        <BrowserRouter>
          <Header /> {/* Apply header class */}
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profilepage" element={<DisplayProfile />} />
              <Route path="/editprofile" element={<EditProfile />} /> {/* Does not go to the right place */}
              <Route path="/uploadfiles" element={<UploadFiles />} />
              <Route path="/viewallfiles" element={<ViewAllFiles />} />
            </Routes>
          </div>
          <Footer /> {/* Apply footer class */}
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
