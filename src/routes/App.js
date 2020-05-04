import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

/** Containers */
import Home from '../containers/Home';
import Projects from '../containers/Projects';
import Experience from '../containers/Experience';
import Technlogies from '../containers/Technologies';
import NotFound from '../containers/NotFound';

/** Components */
import Layout from '../components/Layout';

import '../assets/styles/App.scss';

const App = () => (
    <HashRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/experience" component={Experience} />
                <Route exact path="/technologies" component={Technlogies} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </HashRouter>
)

export default App;