import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { viewportChange } from './actions';
import App from './routes/App';

const initialState = {
    menuIsVisble: window.innerWidth <= 768 ? false : true,
    projects: [
        {
            company: "Platzi",
            job: "Frontend developer"
        },
        {
            company: "Rappi",
            job: "Backend developer"
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