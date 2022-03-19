import React from "react"
import "./style.css"

export default function Footer(){
    return(
        <footer id="rodape">
            <nav> 
                <ul>
                    <li><p>SITE</p></li>
                    <li>Informações</li>
                    <li>Skins</li>
                    <li>Encomendas & Upgrades</li>
                </ul>
                
                <ul>
                    <li><p>INFORMAÇÕES</p></li>
                    <li>Quem Somos</li>
                    <li>Pagamentos & Entrega</li>
                    <li>Contate-nos</li>
                </ul>
                
                <ul>
                    <li><p>REDES SOCIAIS</p></li>
                    <li><a href="https://Facebook.com/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/"></a>Instagram</li>
                    <li><a href="https://twitter.com/">Twitter</a></li>
                </ul>
                
                <ul>
                    <li><p>Todos os direitos reservados a akmstore.</p></li>
                    <li><p>Copyright &copy; akmstore.com</p></li>
                </ul>
            </nav>
        </footer>
    );
}