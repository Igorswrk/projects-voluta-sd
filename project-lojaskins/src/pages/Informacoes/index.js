import React from "react"
import "./style.css"
// Componentes
import Header from "../../components/Header"
import TituloPag from "../../components/TituloPag"
import PagSlider from "../../components/PagSlider"
import Footer from "../../components/Footer"

// Imagens
import Img_encomendas from "../../assets/img/img_encomendas.png"
import Img_entrega from "../../assets/img/img_entrega.png"
import Img_pagamento from "../../assets/img/img_pagamento.png"
import Img_vendas from "../../assets/img/img_vendas.png"
import Img_empresa from "../../assets/img/img_empresa.png"

export default function Informacoes() {
    return(
        <>
        <Header/>
        <main id="informacoes">
           
            <TituloPag h1="Informações"/>
            <section className="container">
                <section className="slider">
        
                    <input type="radio" id="i1" name="images" checked/>
                    <input type="radio" id="i2" name="images" checked/>
                    <input type="radio" id="i3" name="images" checked/>
                    <input type="radio" id="i4" name="images" checked/>
                    <input type="radio" id="i5" name="images" checked/>	
                    
                    <PagSlider position="one" img={Img_empresa} logo="akmstore" title="Quem somos?" 
                    description="Mussum Ipsum, cacilds vidis litro abertis. 
                    Interessantiss quisso pudia ce cabrito receita de bolis, 
                    mais bolis eu num gostis. Manduma pindureta quium dia nois paga."
                    prev="i5" next="i2"/>
                    
                    <PagSlider position="two" img={Img_encomendas} alt="Como fazer encomendas" title="Encomendas" 
                    description="Mussum Ipsum, cacilds vidis litro abertis. 
                    Interessantiss quisso pudia ce cabrito receita de bolis, 
                    mais bolis eu num gostis. Manduma pindureta quium dia nois paga."
                    prev="i1" next="i3"/>
                    
                    <PagSlider position="three" img={Img_pagamento} alt="Formas de Pagamentos" title="Formas de Pagamento" 
                    description="Mussum Ipsum, cacilds vidis litro abertis. 
                    Interessantiss quisso pudia ce cabrito receita de bolis, 
                    mais bolis eu num gostis. Manduma pindureta quium dia nois paga."
                    prev="i2" next="i4"/>

                    <PagSlider position="four" img={Img_entrega} alt="Entregas" title="Entregas" 
                    description="Mussum Ipsum, cacilds vidis litro abertis. 
                    Interessantiss quisso pudia ce cabrito receita de bolis, 
                    mais bolis eu num gostis. Manduma pindureta quium dia nois paga."
                    prev="i3" next="i5"/>

                    <PagSlider position="five" img={Img_vendas} alt="Como as vendas sao feitas" title="Vendas de Skins" 
                    description="Mussum Ipsum, cacilds vidis litro abertis. 
                    Interessantiss quisso pudia ce cabrito receita de bolis, 
                    mais bolis eu num gostis. Manduma pindureta quium dia nois paga."
                    prev="i4" next="i1"/>
                </section>                  
            </section>
        </main>
        <Footer/>
        </>
    );
}