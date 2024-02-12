import "../Styles/RequisiçãoCard.css"

export default function RequisiçãoCard (props) {
    return(
            <div className='cardrequisição'>
                <h1>
                    {props.title}
                </h1>
                <p>
                    {props.description}
                </p>
            </div>
    )
}