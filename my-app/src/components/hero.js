import "../Styles/Hero.css"
import { Link } from 'react-router-dom'
import CadastroCard from "./CadastroCard"
import RequisiçãoCard from "./RequisiçãoCard"

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
        </div>
    )
}