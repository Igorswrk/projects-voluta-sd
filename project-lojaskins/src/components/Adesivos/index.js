import React from 'react'
import "./style.css"

// Componentes
import AbaSkins from '../AbaSkins'
import Card from "../../components/Card"
import LigthBox from "../../components/LigthBox"
import Header from '../Header'
import Footer from '../Footer'

// Imagens
import Ibuypower from "../../assets/img/ibuypower.png"
import Titan from "../../assets/img/titan.png"
import Reason from "../../assets/img/reason.png"
import CoroaBrilhante from "../../assets/img/coroabrilhante.png"
import Fallen from "../../assets/img/fallen.png"
import Furia from "../../assets/img/furia.png"

export default function Adesivos(){
    return(
        <>
        <Header/>
        <main id="skins">
            <AbaSkins/>
            <section className="anuncios">
                <div className="cards">
                    <Card linklbox="#primeiro_Item_Adesivos" img={Ibuypower} name="Adesivo | iBUYPOWER (Holográfico) | Katowice 2014" price="R$ 101.526,00"/>
                    <Card linklbox="#segundo_Item_Adesivos" img={Titan} name="Adesivo | Titan (Holográfico) | Katowice 2014" price="R$ 113.709,12"/>
                    <Card linklbox="#terceiro_Item_Adesivos" img={Reason} name="Adesivo | Reason Gaming (Holográfico) | Katowice 2014" price="R$ 121.831,26"/>
                    <Card linklbox="#quarto_Item_Adesivos" img={CoroaBrilhante} name="Adesivo | Coroa (Brilhante)" price="R$ 2.917,86"/>
                    <Card linklbox="#quinto_Item_Adesivos" img={Fallen} name="Adesivo | FalleN (Dourado) | Boston 2018" price="R$ R$ 5.500,00"/>
                    <Card linklbox="#sexto_Item_Adesivos" img={Furia} name="Adesivo | FURIA (Holográfico) | Katowice 2019" price="R$ 333,64"/>
                </div>
            </section>
           
            {/* ligthbox */}
            <LigthBox linkCard="primeiro_Item_Adesivos" img={Ibuypower} name="Adesivo | iBUYPOWER (Holográfico) | Katowice 2014" price="R$ 101.526,00"/>
            <LigthBox linkCard="segundo_Item_Adesivos" img={Titan} name="Adesivo | Titan (Holográfico) | Katowice 2014" price="R$ 113.709,12"/>
            <LigthBox linkCard="terceiro_Item_Adesivos" img={Reason} name="Adesivo | Reason Gaming (Holográfico) | Katowice 2014" price="R$ 121.831,26"/>
            <LigthBox linkCard="quarto_Item_Adesivos" img={CoroaBrilhante} name="Adesivo | Coroa (Brilhante)" price="R$ 2.917,86"/>
            <LigthBox linkCard="quinto_Item_Adesivos" img={Fallen} name="Adesivo | FalleN (Dourado) | Boston 2018" price="R$ 5.500,00"/>
            <LigthBox linkCard="sexto_Item_Adesivos" img={Furia} name="Adesivo | FURIA (Holográfico) | Katowice 2019" price="R$ 333,64"/>
        </main>
        <Footer/>
        </>
    );
}