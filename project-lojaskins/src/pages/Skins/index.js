import React from 'react'

// Componentes
import TituloPag from "../../components/TituloPag"
import AbaSkins from "../../components/AbaSkins"
import Facas from "../../components/Facas"
// Imagens
import SkinsAdesivos from "../../assets/img/adesivos.png"
import SkinsFacas from "../../assets/img/faca.png"
import SkinsArmas from "../../assets/img/armas.png"
import SkinsLuvas from "../../assets/img/luvas.png"
import Header from '../../components/Header'
import Footer from '../../components/Footer'


export default function Skins(props){
    return(
        <>
        <Header/>
        <header id="Skins">
                <TituloPag h1="Skins"/>
                <section id="AbaSkins">
                <AbaSkins section={SkinsFacas} text="acesso a skins de Facas" />
                <AbaSkins section={SkinsAdesivos} text="acesso a skins de Adesivos"/>
                <AbaSkins section={SkinsArmas} text="acesso a skins de Adesivos"/>
                <AbaSkins section={SkinsLuvas} text="acesso a skins de Luvas"/>
                </section>
        </header>
        <Facas/>
        <Footer/>
        </>
    );
}
