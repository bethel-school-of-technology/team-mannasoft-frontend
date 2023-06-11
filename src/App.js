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
import DeleteUser from './components/DeleteUsers';
import DisplayProfile from './components/DisplayProfile';
import { UserProvider } from './contexts/UserProvider';
import './styles/global.css'; // Import the App.css file
import { Container } from 'react-bootstrap';
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <UserProvider>
      <div
        style={{
          backgroundColor: 'var(--neutral-color)',
        }}
      >
        <BrowserRouter>
          <Header /> {/* Apply header class */}
          {/* <NavbarComponent />  */}
          {/* NavbarComponent - Testing new navbar design */}
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/displayprofile" element={<DisplayProfile />} />
              <Route path="/editprofile" element={<EditProfile />} />
              <Route path="/uploadfiles" element={<UploadFiles />} />
              <Route path="/viewallfiles" element={<ViewAllFiles />} />
              <Route path="/deleteuser" element={<DeleteUser />} />
            </Routes>
          </Container>
          <Footer /> {/* Apply footer class */}
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
