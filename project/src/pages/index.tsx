import React from 'react';
import {MapPin, Mail} from 'react-feather';

/**
 * O que falta?
 * - Componente do Dropdown (envolve lógica)
 * - Componente do Tooltip (envolve lógica)
 * - Componente do Carrossel (envolve lógica)
 * - Toda a parte do Painel (envolve lógica)
 * - Detalhes do estilo (sombras, alinhamentos, detaques...)
 * - Hover dos ícones e de outros componentes
 * - Conexão com API do GitHub (necessário para iniciar o Painel)
 * - Lógica do Toggle 
 * - Lógica do Header (fixo quando a página faz scroll)
 * - Movimentação da página por meio do header
 * - Adaptação do layout para desktop (mobile first)
 * - Adaptação da lógica para desktop (algumas listagens são diferentes)
 */

import logoHorizontal from '../assets/logos/elas_horizontal.png';
import logoVertical from '../assets/logos/elas_vertical.png';
import instagram from '../assets/redes-sociais/instagram.png';
import github from '../assets/redes-sociais/github.png';
import twitter from '../assets/redes-sociais/twitter.png';
import cabecalho from '../assets/images/cabecalho.png';
import cafeComElas from '../assets/images/cafe-com-elas.png'

import icons from '../enums/icons'
import socialNetwork from '../enums/social-network'

import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import ContactCard from '../components/ContactCard';
import IconStatus from '../components/IconStatus'

import '../styles/home.css'

export default function Home() {
  return (
    <div id="home-page">
      <header>
        <img src={logoHorizontal} alt="Logo Elas@Computação Horizontal"/>
        <ul>
          <li>
            <a>Sobre</a>
          </li>
          <li>
            <a>Painel</a>
          </li>
          <li>
            <a>Projetos</a>
          </li>
          <li>
            <a>Contato</a>
          </li>
          <li>
            <a>
              Idioma
            </a>
          </li>
        </ul>
      </header>
      <main>
        <img className="wellcome-image" src={cabecalho} alt="Elas@Computação UFCG"/>
        <Section title="Sobre" className="section-about">
          <p className="screen-paragraph">
          O Elas@computação surge com o objetivo de reunir mulheres 
          do curso de Ciência da Computação da Universidade Federal 
          de Campina Grande e também outras mais. Nosso foco é levantar, 
          discutir e impulsionar os assuntos que dizem respeito ao feminino, 
          feminismo, nossos espaços, falas, movimentos e necessidades. A nossa
          missão é inspirar mulheres mostrando que todas são capazes de trabalhar
          e serem as melhores profissionais na área que Elas quiserem. Somos uma
          comunidade que se apoia e que está disposta sempre a acolher novas 
          membras e continuamente ajudá-las a se desenvolverem como mulheres 
          e profissionais.
          </p>
          <IconStatus 
            icon={logoVertical} 
            status={icons.yellowRibbon} 
            statusText="Lorem ipsum dolor sit, 
            amet consectetur adipisicing elit. 
            Recusandae odio sint eos reiciendis 
            modi cum debitis, quod"
          />
        </Section>
        <Section title="Painel" className="section-painel">
        </Section>
        <Section title="Projetos" className="section-projects">
          <ProjectCard 
          imageURL={cafeComElas} 
          title="Café com Elas" 
          description="Conversas e palestras das mulheres de computação. 
          Com o objetivo de trazer conversas sobre temas interessantes 
          e importantes acerca de nossa área e papel, com o intuito de 
          abraçar e estimular mulheres a participarem na comunidade."
          href="https://github.com/elasComputacao/CafeComElas"
          />
        </Section>
      </main>
      <footer>
        <h1>Contato</h1>
        <div className="footer-content">
          <div className="contact">
            <ContactCard content="Universidade Federal de Campina Grande - UFCG,
            Campus Central, R. Aprígio Veloso, 882 - Universitário, Campina Grande - PB, 58428-830"/>            
            <ContactCard content="elas@computacao.ufcg.edu.br"/>
          </div>
          <div className="social-networks">
            <a target="_blank" href={socialNetwork.instagramElas}>
              <img src={instagram} alt="Instagram"/>
            </a>
            <a target="_blank" href={socialNetwork.githubElas}>
              <img src={github} alt="GitHub"/>
            </a>
            <a target="_blank" href="">
              <img src={twitter} alt="Twitter"/>
            </a>
          </div>
          <div className="copyright">
            <img src={logoHorizontal} alt="Logo Elas@Computação Horizontal"/>
            <span>© 2020 Elas@Computação</span>
          </div>
        </div>
        <div className="background">
        </div>
      </footer>
    </div>
  );
}
