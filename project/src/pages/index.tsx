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
import EventCard from '../components/EventCard';


/**
 * <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FRecife&amp;src=bWFyaWEuc2lsdmFAY2NjLnVmY2cuZWR1LmJy&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y29tcHV0YWNhby51ZmNnLmVkdS5icl9jbGFzc3Jvb201OGYyNGY2OUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y2NjLnVmY2cuZWR1LmJyX2NsYXNzcm9vbTYwZmM2OTUyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=Y29tcHV0YWNhby51ZmNnLmVkdS5icl9jbGFzc3Jvb204MmYwYTY2ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y29tcHV0YWNhby51ZmNnLmVkdS5icl9jbGFzc3Jvb205M2I3OThiMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%237627bb&amp;color=%23137333&amp;color=%23c26401&amp;color=%23202124&amp;showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0" scrolling="no" id="schedule">
 * </iframe>
 */
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
        main.style.marginTop = window.innerWidth < 1080 ? "44px" : "56px";
      } else {
        header.style.position = "relative";
        main.style.marginTop = "0px";    
      }
    })
  }

  useEffect(() => {
    console.log(window.document.getElementById('schedule'))
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
            <a href="/#Eventos">Eventos</a>
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
        <Section title="Eventos" className="section-events">
          <EventCard title="Nome do evento" 
          day="29" month="09" year="2020"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, nobis nesciunt. Suscipit earum quam, numquam voluptate sunt illum et dolores eum."
          />
          <EventCard title="Nome do evento" 
          day="29" month="09" year="2020"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, nobis nesciunt. Suscipit earum quam, numquam voluptate sunt illum et dolores eum."
          />
          <EventCard title="Nome do evento" 
          day="29" month="09" year="2020"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, nobis nesciunt. Suscipit earum quam, numquam voluptate sunt illum et dolores eum."
          />
        </Section>
      </main>
      <footer>
        <h1 id="Contato">Contato</h1>
        <div className="footer-content">
          <div className="contact">
            <ContactCard href="https://goo.gl/maps/xx1zhPUttKVzUSTQ6" content="Universidade Federal de Campina Grande - UFCG,
            Campus Central, R. Aprígio Veloso, 882 - Universitário, Campina Grande - PB, 58428-830">
              <MapPin />
            </ContactCard>        
            <ContactCard copy content="elas@computacao.ufcg.edu.br">
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
