import icons from '../icons'
import cafeComElas from '../../assets/images/cafe-com-elas.png';
import hacktoberelas from '../../assets/images/hacktoberelas.png'
import raioxdelas from '../../assets/images/raiox-delas.png'

export const sections = {
    about: "About",
    panel: "Panel",
    projects: "Projects",
    events: "Events",
    contact: "Contact",
    language: "Language",
}

export const supports = {
    setembroAmarelo: {
        description: "Elas@Computação supports the suicide prevention campaign. If you need help, talk about it and contact a professional.",
        icon: icons.yellowRibbon,
    },
    outubroRosa: {
        description: "Elas@Computação supports the breast cancer prevention campaing.",
        icon: icons.pinkRibbon,
    },
    prideMonth: {
        description: "Elas@Computação supports the LGBTQIA+ community and all the forms of love.",
        icon: icons.lgbtFlag,
    }
}

export const projects = [
    {
        imageURL: cafeComElas,
        color: "#ded1c8",
        title: "Café com Elas", 
        description: "The “Café com Elas” promote talks with IT women to motivate the debate about the area, our space, role and also create a friendly environment that the community can participate in.",
        href: "https://github.com/elasComputacao/CafeComElas"
    },
    {
        imageURL: raioxdelas,
        color: "",
        title: "Raio-X", 
        description: "A web page created to demonstrate information about the women participation in bachelor of Computer Science at the Federal University of Campina Grande and alert and motivate the IT women's community in ours and others universities.",
        href: "https://github.com/elasComputacao/Raio-X"
    },
    {
        imageURL: hacktoberelas,
        color: "#072541",
        title: "HacktoberElas", 
        description: "Want to celebrate the open source with the Elas@Computação? The HacktoberElas was created to motivate, initiate and prepare all the community to contribute with open source softwares!",
        href: "https://github.com/elasComputacao/"
    }
]

export const events = [
    {
        title: "Café com Elas",
        description: '"Café com Elas" on the schedule of the Jornada Acadêmica Computação@UFCG',
        day: "5",
        month: "11",
        year: "2020",
        time: "20h",
        local: "Discord CCC",
        pageURL: "",
        eventURL: "",
    },
]

export const bio = [
'We are a brazilian community, created at May 2017, in Federal University of Campina Grande, in order to bring more women to the Computer Science graduation and generate a support network and more visibility, guided by sorority and the IT girl empowerment.',

'Currently, only about 20% of people working in the IT area in Brazil are women. This is due to a range of facts, since the school, that girls don’t have the same incentive as boys to the STEM (Science, Technology, Engineering and Math) area, until the academy, that promotes the feminine dropout, because the lack of representativeness isn’t welcoming.',

'That’s why Elas@Computação has the objective to motivate that girls to be part of and also provide visibility to the women in the IT area, seeking to reduce the gender inequality in this context.' 
]

export const buttonTexts = {
    projectCard: "Check",
    sectionEvents: "Check the schedule"
}