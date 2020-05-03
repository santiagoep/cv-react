import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const Layout = ({ children }) => (
    <>
        <Header />
            {children}
        <Footer />
    </>
)

export default Layout;