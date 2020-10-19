import React, { useEffect, useState } from 'react';
import {MapPin, Mail} from 'react-feather';
import ReactCardCarousel from 'react-card-carousel'

import logoHorizontal from '../../assets/logos/elas_horizontal.png';
import logoVertical from '../../assets/logos/elas_vertical.png';
import instagram from '../../assets/redes-sociais/instagram.svg';
import github from '../../assets/redes-sociais/github.svg';
import twitter from '../../assets/redes-sociais/twitter.svg';
import cabecalho from '../../assets/images/cabecalho.png';

import socialNetwork from '../../enums/social-network'
import langs from '../../enums/langs'
import infos from '../../enums/infos';
import {bio, events, projects, sections, supports,buttonTexts} from '../../enums/en/texts'
import {langInfo} from '../../enums/en/lang-infos'
import Section from '../../components/Section';
import ContactCard from '../../components/ContactCard';
import IconStatus from '../../components/IconStatus';
import Dropdown from '../../components/DropDown';
import PictureLink from '../../components/PictureLink';
import EventCard from '../../components/EventCard';

import { arrayShuffle, mouseMonitoring } from '../../functions/functions';
import { getUsersFromGitHub } from '../../functions/connections';

import '../../styles/home.css'
import ProjectCard from '../../components/ProjectCard';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [randomIndex, setRandomIndex] = useState([])

  useEffect(() => {
    document.title = "Elas@Computação UFCG"
    var result:any = [];
    getUsersFromGitHub().then(({data}) => {
        setUsers(data);
        var array = [...Array(data.length).keys()];
        arrayShuffle(array);
        setRandomIndex(array);
    })
  }, [])

  function hasEventsMonth() {
    for (let index = 0; index < events.length; index++) {
      const element = events[index];
      if (Number(element.month) == new Date().getMonth() + 1) {
        return true;
      }
    }    
    return false;
  }

  return (
    <div id="home-page" onMouseOver={() => mouseMonitoring()}>
      <header id="header">
        <a href="#">
          <img src={logoHorizontal} alt="Logo Elas@Computação Horizontal"/>
        </a>
        <ul>
          <li>
            <a href={`/${langInfo.ref}/#${sections.about}`}>{sections.about}</a>
          </li>
          <li>
            <a href={`/${langInfo.ref}/#${sections.panel}`}>{sections.panel}</a>
          </li>
          <li>
            <a href={`/${langInfo.ref}/#${sections.projects}`}>{sections.projects}</a>
          </li>
          <li>
            <a href={`/${langInfo.ref}/#${sections.events}`}>{sections.events}</a>
          </li>
          <li>
            <a href={`/${langInfo.ref}/#${sections.contact}`}>{sections.contact}</a>
          </li>
          <li>
          </li>
        </ul>
        <Dropdown
          title={langInfo.subtitle}
          defaultImg={langInfo.src}
          items={langs}
        />
      </header>
      <img className="wellcome-image" src={cabecalho} alt="Elas@Computação UFCG"/>
      <main id="main">
        <Section title={sections.about} className="section-about">
          
          <div className="text">
          {
            bio.map(paragraph => {
              return(<p className="paragraph">
                {paragraph}
              </p>);
            })
          }
          </div>
          
          <IconStatus 
            icon={logoVertical} 
            status={supports.outubroRosa.icon} 
            statusText={supports.outubroRosa.description}
          />
        </Section>
        <Section title={sections.panel} className="section-panel">
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
        <Section title={sections.projects} className="section-projects">  
        <div id="carousel-component">
          <ReactCardCarousel disable_keydown={ true } autoplay={ true } autoplay_speed={ 15000 } className={"carousel-component"}>
            {
              projects.map(
                element => {
                  return(
                    <ProjectCard 
                    key={element.title}
                    imageURL={element.imageURL} 
                    title={element.title} 
                    description={element.description}
                    href={element.href}
                    type={"normal"}
                    color={element.color}
                    buttonText={buttonTexts.projectCard}
                  />);
                }
              )
            }
          </ReactCardCarousel>
      </div>
        </Section>
        <Section title={sections.events} className="section-events" subtitle={buttonTexts.sectionEvents} link={`/${langInfo.ref}/schedule`}>
          {
            !hasEventsMonth() ? 
              <EventCard
              note
              title=""
              day=""
              month=""
              year=""
              time=""
              local=""
              eventURL=""
              href=""
              description="No events for this month"
              />
            :
            events.map(event => {
              return(Number(event.month) == new Date().getMonth() + 1 ? 
                <EventCard 
                eventURL={event.eventURL}
                href={event.pageURL}
                local={event.local}
                time={event.time} title={event.title}
                day={event.day} month={event.month} year={event.year}
                description={event.description}
                />
               : "");
            })
          }
        </Section>
      </main>
      <footer>
        <h1 id={sections.contact}>{sections.contact}</h1>
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
