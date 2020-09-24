import React, { useEffect, useState } from 'react';
import {MapPin, Mail} from 'react-feather';
import { Octokit } from "@octokit/rest";

import logoHorizontal from '../assets/logos/elas_horizontal.png';
import logoVertical from '../assets/logos/elas_vertical.png';
import instagram from '../assets/redes-sociais/instagram.svg';
import github from '../assets/redes-sociais/github.svg';
import twitter from '../assets/redes-sociais/twitter.svg';
import cabecalho from '../assets/images/cabecalho.png';

import icons from '../enums/icons'
import socialNetwork from '../enums/social-network'
import langs from '../enums/langs'
import projects from '../enums/projects';

import Section from '../components/Section';
import ContactCard from '../components/ContactCard';
import IconStatus from '../components/IconStatus';
import Dropdown from '../components/DropDown';
import PictureLink from '../components/PictureLink';
import Carousel from '../components/Carousel';

import '../styles/home.css'

export default function Home() {

  const [users, setUsers] = useState([]);

  function mouse() {
    const header = window.document.getElementById("header")
    const main = window.document.getElementById("main")

    const scroll = window.scrollY;

    window.addEventListener('mousemove', (event) => {
      var pos = event.clientY;
      console.log(pos)
      if (scroll > 380 && ((pos >= 0 && pos < 44 && window.innerWidth < 1080) || (pos >= 0 && pos < 64 && window.innerWidth > 1080))) {
        header.style.position = "fixed";
        main.style.marginTop = window.innerWidth < 1080 ? "44px" : "64px";
      } else {
        header.style.position = "relative";
        main.style.marginTop = "0px";    
      }
    })
  }

  useEffect(() => {
    var result:any = [];

    const octokit = new Octokit();
    
    octokit.orgs.listMembers({
      org: "elasComputacao",
      type: "public",
    }).then(({data}) => {
        setUsers(data);
    })
  }, [])

  return (
    <div id="home-page" onMouseOver={mouse}>
      <header id="header">
        <ul>
          <li>
            <a href="/#Sobre">Sobre</a>
          </li>
          <li>
            <a href="/#Painel">Painel</a>
          </li>
          <li>
            <a href="/#Projetos">Projetos</a>
          </li>
          <li>
            <a href="/#Contato">Contato</a>
          </li>
          <li>
            <Dropdown 
            title="Idioma"
            defaultImg={icons.brasilFlag}
            items={langs}
            />
          </li>
        </ul>
        <a href="#">
          <img src={logoHorizontal} alt="Logo Elas@Computação Horizontal"/>
        </a>
      </header>
      <img className="wellcome-image" src={cabecalho} alt="Elas@Computação UFCG"/>
      <main id="main">
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
            statusText="
            O Elas@Computação apoia a campanha do Setembro Amarelo em prevenção
            ao suicídio.
            Se você estiver passando por problemas relacionados a sua saúde mental 
            ou conhece alguém que está passando por alguma dificuldade, procure ajuda
            profissional.
            "
          />
        </Section>
        <Section toggle title="Painel" className="section-painel">
          {
            users.map(user => {
              return(
                <PictureLink 
                  href={`${socialNetwork.github}/${user.login}`}
                  pic={user.avatar_url}
                  text={user.login}
                  key={user.id}
                />
              );
            })
          }
        </Section>
        <Section title="Projetos" className="section-projects">  
          <Carousel array={projects} />
        </Section>
      </main>
      <footer>
        <h1 id="Contato">Contato</h1>
        <div className="footer-content">
          <div className="contact">
            <ContactCard content="Universidade Federal de Campina Grande - UFCG,
            Campus Central, R. Aprígio Veloso, 882 - Universitário, Campina Grande - PB, 58428-830">
            <MapPin />
            </ContactCard>            
            <ContactCard content="elas@computacao.ufcg.edu.br">
              <Mail/>
            </ContactCard>
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
        </div>
        <div className="background">
        </div>
        <div className="copyright">
          <a href="#">
            <img src={logoHorizontal} alt="Logo Elas@Computação Horizontal"/>
          </a>
          <span>© 2020 Elas@Computação</span>
        </div>
      </footer>
    </div>
  );
}
