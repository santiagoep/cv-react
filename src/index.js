import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
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

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);