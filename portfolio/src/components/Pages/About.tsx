import React, { FC } from "react";
import styles from "./About.module.css";

const About: FC = () => {
    return (
        <div className={styles.about}>
            <h1>Sobre Mim:</h1>
            <section className={styles.description}>
                <div className={styles.descriptionSection}>
                    <h2>Informações</h2>
                </div>
                <div className={styles.imageSection}>
                    <img className={styles.img} src="/images/VitorSerpa2bc.png" alt="Imagem do Autor do site Vitor Serpa" />
                </div>
            </section>
        </div>
    );
};

export default About;
