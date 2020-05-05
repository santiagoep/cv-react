import moment from 'moment';

/** Assets Experience */
import MontecheloImage from './assets/static/experience/montechelo.svg';
import BecoImage from './assets/static/experience/beco.svg';
import LsjImage from './assets/static/experience/lsj.svg'
/** Assets Technologies */
import ReactImage from './assets/static/technologies/react.png';
import JsImage from './assets/static/technologies/js.png';
import SqlImage from './assets/static/technologies/sql.png';
import MysqlImage from './assets/static/technologies/mysql.png';
import FacebookadsImage from './assets/static/technologies/facebookads.png';
import PhotographyImage from './assets/static/technologies/photo.png';
import VueImage from './assets/static/technologies/vue.png';
import MongoImage from './assets/static/technologies/mongo.png';
import IllustratorImage from './assets/static/technologies/illustrator.png';
import PhotoshopImage from './assets/static/technologies/photoshop.png';
import FigmaImage from './assets/static/technologies/figma.png';
import FinalcutproImage from './assets/static/technologies/finalcutpro.png';
import PremiereImage from './assets/static/technologies/premiere.png';
import NodeImage from './assets/static/technologies/node.png';
import ExpressImage from './assets/static/technologies/express.png';
import HtmlImage from './assets/static/technologies/html.png';
import CssImage from './assets/static/technologies/css.png';
import JavaImage from './assets/static/technologies/java.png';
import JaxImage from './assets/static/technologies/jax.png';
import JsfImage from './assets/static/technologies/jsf.png';
import GitImage from './assets/static/technologies/git.png';
import PostgresImage from './assets/static/technologies/postgresql.png';
import PythonImage from './assets/static/technologies/python.png';
import DjangoImage from './assets/static/technologies/django.png';
import PhpImage from './assets/static/technologies/php.png';
import LaravelImage from './assets/static/technologies/laravel.png';
/** Assets Projects */
import PortfolioImage from './assets/static/projects/portfolioreact.png';
import OmniImage from './assets/static/projects/omni.jpeg';
import LodemonImage from './assets/static/projects/lodemon.svg';
import BothumanImage from './assets/static/projects/bothuman.png';
import WidgetImage from './assets/static/projects/widget.png';
import BotImage from './assets/static/projects/bot.svg';
/** Education */
import UnipanaImage from './assets/static/education/unipanamericana.png';
import PlatziImage from './assets/static/education/platzi.png';
import EDTeamImage from './assets/static/education/edteam.png';
import CertMindImage from './assets/static/education/certmind.png';

