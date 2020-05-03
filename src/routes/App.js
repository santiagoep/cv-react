import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/** Containers */
import Home from '../containers/Home';
import Experience from '../containers/Experience';
import NotFound from '../containers/NotFound';

/** Components */
import Layout from '../components/Layout';

import '../assets/styles/App.scss';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/experience" component={Experience} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App;