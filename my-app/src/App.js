import MainSection from "./components/MainSection";
import "../src/Styles/General.css"
import Header from "./components/Header";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import CadastroIntegrante from "./components/CadastroIntegrante";
import CadastroTime from "./components/CadastroTime";
import TimeDaData from "./components/TimeDaData";
import IntegranteMaisUsado from "./components/IntegranteMaisUsado";
import TimeMaisComum from "./components/TimeMaisComum";
import FunçãoMaisComum from "./components/FunçãoMaisComum";
import FranquiaMaisFamosa from "./components/FranquiaMaisFamosa";
import ContagemPorFranquia from "./components/ContagemPorFranquia";

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
          <Route path="/duxus/time/timemaiscomum" element={<TimeMaisComum />} />
          <Route path="/duxus/time/funcaomaiscomum" element={<FunçãoMaisComum />} />
          <Route path="/duxus/time/franquiamaisfamosa" element={<FranquiaMaisFamosa />} />
          <Route path="/duxus/time/contagemfranquia" element={<ContagemPorFranquia />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
