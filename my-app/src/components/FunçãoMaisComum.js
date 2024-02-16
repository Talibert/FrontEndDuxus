import { useState } from "react";
import axios from 'axios';
import "../Styles/ComponentesDataDupla.css"

export default function FunçãoMaisComum() {
    const [dataInicial, setDataInicialSelecionada] = useState('');
    const [dataFinal, setDataFinalSelecionada] = useState('');
    const [funcaoMaisComum, setfuncaoMaisComum] = useState([]);
    const [erro, setErro] = useState('');
    
      // Função para lidar com o envio do formulário
    const handleSubmit = async (event) => {
    event.preventDefault(); // Evitar o comportamento padrão de recarregar a página

    try {

      // Fazendo a requisição GET para a API
      const resposta = await axios.get(`http://localhost:8080/duxus/time/funcaomaiscomum?dataInicial=${dataInicial}&dataFinal=${dataFinal}`);

      setfuncaoMaisComum(resposta.data) 

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
        <div className="dadossection">
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
                {funcaoMaisComum.length === 0 ? (
                    <h1 className="placeholder">Retorne a função mais comum de acordo com período desejado. Se não selecionar data inicial ou final, será considerada a data mínima e máxima.</h1>
                    ) : (
                    <div>
                        <h1 className="funcaomaiscomum">{funcaoMaisComum["Função mais comum:"]}</h1>
                    </div>
                )}
            </div>
        </div>
        
        
    )
} 