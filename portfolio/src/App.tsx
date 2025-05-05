import React from 'react';
import { motion } from "framer-motion"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from './components/Footer/Footer';
import About from "./components/Pages/About"
import Projetos from './components/Pages/Projects';
import Tcc from './components/ProjectPages/Tcc';
import NotFound from './components/Pages/NotFound';
import Pyoneers from './components/ProjectPages/Pyoneers';
import RefatoracaoProject from "./components/ProjectPages/RefatoracaoProject"
import CargasSP from './components/ProjectPages/CargasSP';
import Technologies from './components/Techs/Technologies';
import './App.css';
import "./global.css"
import { FC } from 'react';

const App: FC = ()=>{

  

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
              <Route path='/projetos/tcc' element={<Tcc />} />
              <Route path='/projetos/pyoneers' element={<Pyoneers />} />
              <Route path='/sobre' element={<About />} />
              <Route path='/techs' element={<Technologies />} />
              <Route path='/projetos/refatoracao' element={<RefatoracaoProject />} />
              <Route path='/projetos/cargasSP' element={<CargasSP />} />
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
    </motion.div>
  );
}

export default App;
