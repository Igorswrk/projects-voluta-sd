import React from "react";
import "./style.css"; 
// Imagens
import Seta from "../../assets/img/arrow.png";
import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <header id="cabecalho">
            <nav>
                <div className="menu">
                    <Link to="/info">Informações</Link>
                    <Link to="/skins">Skins</Link>
                    <Link to="/encomenda">Encomendas & Upgrades</Link>
                </div>
            </nav>
            <div className="espaco">
                <h1>akmstore</h1>
                <p>Melhor loja de skins do brasil!</p>
                <p>Rapidez e agilidade nas entregas e upgrades!</p>
            </div>
            <div className="arrow">
                <a href="#title"><img src={Seta} alt="seta para descer a pagina"></img></a>
            </div>
        </header>
    );
}