import { useState } from "react";
import axios from 'axios';
import "../Styles/TimeDaData.css"

export default function TimeDaData() {
    const [data, setDataSelecionada] = useState('');
    const [timeNome, setNomeTime] = useState('');
    const [integrantes, setIngrantes] = useState([]);
    const [erro, setErro] = useState('');
    
      // Função para lidar com o envio do formulário
    const handleSubmit = async (event) => {
    event.preventDefault(); // Evitar o comportamento padrão de recarregar a página

    // Verifica se o usuário colocou a data
    if (data =="") {
      alert("Por favor, insira a data.");
      return
    }

    try {
      // Dados a serem enviados para a API
      const dados = {
        data
      };

      // Fazendo a requisição GET para a API
      const resposta = await axios.get(`http://localhost:8080/duxus/time/timenadata?data=${data}`);

      const { timeNome, integrantes } = resposta.data

      setNomeTime(timeNome)
      setIngrantes(integrantes)

      // Exibindo a resposta da API
      console.log('Resposta da API:', resposta.data);
      
      // Limpar os campos do formulário após o envio bem-sucedido
      setDataSelecionada('');
    } catch (erro) {
      // Exibindo popup de erro na tela e no console
      console.error('Erro ao enviar dados para API:', erro);
      setErro('Erro ao enviar dados para a API. Tente novamente mais tarde.');
        setTimeout(() => {
          setErro('');
        }, 2000);
    }
  };

    return(
        <div className="timenadatasection">
            <div className='formspace'>
              {erro && <div className="popup">{erro}</div>}
                <form onSubmit={handleSubmit}>
                    <div className='datatime'>
                            <label>Data:</label>
                            <input
                                className='datainput'
                                type="date"
                                value={data}
                                onChange={(e) => setDataSelecionada(e.target.value)}
                            />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <div className="resultadotime">
                {integrantes.length === 0 ? (
                    <h1 className="placeholder">Escolha uma data para exibir o time</h1>
                    ) : (
                    <div>
                        <h1 className="nometime">{timeNome}</h1>
                        {integrantes.map(integrante => (
                        <h1 className="integrantes" key={integrante}>{integrante}</h1>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
} 