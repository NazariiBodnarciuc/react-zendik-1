import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Ingress_Logo.png"/>
        </header>
    )
};

export default Header;