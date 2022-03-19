import React from 'react'
import "./style.css"
// Componentes
import Card from "../../components/Card"
import LigthBox from "../../components/LigthBox"
// Imagens
import KarambitDopplerRuby from "../../assets/img/karambitruby.jpg"
import KarambitDopplerSapphire from "../../assets/img/karambitsafira.png"
import M9GamaDopplerEmerald from "../../assets/img/m9baionetaemerald.png"
import SkeletonFade from "../../assets/img/skeletonfade.jpg"
import BayonetLore from "../../assets/img/baionetalore.jpg"
import ButterflyDopplerRuby from "../../assets/img/butterflyrubi.png"

export default function Facas(){
   return(
        <main id="skins">
        <section className="anuncios">
            <div className="cards">
                <Card linklbox="#primeiro_Item_Facas" img={KarambitDopplerRuby} name="★ Karambit | Doppler Ruby (Factory New)" price="R$ 37.054,01"/>
                <Card linklbox="#segundo_Item_Facas" img={KarambitDopplerSapphire} name="★ Karambit | Doppler Sapphire (Factory New)" price="R$ 60.000,00"/>
                <Card linklbox="#terceiro_Item_Facas" img={M9GamaDopplerEmerald} name="★ M9 Bayonet | Gamma Doppler Emerald (Factory New)" price="R$ 54.000,00"/>
                <Card linklbox="#quarto_Item_Facas" img={SkeletonFade} name="★ StatTrak™ Skeleton Knife | Fade (Factory New)" price="R$ 18.408,55"/>
                <Card linklbox="#quinto_Item_Facas" img={BayonetLore} name="★ Bayonet | Lore (Factory New)" price="R$ 6.731,11"/>
                <Card linklbox="#sexto_Item_Facas" img={ButterflyDopplerRuby} name="★ Butterfly Knife | Doppler Ruby (Factory New)" price="R$ 37.581,04"/>
            </div>
        </section>
        
        {/* ligthbox */}
        <LigthBox linkCard="primeiro_Item_Facas" img={KarambitDopplerRuby} name="★ Karambit | Doppler Ruby (Factory New)" price="R$ 37.054,01"/>
        <LigthBox linkCard="segundo_Item_Facas" img={KarambitDopplerSapphire} name="★ Karambit | Doppler Sapphire (Factory New)"price="R$ 60.000,00"/>
        <LigthBox linkCard="terceiro_Item_Facas" img={M9GamaDopplerEmerald} name="★ M9 Bayonet | Gamma Doppler Emerald (Factory New)" price="R$ 18.408,55"/>
        <LigthBox linkCard="quarto_Item_Facas" img={SkeletonFade} name="★ StatTrak™ Skeleton Knife | Fade (Factory New)" price="R$ 18.408,55"/>
        <LigthBox linkCard="quinto_Item_Facas" img={BayonetLore} name="★ Bayonet | Lore (Factory New)" price="R$ 6.731,11"/>
        <LigthBox linkCard="sexto_Item_Facas" img={ButterflyDopplerRuby} name="★ Butterfly Knife | Doppler Ruby (Factory New)" price="R$ 37.581,04"/>
    </main>
   );
}