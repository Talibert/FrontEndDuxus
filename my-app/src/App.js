import MainSection from "./components/MainSection";
import "../src/Styles/General.css"
import Header from "./components/Header";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import CadastroIntegrante from "./components/CadastroIntegrante";
import CadastroTime from "./components/CadastroTime";
import Footer from "./components/Footer";
import TimeDaData from "./components/TimeDaData";
import IntegranteMaisUsado from "./components/IntegranteMaisUsado";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/duxus" />} />
          <Route path="/duxus" element={<MainSection />}/>
          <Route path="/duxus/integrante/cadastro" element={<CadastroIntegrante />} />
          <Route path="/duxus/time/cadastro" element={<CadastroTime />} />
          <Route path="/duxus/time/timenadata" element={<TimeDaData />} />
          <Route path="/duxus/integrante/integrantemaisusado" element={<IntegranteMaisUsado />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
