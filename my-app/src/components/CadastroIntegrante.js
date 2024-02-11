import React, { useState } from 'react';
import axios from 'axios';
import "../Styles/CadastroIntegrante.css"

export default function CadastroIntegrante() {
  // Definindo estado local para os valores do formulário
  const [nome, setNome] = useState('');
  const [franquia, setFranquia] = useState('');
  const [funcao, setFuncao] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evitar o comportamento padrão de recarregar a página

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
                <option value="League of Legends">League of Legends</option>
              </select>
            </div>
            <div>
              <label>Função:</label>
              <input
                type="text"
                value={funcao}
                onChange={(e) => setFuncao(e.target.value)}
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
    </div>
  );
}