export default {
    menuIsVisble: window.innerWidth <= 768 ? false : true,
    jobs: [
        {
            position: "Semi-senior chatbot and integrations developer",
            company: "Montechelo",
            startDate: "dec. of 2019",
            endDate: "At present",
            location: "Bogotá D.C., Colombia",
            description: "Develop of chats and bots with NodeJS, Express, SocketIO, VueJS, Dialogflow and PostgreSQL. Integrations with differente platforms as official API of Whatsapp Business and Facebook Messenger.",
            image: MontecheloImage
        },
        {
            position: "Freelance",
            company: "Beco 360",
            startDate: "mar. of 2017",
            endDate: "at present",
            location: "Remote",
            description: "Independent develop of web apps, product photo and digital marketing.",
            image: BecoImage
        },
        {
            position: "Software Developer",
            company: "LSJ - Ecommerce",
            startDate: "mar. of 2017",
            endDate: "nov. of 2019",
            location: "Bogotá D.C., Colombia",
            description: "Develop of new fetures in ecommerce platform, landing pages and system for sales gestion. In the process, i was responsible of photograph, postproduction, promote and spread.",
            image: LsjImage
        }
    ],
    technologies: [
        {
            name: "Javascript",
            img: JsImage,
            date: moment("20170301", "YYYYMMDD").fromNow(),
        },
        {
            name: "HTML",
            img: HtmlImage,
            date: moment("20170301", "YYYYMMDD").fromNow(),
        },
        {
            name: "CSS",
            img: CssImage,
            date: moment("20170301", "YYYYMMDD").fromNow(),
        },
        {
            name: "SQL",
            img: SqlImage,
            date: moment("20170301", "YYYYMMDD").fromNow(),
        },
        {
            name: "MySQL",
            img: MysqlImage,
            date: moment("20170301", "YYYYMMDD").fromNow(),
        },
        {
            name: "Facebook ADS",
            img: FacebookadsImage,
            date: moment("20170301", "YYYYMMDD").fromNow(),
        },
        {
            name: "Node JS",
            img: NodeImage,
            date: moment("20180301", "YYYYMMDD").fromNow(),
        },
        {
            name: "Express JS",
            img: ExpressImage,
            date: moment("20180301", "YYYYMMDD").fromNow(),
        },
        {
            name: "GIT",
            img: GitImage,
            date: moment("20180301", "YYYYMMDD").fromNow(),
        },
        {
            name: "Final Cut Pro",
            img: FinalcutproImage,
            date: moment("20180301", "YYYYMMDD").fromNow(),
        },
        {
            name: "Adobe Premiere",
            img: PremiereImage,
            date: moment("20180301", "YYYYMMDD").fromNow(),
        },
        {
            name: "JAVA",
            img: JavaImage,
            date: "2 years",
        },
        {
            name: "React JS",
            img: ReactImage,
            date: moment("20190301", "YYYYMMDD").fromNow(),
        },
        {
            name: "Vue JS",
            img: VueImage,
            date: moment("20190301", "YYYYMMDD").fromNow(),
        },
        {
            name: "MongoDB",
            img: MongoImage,
            date: moment("20190301", "YYYYMMDD").fromNow(),
        },
        {
            name: "Photoshop",
            img: PhotoshopImage,
            date: moment("20190301", "YYYYMMDD").fromNow(),
        },
        {
            name: "Figma",
            img: FigmaImage,
            date: moment("20190301", "YYYYMMDD").fromNow(),
        },
        {
            name: "Photography",
            img: PhotographyImage,
            date: moment("20190301", "YYYYMMDD").fromNow(),
        },
        {
            name: "JAVA JSF",
            img: JsfImage,
            date: "a year",
        },
        {
            name: "PostgreSQL",
            img: PostgresImage,
            date: moment("20191101", "YYYYMMDD").fromNow(),
        },
        {
            name: "Python",
            img: PythonImage,
            date: "4 months",
        },
        {
            name: "Illustrator",
            img: IllustratorImage,
            date: moment("20191201", "YYYYMMDD").fromNow(),
        },
        {
            name: "Django",
            img: DjangoImage,
            date: "3 months",
        },
        {
            name: "PHP",
            img: PhpImage,
            date: "3 months",
        },
        {
            name: "Laravel",
            img: LaravelImage,
            date: "3 months",
        },
        {
            name: "JAVA JAX RS",
            img: JaxImage,
            date: "3 months",
        }
    ],
    projects: [
        {
            name: "Curriculum vitae",
            img: PortfolioImage,
            description: "Curriculum vitae and portfolio of Santiago EP",
            tags: ["ReactJS", "React Redux", "React Router", "CSS", "CSS BEM", "HTML", "Javascript"],
            url: "github.com/santiagoep/cv-react",
            type: "Own"
        },
        {
            name: "Omni",
            img: OmniImage,
            description: "Platform for receive and reply messages of multiple platforms. At moment i integrate Facebook Messenger to the platform.",
            tags: ["VueJS", "Vuex", "vue Router", "CSS", "HTML", "Javascript", "Websockets", "REST", "NodeJS", "Express", "MongoDB"],
            url: "github.com/beco360/omni-frontend",
            type: "Own"
        },
        {
            name: "Lodemon",
            img: LodemonImage,
            description: " Lodemon is a excellent way to manage errors with NodeJS. This library make easier the process of Logging, Debugging and Monitoring your projects.",
            tags: ["NodeJS"],
            url: "github.com/santiagoep/lodemon",
            type: "Own"
        },
        {
            name: "Bothuman",
            img: BothumanImage,
            description: "Platform for receive and reply messages of multiple platforms. At moment i integrate Facebook Messenger, Widget Web, Whatsapp Web and Whatsapp API Official to the platform.",
            tags: ["VueJS", "Redux", "Vue Router", "CSS", "HTML", "Javascript", "NodeJS", "Websockets", "REST"],
            type: "Collaborative"
        },
        {
            name: "Widget Web",
            img: WidgetImage,
            description: "Widget for chat support in a web page.",
            tags: ["Polymer", "HTML", "CSS", "REST", "Websockets"],
            type: "Collaborative"
        },
        {
            name: "Chatbots",
            img: BotImage,
            description: "Chats y bots integrated with Whatsapp Web, Whatsapp API Official, Widget Web and Facebook Messenger",
            tags: ["Dialogflow", "NodeJS", "Express", "Python", "Flask", "Rest"],
            type: "Collaborative"
        }
    ],
    education: [
        {
            name: "Unipanamericana",
            image: UnipanaImage,
            title: "Técnico en desarrollo de software",
            startDate: "2017",
            endDate: "2018"
        },
        {
            name: "Unipanamericana",
            image: UnipanaImage,
            title: "Tecnlogía en diseño de software",
            startDate: "2019",
            endDate: "2020"
        },
        {
            name: "Unipanamericana",
            image: UnipanaImage,
            title: "Ingeniería de Software",
            startDate: "2020",
            endDate: "2022",
        },
        {
            name: "Platzi",
            image: PlatziImage,
            title: "Online education",
            startDate: "2019",
            endDate: ""
        }
    ],
    courses: [
        {
            name: "Curso Básico de NodeJS",
            institute: "Platzi",
            image: PlatziImage,
        },
        {
            name: "Curso HTML y CSS",
            institute: "Platzi",
            image: PlatziImage,
        },
        {
            name: "Introducción a los negocios online",
            institute: "Platzi",
            image: PlatziImage,
        },
        {
            name: "Fundamentos de la gestón de proyectos",
            institute: "Platzi",
            image: PlatziImage,
        },
        {
            name: "Curso de JQuery a Javascript",
            institute: "Platzi",
            image: PlatziImage,
        },
        {
            name: "Curso de Prework: Buenas Prácticas y Entorno de Desarrollo",
            institute: "Platzi",
            image: PlatziImage,
        },
        {
            name: "Curso de responsive design",
            institute: "Platzi",
            image: PlatziImage,
        },
        {
            name: "Curso de WPO: Optimización de Carga de Sitios Web",
            institute: "Platzi",
            image: PlatziImage,
        },
        {
            name: "Curso profesional de Javascript",
            institute: "Platzi",
            image: PlatziImage,
        },
        {
            name: "Curso de programación básica",
            institute: "Platzi",
            image: PlatziImage,
        },
        {
            name: "Curso practico de HTML y CSS",
            institute: "Platzi",
            image: PlatziImage,
        },
        {
            name: "Curso profesional de GIT y Github",
            institute: "Platzi",
            image: PlatziImage,
        },
        {
            name: "Fundamentos de Javascript",
            institute: "Platzi",
            image: PlatziImage,
        },
        {
            name: "Frontend developer",
            institute: "Platzi",
            image: PlatziImage,
        },
        {
            name: "Curso de Google Suite",
            institute: "Platzi",
            image: PlatziImage,
        },
        {
            name: "Curso básico de VueJS",
            institute: "Platzi",
            image: PlatziImage,
        },
        {
            name: "Atención al cliente y soporte a usuarios",
            institute: "Platzi",
            image: PlatziImage,
        },
        {
            name: "Curso de Bootstrap",
            institute: "Platzi",
            image: PlatziImage,
        },
        {
            name: "Curso de CSS Grid Layout",
            institute: "Platzi",
            image: PlatziImage,
        },
        {
            name: "Curso de desarrollo web online",
            institute: "Platzi",
            image: PlatziImage,
        },
        {
            name: "Curso de marca personal",
            institute: "Platzi",
            image: PlatziImage,
        },
        {
            name: "Curso de finanzas personales",
            institute: "Platzi",
            image: PlatziImage,
        },
        {
            name: "Desarrollo web con Django",
            institute: "EDteam",
            image: EDTeamImage,
        }
    ],
    certifications: [
        {
            name: "Scrum Fundamentals",
            company: "CertMind",
            image: CertMindImage,
            expeditionDate: "01/2020",
            dueDate: "01/2025",
            credentialId: "136122669"
        }
    ]
}