import React from "react";
import styles from "./Header.module.css"

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div>
                <h1>Vitor Serpa da Silva</h1>
            </div>
            <nav className={styles.nav}>
                <a href="#">Sobre</a>
                <a href="#">Contato</a>
                <a href="#">Projetos</a>
            </nav>
        </header>);
};

export default Header