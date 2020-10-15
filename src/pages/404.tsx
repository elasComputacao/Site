import React from 'react';
import {ArrowLeft} from 'react-feather';
import cafe from '../assets/images/cafe-delas-reverse.png'

import '../styles/404.css'

export default function NotFound() {

  return (
    <div id="page-404">
        <div className="texts">
          <a href="/">
            <ArrowLeft />
            <span>Voltar para a Página Inicial</span>
          </a>
          <h1>
            404: Página não encontrada
          </h1>
        </div>
        <img src={cafe} alt="Image"/>
        
    </div>
  );
}
