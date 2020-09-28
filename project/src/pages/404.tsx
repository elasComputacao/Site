import React from 'react';
import {ArrowLeft} from 'react-feather';

import '../styles/404.css'

export default function NotFound() {

  return (
    <div id="page-404">
        <h1>
          404: Página não Encontrada
        </h1>
        <img src="https://blush.ly/_i3zNUG3e/p" alt="Image"/>
        <a href="/">
          <ArrowLeft />
          <span>Voltar para a Página Inicial</span>
        </a>
    </div>
  );
}
