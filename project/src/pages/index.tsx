import React from 'react';
import {MapPin, Mail} from 'react-feather';
import { Container, Dropdown } from 'react-bootstrap';

/**
 * Futuros componentes:
 * 
 * - Dropdown dos idiomas
 * - Logo do Elas com o ícone
 * - Cards do carrossel
 * - Ícones das redes sociais
 * - Ícones dos GitHubs
 */

import logoHorizontal from '../assets/logos/elas_horizontal.png';
import logoVertical from '../assets/logos/elas_vertical.png';
import instagram from '../assets/redes-sociais/instagram.svg';
import github from '../assets/redes-sociais/github.svg';
import twitter from '../assets/redes-sociais/twitter.svg';
import cabecalho from '../assets/images/cabecalho.png';

import icons from '../enums/icons'
import socialNetwork from '../enums/social-network'
import '../styles/home.css'
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

export default function Home() {
  return (
    <Container fluid id="home-page">
      <header>
        <img src={logoHorizontal} alt="Logo Elas@Computação Horizontal"/>
        <ul>
          <li><li>
            <a>Sobre</a>
          </li>
            <a>Painel</a>
          </li>
          <li>
            <a>Projetos</a>
          </li>
          <li>
            <a>Contato</a>
          </li>
          <li>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Idioma
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Português</Dropdown.Item>
                <br/>
                <Dropdown.Item>English</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </header>
      <main>
        <img className="wellcome-image" src={cabecalho} alt="Elas@Computação UFCG"/>
        <section>
          <h1>Sobre</h1>
          <div>
            <p className="screen-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Consectetur quae, quis excepturi quasi vel quia commodi ab
              accusantium? Nisi molestiae autem laudantium unde asperiores
              ea excepturi nesciunt saepe neque minima?
            </p>
            <div>
              <img src={logoVertical} alt="Logo Elas@Computação Vertical"/>
              <img src={icons.yellowRibbon} alt="Ícone"/>            
            </div>
          </div>
        </section>
        <section>
          <h1>Painel</h1>
          <div>

          </div>
        </section>
        <section>
          <h1>Projetos</h1>
          <div>
            <img src={"https://picsum.photos/300/150"}/>
            <h3>Titulo</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Ratione, rerum labore, 
              expedita quod, praesentium odio fugit amet 
              ullam eum architecto incidunt autem omnis 
              asperiores. Dolor quibusdam beatae consequuntur
              dolores ipsum?
            </p>
            <a>Conferir detalhes do projeto</a>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-content">
          <h1>Contato</h1>
          <div className="contact">
            <div>
              <div className="icon">
                <MapPin />
              </div>
              <span>
                Universidade Federal de Campina Grande - UFCG,
                Campus Central, R. Aprígio Veloso, 882 - Universitário, Campina Grande - PB, 58428-830
              </span>
              </div>
              <div>
                <div className="icon">
                  <Mail />
                </div>
                <span>
                  elas@computacao.ufcg.edu.br
                </span>
              </div>
          </div>
          <div className="social-networks">
            <a href={socialNetwork.instagramElas} target="_blank">
              <img src={instagram} alt="Instagram"/>
            </a>
            <a href={socialNetwork.githubElas} target="_blank">
              <img src={github} alt="GitHub"/>
            </a>
            <a href="" target="_blank">
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
    </Container>
  );
}
