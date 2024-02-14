import { useState } from "react";
import axios from 'axios';
import "../Styles/ComponentesDataDupla.css"

export default function ContagemPorFranquia() {
    const [dataInicial, setDataInicialSelecionada] = useState('');
    const [dataFinal, setDataFinalSelecionada] = useState('');
    const [contagemFranquia, setcontagemFranquia] = useState({});
    
      // Função para lidar com o envio do formulário
    const handleSubmit = async (event) => {
    event.preventDefault(); // Evitar o comportamento padrão de recarregar a página

    try {

      // Fazendo a requisição GET para a API
      const resposta = await axios.get(`http://localhost:8080/duxus/time/contagemfranquia?dataInicial=${dataInicial}&dataFinal=${dataFinal}`);

      setcontagemFranquia(resposta.data) 

      // Exibindo a resposta da API
      console.log('Resposta da API:', resposta.data);
      
      // Limpar os campos do formulário após o envio bem-sucedido
      setDataInicialSelecionada('');
      setDataFinalSelecionada('');
    } catch (erro) {
      // Exibindo erro, caso ocorra
      console.error('Erro ao enviar dados para API:', erro);
    }
  };

    return(
        <div className="timenadatasection">
            <div className='formspace'>
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
                {Object.entries(contagemFranquia).length === 0 ? (
                    <h1 className="placeholder">Retorne a contagem de franquias de acordo com período desejado. Se não selecionar data inicial ou final, será considerada a data mínima e máxima.</h1>
                    ) : (
                        <div>
                        {Object.entries(contagemFranquia).map(([franquia, contagem], index) => (
                            <h1 className="contagemfranquia" key={index}>{franquia}: {contagem}</h1>
                        ))}
                    </div>
                )}
            </div>
        </div>
        
        
    )
}