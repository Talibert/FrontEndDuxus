
import "../Styles/CadastroCard.css"

export default function CadastroCard (props) {
    return(
            <div className='card'>
                <h1>
                    {props.title}
                </h1>
                <p>
                    {props.description}
                </p>
            </div>
    )
}