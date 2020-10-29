import icons from '../icons'
import cafeComElas from '../../assets/images/cafe-com-elas.png';
import hacktoberelas from '../../assets/images/hacktoberelas.png'
import raioxdelas from '../../assets/images/raiox-delas.png'
import dev from '../../assets/images/dev-elas.png'

export const sections = {
    about: "",
    panel: "",
    projects: "",
    events: "",
    contact: "",
    language: "",
    partnerships: "",
}

export const supports = {
    setembroAmarelo: {
        description: "",
        icon: icons.yellowRibbon,
    },
    outubroRosa: {
        description: "",
        icon: icons.pinkRibbon,
    },
    prideMonth: {
        description: "",
        icon: icons.lgbtFlag,
    }
}

export const projects = [
    {
        imageURL: cafeComElas,
        color: "#ded1c8",
        title: "Café com Elas", 
        description: "",
        href: "https://github.com/elasComputacao/CafeComElas"
    },
    {
        imageURL: raioxdelas,
        color: "",
        title: "Raio-X", 
        description: "",
        href: "https://github.com/elasComputacao/Raio-X"
    },
    {
        imageURL: hacktoberelas,
        color: "#072541",
        title: "HacktoberElas", 
        description: "",
        href: "https://github.com/elasComputacao/"
    },
    {
        imageURL: dev,
        color: "#e8e8e8",
        title: "DEV blog", 
        description: "",
        href: "https://dev.to/elascomputacao"
    }
]

export const events = [
    {
        title: "Café com Elas",
        description: '',
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
'',

'',

'' 
]

export const buttonTexts = {
    projectCard: "",
    sectionEvents: ""
}

export const noEvents = ""
