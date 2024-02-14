import "../Styles/Header.css"

export default function Header() {
    return(
        <header>
            <div className="top"></div>
            <div className="mid">
                <h1>CartoLOL</h1>
                <img src=".assets/lol.png" alt="lol logo"></img>
            </div> 
            <div className="bot"></div>
        </header>
    )
}