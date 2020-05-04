import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { viewportChange } from './actions';
import App from './routes/App';

import initialState from './initialState.js';

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