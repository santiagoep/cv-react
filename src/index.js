import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { viewportChange } from './actions';
import App from './routes/App';

import MontecheloImage from './assets/static/montechelo.svg';
import BecoImage from './assets/static/beco.svg';
import LsjImage from './assets/static/lsj.svg'

const initialState = {
    menuIsVisble: window.innerWidth <= 768 ? false : true,
    jobs: [
        {
            id: 3,
            position: "Semi-senior chatbot and integrations developer",
            company: "Montechelo",
            startDate: "dec. of 2019",
            endDate: "At present",
            location: "Bogotá D.C., Colombia",
            description: "Develop of chats and bots with NodeJS, Express, SocketIO, VueJS, Dialogflow and PostgreSQL. Integrations with differente platforms as official API of Whatsapp Business and Facebook Messenger",
            image: MontecheloImage
        },
        {
            id: 2,
            position: "Freelance",
            company: "Beco 360",
            startDate: "mar. of 2017",
            endDate: "at present",
            location: "Remote",
            description: "Independent develop of web apps, product photo and digital marketing",
            image: BecoImage
        },
        {
            id: 1,
            position: "Software Developer",
            company: "LSJ - Ecommerce",
            startDate: "mar. of 2017",
            endDate: "nov. of 2019",
            location: "Bogotá D.C., Colombia",
            description: "Develop of new fetures in ecommerce platform, landing pages and system for sales gestion. In the process, i was responsible of photograph, postproduction, promote and spread",
            image: LsjImage
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