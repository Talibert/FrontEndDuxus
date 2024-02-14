import "../Styles/MainSection.css"
import { Link } from 'react-router-dom'
import CadastroCard from "./CadastroCard"
import RequisiçãoCard from "./RequisiçãoCard"
import Footer from "./Footer"

export default function MainSection() {
    
    return(
        <div className="mainSection">
            <div className="cadastroSection">
                <Link to="/duxus/integrante/cadastro" className='link'>
                    <CadastroCard title="Cadastro de Integrantes" description="Cadastre um Integrante para poder utilizá-lo na sua escalação."/>
                </Link>
                <Link to="/duxus/time/cadastro" className='link'>
                    <CadastroCard title="Cadastro de Times" description="Cadastre seu time, escolhendo sua escalação desejada."/>
                </Link>
            </div>
            <div className="requisiçãoSection">
                <Link to="/duxus/time/timenadata" className='link'>
                    <RequisiçãoCard title="Time da Data" description="Retorne o time cadastrado na data selecionada."/>
                </Link>
            </div>
            <div className="requisiçãoSection">
                <Link to="/duxus/integrante/integrantemaisusado" className='link'>
                    <RequisiçãoCard title="Integrante mais Usado" description="Retorne o integrante mais usado no período desejado."/>
                </Link>
            </div>
            <div className="requisiçãoSection">
                <Link to="/duxus/time/timemaiscomum" className='link'>
                    <RequisiçãoCard title="Time mais Comum" description="Retorne o time mais comum no período desejado."/>
                </Link>
            </div>
            <div className="requisiçãoSection">
                <Link to="/duxus/time/funcaomaiscomum" className='link'>
                    <RequisiçãoCard title="Função mais Comum" description="Retorne a função mais comum no período desejado."/>
                </Link>
            </div>
            <div className="requisiçãoSection">
                <Link to="/duxus/time/franquiamaisfamosa" className='link'>
                    <RequisiçãoCard title="Franquia mais Famosa" description="Retorne a franquia mais famosa no período desejado."/>
                </Link>
            </div>
            <div className="requisiçãoSection">
                <Link to="/duxus/time/contagemfranquia" className='link'>
                    <RequisiçãoCard title="Contagem por Franquia" description="Retorne a contagem de franquias no período desejado."/>
                </Link>
            </div>
            <div className="requisiçãoSection">
                <Link to="/duxus/time/contagemfuncao" className='link'>
                    <RequisiçãoCard title="Contagem por Função" description="Retorne a contagem de funções no período desejado."/>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}