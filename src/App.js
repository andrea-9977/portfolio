import './App.css';
import Main from './page/Main';
import styled from 'styled-components';
import Education from './component/Education';
import Projects from './component/Projects';
import Navbar from './component/Navbar';
import Work from './component/Work';
import { BrowserRouter as  Router, Routes, Route, Navigate } from 'react-router-dom';
import Connect from './component/Connect';

const MainContainer=styled.div`
// background-color: #ffffed;
min-height: 100vh;
`;

function App() {
  return (
    <Router basename="/portfolio"> 
    <div className="App">
      {/* <MainContainer>
      <Navbar/>
      <Main/>
      <Education/>
      </MainContainer> */}
      <MainContainer>
        {/* Navbar should always be visible */}
        <Navbar />

        {/* Define routes for different pages */}
        <Routes>
        <Route path="/" element={<Navigate to="/#myjourney" />} />
        <Route path="/#myjourney" element={<Main />} />
          <Route path="/education" element={<Education/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path = "/work" element={<Work/>}/>
          <Route path = "/connect" element={<Connect/>}/>
        </Routes>
      </MainContainer>
    </div>
    </Router>
  );
}

export default App;
