import { useState } from "react";
import axios from 'axios';
import "../Styles/TimeDaData.css"

export default function TimeMaisComum() {
    const [dataInicial, setDataInicialSelecionada] = useState('');
    const [dataFinal, setDataFinalSelecionada] = useState('');
    const [timeMaisComum, settimeMaisComum] = useState([]);
    const [erro, setErro] = useState('');
    
      // Função para lidar com o envio do formulário
    const handleSubmit = async (event) => {
    event.preventDefault(); // Evitar o comportamento padrão de recarregar a página

    try {

      // Fazendo a requisição GET para a API
      const resposta = await axios.get(`http://localhost:8080/duxus/time/timemaiscomum?dataInicial=${dataInicial}&dataFinal=${dataFinal}`);

      settimeMaisComum(resposta.data["Time mais comum:"]) 

      // Exibindo a resposta da API
      console.log('Resposta da API:', resposta.data);
      
      // Limpar os campos do formulário após o envio bem-sucedido
      setDataInicialSelecionada('');
      setDataFinalSelecionada('');
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
                            <label>Data Inicial:</label>
                            <input
                                className='datainput'
                                type="date"
                                value={dataInicial}
                                onChange={(e) => setDataInicialSelecionada(e.target.value)}
                            />
                    </div>
                    <div className='datatime'>
                            <label>Data Final:</label>
                            <input
                                className='datainput'
                                type="date"
                                value={dataFinal}
                                onChange={(e) => setDataFinalSelecionada(e.target.value)}
                            />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <div className="resultadosection">
                {timeMaisComum.length === 0 ? (
                    <h1 className="placeholder">Retorne o time mais comum de acordo com período desejado. Se não selecionar data inicial ou final, será considerada a data mínima e máxima.</h1>
                    ) : (
                    <div>
                        {timeMaisComum.map((time, index) => (
                        <h1 className="timemaiscomum" key={index}>{time}</h1>
                        ))}
                    </div>
                )}
            </div>
        </div>
        
        
    )
}