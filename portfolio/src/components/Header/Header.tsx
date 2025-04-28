import React from "react";
import styles from "./Header.module.css"

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a className={styles.a} href="/">Inicio</a>
                <a className={styles.a} href="/sobre">Sobre</a>
                <a className={styles.a} href="/projetos">Projetos</a>
            </nav>
        </header>);
};

export default Header