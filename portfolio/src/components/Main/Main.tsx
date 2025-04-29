import React, { FC } from "react";
import styles from "./Main.module.css"
import Button from "../Inputs/Button";

const Main: FC = () => {
    return (
        <main className={styles.main}>
            <section className={styles.banner}>
                <div className={styles.intro}>
                    <div className={styles.title}>
                        <h1>Olá, eu sou o <a href=""><span className={styles.purpleTitle}>Vitor :)</span></a></h1>
                        <p>Desenvolvedor de Software</p>
                        <div className={styles.actions}>
                            <a className={styles.button1} href="">Baixe meu CV!</a>
                            <a className={styles.button2} href="">Contate-me!</a>
                        </div>
                    </div>
                </div>
                <div className={styles.profile}>
                    <img className={styles.img} src="/images/VitorSerpa2bc.png" alt="" />
                </div>
            </section>
            <section className={styles.about}>
                <h1>Sobre mim:</h1>
                <p>Olá, meu nome é <b>Vitor Serpa</b>, apaixonado por tecnologia e programação, atualmente estudo na <b>FATEC-SJC</b>, cursando <b>Desenvolvimento de Software Multiplataforma</b>. Busco em minha jornada me especializar no desenvolvimento WEB e possuo e grande interesse na área de inteligência artificial e estrutura de dados.</p>
            </section>
            <div className={styles.scrollDown}>
                <span className={styles.purpleTitle}>Role para baixo!</span>
                <div className={styles.arrowWrapper}>
                    <div className={styles.arrow}></div>
                </div>
            </div>
        </main>
    )
}

export default Main 