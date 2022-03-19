import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';

import Routes from './routes';


export default function App(){
    return(
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    );
}

