import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Paginas
import Informacoes from "./pages/Informacoes";
import Encomendas from "./pages/Encomendas";
import Skins from "./pages/Skins";

// Componentes
import Header from "./components/Header";
import Footer from "./components/Footer";
import Adesivos from "./components/Adesivos";
import Facas from "./components/Facas";
import LigthBox from './components/LigthBox';
import AbaSkins from './components/AbaSkins';
import TituloPag from './components/TituloPag';
import Card from './components/Card';
import PagSlider from './components/PagSlider';

// Css
import "./global.css";

export default function Routes(){
    return(
        <Switch>
            <Route path="/info" component={Informacoes}/>
            <Route path="/skins" component={Skins} exact />
            <Route path="/encomenda" component={Encomendas}/>
        </Switch>
    );
}
