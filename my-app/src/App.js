import Hero from "./components/hero";
import "../src/Styles/General.css"
import Header from "./components/Header";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import CadastroIntegrante from "./components/CadastroIntegrante";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/duxus" />} />
          <Route path="/duxus" element={<Hero />}/>
          <Route path="/duxus/integrante/cadastro" element={<CadastroIntegrante />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
