import React, { useEffect, useState } from 'react';
import {MapPin, Mail} from 'react-feather';

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
import events from '../enums/events'

import Section from '../components/Section';
import ContactCard from '../components/ContactCard';
import IconStatus from '../components/IconStatus';
import Dropdown from '../components/DropDown';
import PictureLink from '../components/PictureLink';
import Carousel from '../components/Carousel';
import EventCard from '../components/EventCard';

import { arrayShuffle, mouseMonitoring } from '../functions/functions';
import { getUsersFromGitHub } from '../functions/connections';

import '../styles/home.css'
import infos from '../enums/infos';
import supports from '../enums/supports';
import sections from '../enums/sections';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [randomIndex, setRandomIndex] = useState([])

  useEffect(() => {
    var result:any = [];
    getUsersFromGitHub().then(({data}) => {
        setUsers(data);
        var array = [...Array(data.length).keys()];
        arrayShuffle(array);
        setRandomIndex(array);
        console.log(array.length)
    })
  }, [])

  return (
    <div id="home-page" onMouseOver={() => mouseMonitoring()}>
      <header id="header">
        <a href="#">
          <img src={logoHorizontal} alt="Logo Elas@Computação Horizontal"/>
        </a>
        <ul>
          <li>
            <a href={`/#${sections.about.pt}`}>{sections.about.pt}</a>
          </li>
          <li>
            <a href={`/#${sections.painel.pt}`}>{sections.painel.pt}</a>
          </li>
          <li>
            <a href={`/#${sections.projects.pt}`}>{sections.projects.pt}</a>
          </li>
          <li>
            <a href={`/#${sections.events.pt}`}>{sections.events.pt}</a>
          </li>
          <li>
            <a href={`/#${sections.contact.pt}`}>{sections.contact.pt}</a>
          </li>
          <li>
          </li>
        </ul>
        <Dropdown
          title={sections.language.pt}
          defaultImg={icons.brasilFlag}
          items={langs}
        />
      </header>
      <img className="wellcome-image" src={cabecalho} alt="Elas@Computação UFCG"/>
      <main id="main">
        <Section title="Sobre" className="section-about">
          <p className="screen-paragraph">
            {infos.bio.pt}
          </p>
          <IconStatus 
            icon={logoVertical} 
            status={icons.pinkRibbon} 
            statusText={supports.outubroRosa.description.pt}
          />
        </Section>
        <Section title="Painel" className="section-panel">
        { randomIndex.map(index => {
              return(
                <PictureLink 
                  href={`${socialNetwork.github}/${users[index].login}`}
                  pic={users[index].avatar_url}
                  text={users[index].login}
                  key={users[index].id}
                />
              );
            })
          }
        </Section>
        <Section title="Projetos" className="section-projects">  
          <Carousel array={projects} />
        </Section>
        <Section title="Eventos" className="section-events" subtitle="Confira nossa Agenda" link="/schedule">
          {
            events.length == 0 ? 
              <span className="nothing">Nenhum evento confirmado para este mês</span>
            :
            events.map(event => {
              return(Number(event.month) == new Date().getMonth() ? 
                <EventCard 
                eventURL={event.eventURL}
                href={event.pageURL}
                local={event.local}
                time={event.time} title={event.title}
                day={event.day} month={event.month} year={event.year}
                description={event.description}
                />
               : <span className="nothing">Nenhum evento confirmado para este mês</span>);
            })
          }
        </Section>
      </main>
      <footer>
        <h1 id="Contato">Contato</h1>
        <div className="footer-content">
          <div className="contact">
            <ContactCard href="https://goo.gl/maps/xx1zhPUttKVzUSTQ6" content={infos.location}>
              <MapPin />
            </ContactCard>        
            <ContactCard copy content={infos.email}>
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
