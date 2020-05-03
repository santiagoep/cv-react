import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

/** Containers */
import Home from '../containers/Home';
import Experience from '../containers/Experience';
import NotFound from '../containers/NotFound';

/** Components */
import Layout from '../components/Layout';

import '../assets/styles/App.scss';

const App = () => (
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/experience" component={Experience} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </HashRouter>
)

export default App;