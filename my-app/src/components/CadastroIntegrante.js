import React, { useState } from 'react';
import axios from 'axios';
import "../Styles/CadastroIntegrante.css"

export default function CadastroIntegrante() {
  // Definindo estado local para os valores do formulário
  const [nome, setNome] = useState('');
  const [franquia, setFranquia] = useState('CBLol');
  const [funcao, setFuncao] = useState('Top Laner');
  const [erro, setErro] = useState('');

  console.log(franquia);
  console.log(funcao);

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evitar o comportamento padrão de recarregar a página

    // Verifica se o usuário colocou o nome
    if (nome =="") {
      alert("Por favor, insira o nome do integrante.");
      return
    }

    if (franquia =="") {
      alert("escolha a franquia")
      return
    }

    if (funcao =="") {
      alert("escolha a função")
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
    } catch (erro) {
      // Exibindo popup de erro na tela e no console
      console.error('Erro ao enviar dados para API:', erro);
      setErro('Erro ao enviar dados para a API. Tente novamente mais tarde.');
        setTimeout(() => {
          setErro('');
        }, 2000);
    }
  };

  return (
    <div className='formspace'>
      {erro && <div className="popup">{erro}</div>}
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
                value={funcao}
                onChange={(e) => setFuncao(e.target.value)}
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