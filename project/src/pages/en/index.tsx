import React, { useEffect, useState } from 'react';
import {MapPin, Mail} from 'react-feather';

import logoHorizontal from '../../assets/logos/elas_horizontal.png';
import logoVertical from '../../assets/logos/elas_vertical.png';
import instagram from '../../assets/redes-sociais/instagram.svg';
import github from '../../assets/redes-sociais/github.svg';
import twitter from '../../assets/redes-sociais/twitter.svg';
import cabecalho from '../../assets/images/cabecalho.png';

import icons from '../../enums/icons'
import socialNetwork from '../../enums/social-network'
import langs from '../../enums/langs'
import projects from '../../enums/projects';
import events from '../../enums/events'

import Section from '../../components/Section';
import ContactCard from '../../components/ContactCard';
import IconStatus from '../../components/IconStatus';
import Dropdown from '../../components/DropDown';
import PictureLink from '../../components/PictureLink';
import Carousel from '../../components/Carousel';
import EventCard from '../../components/EventCard';

import { arrayShuffle, mouseMonitoring } from '../../functions/functions';
import { getUsersFromGitHub } from '../../functions/connections';

import '../../styles/home.css'
import infos from '../../enums/infos';
import supports from '../../enums/supports';
import sections from '../../enums/sections';

export default function HomeEN() {
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
        <ul>
          <li>
            <a href={`/${langs[1].ref}/#${sections.about.en}`}>{sections.about.en}</a>
          </li>
          <li>
            <a href={`/${langs[1].ref}/#${sections.painel.en}`}>{sections.painel.en}</a>
          </li>
          <li>
            <a href={`/${langs[1].ref}/#${sections.projects.en}`}>{sections.projects.en}</a>
          </li>
          <li>
            <a href={`/${langs[1].ref}/#${sections.events.en}`}>{sections.events.en}</a>
          </li>
          <li>
            <a href={`/${langs[1].ref}/#${sections.contact.en}`}>{sections.contact.en}</a>
          </li>
          <li>
            <Dropdown
            title={sections.language.en}
            defaultImg={icons.usaFlag}
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
        <Section title={sections.about.en} className="section-about">
          <p className="screen-paragraph">
            {infos.bio.en}
          </p>
          <IconStatus 
            icon={logoVertical} 
            status={icons.pinkRibbon} 
            statusText={supports.outubroRosa.description.en}
          />
        </Section>
        <Section toggle title={sections.painel.en} className="section-panel">
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
        <Section title={sections.projects.en} className="section-projects">  
          <Carousel array={projects} />
        </Section>
        <Section title={sections.events.en} className="section-events">
          {
            events.map(event => {
              return(
                <EventCard time={event.time} title={event.title}
                day={event.day} month={event.month} year={event.year}
                description={event.description}
                />
              );
            })
          }
        </Section>
      </main>
      <footer>
        <h1 id={sections.contact.en}>{sections.contact.en}</h1>
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
