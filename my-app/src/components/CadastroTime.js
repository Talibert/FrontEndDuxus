import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Styles/CadastroTime.css"

export default function CadastroTime() {
    // Definindo estado local para os valores do formulário
  const [integrantes, setIntegrantes] = useState({});
  const [nome, setNomeTime] = useState('');
  const [data, setDataSelecionada] = useState('');
  const [integrantesSelecionados, setIntegrantesSelecionados] = useState([]);
  const [erro, setErro] = useState('');

  // Será executado apenas uma vez, ao carregar a página
  useEffect(() => {
    // Fazer a solicitação GET para a API ao montar o componente
    axios.get('http://localhost:8080/duxus/time/cadastro')
      // Se obtiver resposta da API, passa como argumento para setIngrantes
      .then(response => {
        setIntegrantes(response.data);
      })
      // Retorna erro para o console.log do navegador
      .catch(error => {
        console.error('Erro ao obter os dados:', error);
      });
  }, []);

  // Função invocada sempre que a checkbox é clicada
  const handleCheckboxChange = (event) => {
    const idIntegrante = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      // inclui o integrante no array integrantesSelecionados
      setIntegrantesSelecionados([...integrantesSelecionados, idIntegrante]);
    } else {
      // remove o integrante do array se ele for desmarcado
      setIntegrantesSelecionados(integrantesSelecionados.filter(id => id !== idIntegrante));
    }
  };

  // Função chamada quando o botão "enviar" é apertado
  const handleSubmit = (event) => {
    event.preventDefault();

    // Verifica se o usuário colocou o nome
    if (nome =="") {
      alert("Por favor, insira o nome do time.");
      return
    }

    // Verifica se o usuário selecionou a data
    if (data == "") {
      alert("Por favor, insira a data.");
      return
    }

    // Verifica se o usuário selecionou exatamente 5 opções
    if (integrantesSelecionados.length !== 5) {
      alert("Por favor, selecione exatamente 5 opções.");
      return;
    }

    // Dados a serem enviados para a API
    const dados = {
      nome,
      data,
      integrantesID: integrantesSelecionados
    };

    axios.post('http://localhost:8080/duxus/time/cadastro', dados)
      .then(response => {
        console.log('Dados enviados com sucesso:', response.data);
        // Limpar os campos do formulário após o envio bem-sucedido
        setNomeTime('');
        setDataSelecionada('');
        setIntegrantesSelecionados([]);
      })
      // Exibindo popup de erro na tela e no console
      .catch(error => {
        console.error('Erro ao enviar dados para a API:', error);
        setErro('Erro ao enviar dados para a API. Tente novamente mais tarde.');
        setTimeout(() => {
          setErro('');
        }, 2000);
      });
  };

  return (
    <div className='formspace'>
      {erro && <div className="popup">{erro}</div>}
      <form onSubmit={handleSubmit}>
        <div className='nometime'>
          <label>Nome do Time:</label>
          <input
            type="text"
            placeholder='Insira o nome do time...'
            value={nome}
            onChange={(e) => setNomeTime(e.target.value)}
          />
        </div>
        <div className='datatime'>
          <label>Data:</label>
          <input
            className='datainput'
            type="date"
            value={data}
            onChange={(e) => setDataSelecionada(e.target.value)}
          />
        </div>
        <label>Integrantes:</label>
        <div className='integrantestime'>
          {Object.keys(integrantes).map(id => (
            <div key={id}>
              <label className='itens'>
                <input 
                  className='checkboxitens'
                  type="checkbox" 
                  value={id} 
                  onChange={handleCheckboxChange} 
                  checked={integrantesSelecionados.includes(id)} 
                />
                  <span className="customcheckbox"></span>
                  {/*vai mostrar o nome, a função e franquia do integrante no checkbox*/}
                  {integrantes[id].nome} / {integrantes[id].funcao} / {integrantes[id].franquia}
              </label>
            </div>
          ))}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}