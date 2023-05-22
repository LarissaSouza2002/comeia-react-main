import React from "react";
// import foto from '../../assets/img/foto.png';
import "./style-header.css";
import { Link } from "react-router-dom";

function Header(props) {
    const {nome, cargo, foto} = props.informacoes;

    return (
        <header>
        <img id="foto" src={foto} alt="Foto do perfil"/>

        <div className="principal">
            <h1 className="titulo-principal">{nome}</h1>
            <h2 className="titulo-centralizado">{cargo}</h2>
        </div>
            <nav>
                <div>
                    <Link to="/">Home</Link>
                </div>

                <div>
                    <Link to="/portfolio">Portfólio</Link>
                </div>

                <div>
                    <Link to="/contato">Contato</Link>
                </div>
            </nav>
    </header>
    )
}

export default Header;