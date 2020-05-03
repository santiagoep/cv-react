import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../assets/styles/components/Layout.scss';

const Layout = ({ children }) => (
    <>
        <Header />
        <div className="container">
            {children}
        </div>
        <Footer />
    </>
)

export default Layout;