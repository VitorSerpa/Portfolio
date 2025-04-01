 import React, { FC } from "react";
 import styles from "./Main.module.css"
 import Button from "../Inputs/Button";

const Main: FC = () =>{
    return (
        <main className={styles.main}>
            <section className={styles.sectionWelcome}>
                <h2>Eu sou o Vitor!</h2>
                <p>
                    Meu nome é Vitor Serpa, atualmente estou cursando Desenvolvimento de Software Multiplataforma na FATEC-SJC. Apaixonado por tecnologia, 
                    estou sempre aberto para conhecer novas pessoas e realizar novos projetos!
                </p>
                <Button nameButton="Veja meus Projetos!"></Button>
            </section>
            <section className={styles.sectionImage}>
                <img className={styles.myImg} src="/images/VitorSerpa.png" alt="Vitor Serpa" />
            </section>
        </main>
    )
}

export default Main 