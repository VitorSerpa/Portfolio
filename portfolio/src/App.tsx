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
import ProjetoTRAVIA from "./components/ProjectPages/ProjetoTRAVIA"
import CargasSP from './components/ProjectPages/CargasSP';
import Technologies from './components/Techs/Technologies';
import Paint from "./components/ProjectPages/Paint"
import Residuos from "./components/ProjectPages/ResiduosProject"
import './App.css';
import "./global.css"
import { FC } from 'react';

const App: FC = ()=>{

  

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
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
              <Route path='/projetos/refatoracao' element={<ProjetoTRAVIA />} />
              <Route path='/projetos/cargasSP' element={<CargasSP />} />
              <Route path='/projetos/paint' element={<Paint />} />
              <Route path='/projetos/residuos' element={<Residuos />} />
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
