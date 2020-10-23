import icons from '../icons'
import cafeComElas from '../../assets/images/cafe-com-elas.png';
import hacktoberelas from '../../assets/images/hacktoberelas.png'
import raioxdelas from '../../assets/images/raiox-delas.png'
import dev from '../../assets/images/dev-elas.png'

export const sections = {
    about: "Sobre",
    panel: "Painel",
    projects: "Projetos",
    events: "Eventos",
    contact: "Contatos",
    language: "Idiomas",
    partnerships: "Parcerias",
}

export const supports = {
    setembroAmarelo: {
        description: "O Elas@Computação apoia a campanha do Setembro Amarelo em prevenção ao suicídio. Se você estiver passando por problemas relacionados a sua saúde mental ou conhece alguém que está passando por alguma dificuldade, procure ajuda profissional.",
        icon: icons.yellowRibbon,
    },
    outubroRosa: {
        description: "O Elas@Computação apoia a campanha do Outubro Rosa em prevenção ao câncer de mama.",
        icon: icons.pinkRibbon,
    },
    prideMonth: {
        description: "O Elas@Computação é favorável a toda e qualquer forma de amor ❤️.",
        icon: icons.lgbtFlag,
    }
}

export const projects = [
    {
        imageURL: cafeComElas,
        color: "#ded1c8",
        title: "Café com Elas", 
        description: "O Café com Elas promove conversas e palestras de mulheres da TI, para estimular discussões voltadas para a área, nosso lugar, espaço e papel, buscando criar um ambiente acolhedor para a participação das meninas na comunidade.",
        href: "https://github.com/elasComputacao/CafeComElas"
    },
    {
        imageURL: raioxdelas,
        color: "",
        title: "Raio-X", 
        description: "Um ambiente web criado com o intuito de mostrar informações sobre a participação das mulheres no curso de Bacharelado em Ciência da Computação na Universidade Federal de Campina Grande, para alertar e motivar a comunidade feminina de TI dentro e fora da UFCG.",
        href: "https://github.com/elasComputacao/Raio-X"
    },
    {
        imageURL: hacktoberelas,
        color: "#072541",
        title: "HacktoberElas", 
        description: "Quer celebrar o opensource com o Elas@Computação? O HacktoberElas é uma iniciativa criada com o intuito de instigar, iniciar e preparar a comunidade em geral a contribuir com softwares livres!",
        href: "https://github.com/elasComputacao/"
    },
    {
        imageURL: dev,
        color: "#e8e8e8",
        title: "Blog no DEV", 
        description: "Estamos no DEV! Um espaço para nossa comunidade produzir e publicar conteúdos sobre tecnologia em geral e também levantar a participação de mulheres brasileiras da TI na plataforma. Segue a gente no DEV!",
        href: "https://dev.to/elascomputacao"
    }
]

export const events = [
    {
        title: "Café com Elas",
        description: '"Café com Elas" na programação da Jornada Acadêmica Computação@UFCG.',
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
    'Somos uma comunidade nascida na Universidade Federal de Campina Grande em maio de 2017, com o intuito de trazer mais mulheres para o curso de Ciência da Computação e de gerar uma rede de apoio e visibilidade pautada na sororidade e no empoderamento de todas as meninas que fazem parte desse meio.',

    'Atualmente, cerca de apenas 20% das pessoas que atuam na área de TI no Brasil são mulheres. Isso se deve a uma gama de fatores que vão desde o ambiente escolar, que não incentiva o interesse feminino nas STEM (sigla em inglês para "Ciências, Tecnologias, Engenharias e Matemática"), até na própria vivência acadêmica, que promove a evasão de meninas que adentram em cursos da área pela falta de acolhimento e representatividade.',
        
    'Por isso, o Elas@Computação tem como principal objetivo incentivar a entrada, perpetuar e enaltecer as mulheres que já estão e as que desejam adentrar no mundo das Tecnologias da Informação, buscando mudar o cenário de desigualdade de gênero existente nesse contexto.'
           
]

export const buttonTexts = {
    projectCard: "Confira",
    sectionEvents: "Confira a agenda"
}

export const noEvents = "Nenhum evento confirmado para este mês"