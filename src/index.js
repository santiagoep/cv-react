import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import moment from 'moment';
import reducer from './reducers';
import { viewportChange } from './actions';
import App from './routes/App';

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

const initialState = {
    menuIsVisble: window.innerWidth <= 768 ? false : true,
    jobs: [
        {
            position: "Semi-senior chatbot and integrations developer",
            company: "Montechelo",
            startDate: "dec. of 2019",
            endDate: "At present",
            location: "Bogotá D.C., Colombia",
            description: "Develop of chats and bots with NodeJS, Express, SocketIO, VueJS, Dialogflow and PostgreSQL. Integrations with differente platforms as official API of Whatsapp Business and Facebook Messenger",
            image: MontecheloImage
        },
        {
            position: "Freelance",
            company: "Beco 360",
            startDate: "mar. of 2017",
            endDate: "at present",
            location: "Remote",
            description: "Independent develop of web apps, product photo and digital marketing",
            image: BecoImage
        },
        {
            position: "Software Developer",
            company: "LSJ - Ecommerce",
            startDate: "mar. of 2017",
            endDate: "nov. of 2019",
            location: "Bogotá D.C., Colombia",
            description: "Develop of new fetures in ecommerce platform, landing pages and system for sales gestion. In the process, i was responsible of photograph, postproduction, promote and spread",
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
    ]
}

const store = createStore(reducer, initialState);

window.addEventListener('resize', ev => {
    store.dispatch(viewportChange(ev.target))
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);