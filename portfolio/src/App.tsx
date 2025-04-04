import React from 'react';
import Header from "./components/Header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main"
import './App.css';
import "./global.css"
import { motion } from "framer-motion"
import Projetos from './components/Pages/Projetos';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Começa invisível
      animate={{ opacity: 1 }} // Aparece suavemente
      transition={{ duration: 1.5 }} // Duração de 1 segundo
    >
      <Router>
        <div className="App">
          <div className="welcomeSection">
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path='/projetos' element={<Projetos />} />
            </Routes>
          </div>
        </div>
      </Router>
    </motion.div>
  );
}

export default App;
