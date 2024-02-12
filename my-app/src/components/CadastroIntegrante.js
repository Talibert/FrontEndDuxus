import React, { useState } from 'react';
import axios from 'axios';
import "../Styles/CadastroIntegrante.css"

export default function CadastroIntegrante() {
  // Definindo estado local para os valores do formulário
  const [nome, setNome] = useState('');
  const [franquia, setFranquia] = useState('CBLol');
  const [funcao, setFuncao] = useState('Top Laner');

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evitar o comportamento padrão de recarregar a página

    // Verifica se o usuário colocou o nome
    if (nome =="") {
      alert("Por favor, insira o nome do integrante.");
      return
    }

    try {
      // Dados a serem enviados para a API
      const dados = {
        nome,
        franquia,
        funcao
      };

      // Fazendo a requisição POST para a API
      const resposta = await axios.post('http://localhost:8080/duxus/integrante/cadastro', dados);

      // Exibindo a resposta da API
      console.log('Resposta da API:', resposta.data);
      
      // Limpar os campos do formulário após o envio bem-sucedido
      setNome('');
      setFranquia('');
      setFuncao('');
    } catch (erro) {
      // Exibindo erro, caso ocorra
      console.error('Erro ao enviar dados para API:', erro);
    }
  };

  return (
    <div className='formspace'>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nome:</label>
              <input
                placeholder='Insira o nome...'
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div>
              <label>Franquia:</label>
              <select
                value={franquia}
                onChange={(e) => setFranquia(e.target.value)}
              >
                <option value="CBLol">CBLol</option>
                <option value="LCK">LCK</option>
                <option value="LPL">LPL</option>
                <option value="LCS">LCS</option>
                <option value="LEC">LEC</option>
              </select>
            </div>
            <div>
              <label>Função:</label>
              <select
                value={franquia}
                onChange={(e) => setFranquia(e.target.value)}
              >
                <option value="Top Laner">Top Laner</option>
                <option value="Jungler">Jungler</option>
                <option value="Mid Laner">Mid Laner</option>
                <option value="AD Carry">AD Carry</option>
                <option value="Support">Support</option>
              </select>
            </div>
            <button type="submit">Enviar</button>
          </form>
    </div>
  );
}