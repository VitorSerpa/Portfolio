import React from "react";
import styles from "./Header.module.css"
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();


    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a className={styles.a} href="/">Inicio</a>
                <a className={styles.a} href="/sobre">Sobre</a>
                <a className={styles.a} href="/projetos">Projetos</a>
            </nav>
            {location.pathname !== '/' && (
                <button className={styles.back} onClick={() => navigate(-1)}>Voltar</button>
            )}
        </header>);
};

export default Header