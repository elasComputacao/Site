import React, { useEffect, useState } from 'react';

//Importing external modules
import {MapPin, Mail} from 'react-feather';
import ReactCardCarousel from 'react-card-carousel';
import { Link } from 'react-scroll';

//Importing images
import logoHorizontal from '../../assets/logos/elas_horizontal.png';
import logoVertical from '../../assets/logos/elas_vertical.png';
import instagram from '../../assets/redes-sociais/instagram.svg';
import github from '../../assets/redes-sociais/github.svg';
import twitter from '../../assets/redes-sociais/twitter.svg';
import cabecalho from '../../assets/images/header.png';

//Importing site information and content
import socialNetwork from '../../enums/social-network'
import langs from '../../enums/langs'
import infos from '../../enums/infos';
import {bio, projects, sections, supports,buttonTexts, noEvents} from '../../enums/en/texts'
import {langInfo} from '../../enums/en/lang-infos'
import partnerships from '../../enums/partnerships'
import events from '../../enums/events';

//Importing components
import Section from '../../components/Section';
import ContactCard from '../../components/ContactCard';
import IconStatus from '../../components/IconStatus';
import Dropdown from '../../components/DropDown';
import PictureLink from '../../components/PictureLink';
import EventCard from '../../components/EventCard';
import ProjectCard from '../../components/ProjectCard';

// Importing functions
import { arrayShuffle, mouseMonitoring, hasEventsMonth, setAutoSupport } from '../../functions/functions';
import { getUsersFromGitHub } from '../../functions/connections';

// Importing styles
import '../../styles/home.css'

export default function Home() {
  const [users, setUsers] = useState([]); //Users array
  const [randomIndex, setRandomIndex] = useState([]) //Shuffled indexes


  useEffect(() => {
    document.title = "Elas@Computação UFCG" //Page title
    
    //Calling getUsersFromGitHub function 
    getUsersFromGitHub().then(({data}) => {
        setUsers(data); //Set users data
        var array = [...Array(data.length).keys()]; //Getting users indexes
        arrayShuffle(array); //Shuffling indexes
        setRandomIndex(array); //Set shuffled indexes
    })
  }, [])

  return (
    <div id="home-page" onMouseOver={() => mouseMonitoring()}>
      <header id="header">
        <nav>
            <a href="#" className="image">
              <img src={logoHorizontal} alt="Logo Elas@Computação Horizontal"/>
            </a>
          <ul>
            <li>
              <Link to={`${sections.about}`}>{sections.about}</Link>
            </li>
            <li>
              <Link to={`${sections.panel}`}>{sections.panel}</Link>
            </li>
            <li>
              <Link to={`${sections.projects}`}>{sections.projects}</Link>
            </li>
            <li>
              <Link to={`${sections.events}`}>{sections.events}</Link>
            </li>
            <li>
              <Link to={`${sections.partnerships}`}>{sections.partnerships}</Link>
            </li>
            <li>
              <Link to={`${sections.contact}`}>{sections.contact}</Link>
            </li>
          </ul>
        </nav>
        <Dropdown
          title=""
          defaultImg={langInfo.src}
          items={langs}
        />
      </header>
      <img className="wellcome-image" src={cabecalho} alt="Elas@Computação UFCG"/>
      <main id="main">
        <Section title={sections.about} className="section-about" color="#fff6f3">
          
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
            status={setAutoSupport(supports).icon} 
            statusText={setAutoSupport(supports).description}
          />
        </Section>
        <div className="division"></div>
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
        <div className="division"></div>
        <Section title={sections.projects} className="section-projects" color="#fff6f3">  
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
        <div className="division"></div>
        <Section title={sections.events} className="section-events" subtitle={buttonTexts.sectionEvents} link={`/${langInfo.ref}/schedule`}>
          {
            !hasEventsMonth(events) ? 
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
              description={noEvents}
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
        <div className="division"></div>
        <Section title={sections.partnerships} className="section-partnerships" color="#fff6f3">
        {partnerships.map(element => {
            return(
              <PictureLink text={element.title} href={element.href} pic={element.pic}/>
            );
          })}
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
          <span>© {new Date().getFullYear()} Elas@Computação</span>
        </div>
      </footer>
    </div>
  );
}
