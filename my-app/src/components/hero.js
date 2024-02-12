import "../Styles/Hero.css"
import { Link } from 'react-router-dom'
import CadastroCard from "./CadastroCard"
import RequisiçãoCard from "./RequisiçãoCard"
import Footer from "./Footer"

export default function Hero() {
    
    return(
        <div className="hero">
            <div className="cadastroSection">
                <Link to="/duxus/integrante/cadastro" className='link'>
                    <CadastroCard title="Cadastro de Integrantes" description="Cadastre um Integrante para poder utilizá-lo na sua escalação."/>
                </Link>
                <Link to="/duxus/time/cadastro" className='link'>
                    <CadastroCard title="Cadastro de Times" description="Cadastre seu time, escolhendo sua escalação desejada."/>
                </Link>
            </div>
            <div className="requisiçãoSection">
                <Link to="/duxus/time/teste" className='link'>
                    <RequisiçãoCard title="Time da Data" description="Retorne o time cadastrado na data selecionada."/>
                </Link>
            </div>
            <div className="requisiçãoSection">
                <Link to="/duxus/time/teste2" className='link'>
                    <RequisiçãoCard title="Integrante mais Usado" description="Retorne o integrante mais usado no período desejado."/>
                </Link>
            </div>
            <div className="requisiçãoSection">
                <Link to="/duxus/time/teste3" className='link'>
                    <RequisiçãoCard title="Time mais Comum" description="Retorne o time mais comum no período desejado."/>
                </Link>
            </div>
            <div className="requisiçãoSection">
                <Link to="/duxus/time/teste4" className='link'>
                    <RequisiçãoCard title="Função mais Comum" description="Retorne a função mais comum no período desejado."/>
                </Link>
            </div>
            <div className="requisiçãoSection">
                <Link to="/duxus/time/teste5" className='link'>
                    <RequisiçãoCard title="Franquia mais Famosa" description="Retorne a função mais comum no período desejado."/>
                </Link>
            </div>
            <div className="requisiçãoSection">
                <Link to="/duxus/time/teste5" className='link'>
                    <RequisiçãoCard title="Contagem por Franquia" description="Retorne a contagem de franquias no período desejado."/>
                </Link>
            </div>
            <div className="requisiçãoSection">
                <Link to="/duxus/time/teste5" className='link'>
                    <RequisiçãoCard title="Contagem por Função" description="Retorne a contagem de funções no período desejado."/>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}