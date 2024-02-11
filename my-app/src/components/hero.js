import "../Styles/Hero.css"
import { Link, Outlet } from 'react-router-dom'
import CadastroCard from "./CadastroCard"

export default function Hero() {
    
    return(

        <div className="hero">
            <div className="cadastroSection">
                <Link to="/duxus/integrante/cadastro" className='link'>
                    <CadastroCard title="Cadastro de Integrantes" description="Cadastre um Integrante para poder utilizá-lo na sua escalação"/>
                </Link>
                <Link to="/duxus/time/cadastro" className='link'>
                    <CadastroCard title="Cadastro de Times" description="Cadastre seu time com sua escalação desejada"/>
                </Link>
            </div>
        </div>
    )
}