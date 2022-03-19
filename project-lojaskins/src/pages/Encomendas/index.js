import React from "react"
import "./style.css"

// Componentes
import TituloPag from "../../components/TituloPag"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

// Imagens
import Img_tira from "../../assets/img/img_tira.jpg"
import Img_delivery from "../../assets/img/delivery.svg"

export default function Encomendas() {
    return(
        <> 
        <Header/>
        <main id="encomendas">
            <TituloPag h1="Encomendas E Upgrades"/>
            <section className="container">
                <div className="tira">
                    <div className="ilustration">
                        <h2>Não encontrou o que procurava?</h2>
                        <p>Me desculpe, não vamos te deixar sem sua skin dos sonhos, faça sua encomenda ou upgrade com o melhor preço!</p>
                        <img src={Img_tira} alt="foto ilustrativa" className="awp"></img>
                        <img src={Img_delivery} alt="envio 24 horas" className="envio"></img>
                        <p className="desc-envio">Envio 24h</p>
                    </div>
                </div>
                <section className="form">
                    <h2>Encomendas | Upgrade</h2>
                    <form action="#" method="get" className="formulario">
                        <label>
                            <p>Perfil steam</p> 
                            <input size="" type="text" name="" id="steam_user" required></input>
                        </label>
                        <label>
                            <p>Trade link</p>
                            <input size="" type="text" id="form_user_tradelink" required></input>
                        </label>     
                        <label>
                            <p>Skin</p>
                            <input size="" type="text" name="" id="form_skin" placeholder="AK-47 | Imperatriz" required></input> 
                        </label>
                        <label>
                            <select size="1" required>
                                <option>Selecione</option>
                                <option>Nova de Fábrica</option>
                                <option>Pouco Usada</option>
                                <option>Testada em Campo</option>
                                <option>Bem Desgastada</option>
                                <option>Veterana de Guerra</option>
                                <option>-</option>
                            </select>
                        </label>
                        <label>
                            <select size="1" required>
                                <option>Selecione</option>
                                <option>Normal</option>
                                <option>StatTrak™</option>
                                <option>-</option>
                            </select>
                        </label>
                        <label>
                            <p>Foto skin</p>
                            <input type="text" name="" id="form_user_fotoskin" required></input>
                        </label>
                        <label>
                            <p>Email</p>
                            <input type="email" name="" id="form_user_email" required></input>
                        </label>
                        <label>
                            <p>Contato (celular)</p>
                            <input type="tel" name="telefone" id="form_telefone" ></input>
                        </label>
                        <label>
                            <p>Descrição</p> 
                            <textarea type="text" name="" id="form_telefone" className="descriptionP" ></textarea>
                        </label>
                        <input type="submit" value="Enviar" className="botao"></input>
                    </form>
                </section>
            </section>
        </main>
        <Footer/>
        </>
    );
}