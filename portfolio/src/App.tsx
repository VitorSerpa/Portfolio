import React from 'react';
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import ProjectContainer from './components/Projects/ProjectContainer';
import Swiper from './components/Swiper/Swiper';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="welcomeSection">
        <Header></Header>
        <Main></Main>
      </div>
      <div>
        <ProjectContainer></ProjectContainer>
      </div>
    </div>
  );
}

export default App;
