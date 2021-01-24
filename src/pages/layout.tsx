import React from 'react';
import { Header } from '../components/Header';

import '../styles/index.scss';

export const Layout = ({ children }) => {
    return (
        <div className="container">
            <Header />
            {children}
        </div>
    )
}