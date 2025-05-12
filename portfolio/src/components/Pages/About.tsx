import React, { FC } from "react";
import styles from "./About.module.css";

const About: FC = () => {
    return (
        <div className={styles.about}>
            <h1>Sobre Mim:</h1>
            <section className={styles.description}>
                <div className={styles.descriptionSection}>
                    <h2>Informações:</h2>
                    <div>
                        <h3>Brasileiro</h3>
                        <p>R. Capitão Alípio Neves Barbosa, 84 - Jardim Portugal, São José dos Campos - SP </p>
                        <p>
                            <b>
                                Olá, meu nome é Vitor Serpa, apaixonado por tecnologia e programação, atualmente
                                estudo na FATEC-SJC, cursando Desenvolvimento de Software Multiplataforma.
                                Busco me especializar no desenvolvimento WEB, com grande interesse na área de
                                inteligência artificial e estrutura de dados.
                            </b>
                        </p>{" "}
                        <br />
                        <p>
                            <b>
                                Sou uma pessoa extrovertida, sociável e com excelente capacidade de adaptação. Tenho
                                experiência com trabalho em equipe, sendo colaborativo e comunicativo.
                                Possuo resiliência diante de desafios, sou proativo na busca por soluções e tenho
                                facilidade para aprender com rapidez. Valorizo a escuta ativa, organização e estou
                                sempre em busca de crescimento pessoal e profissional.
                            </b>
                        </p>
                    </div>
                    <h2>Formação acadêmica:</h2>
                    <h3>Desenvolvimento de Software Multiplataforma – 1º Semestre | FATEC |</h3>
                </div>
                <div className={styles.imageSection}>
                    <img
                        className={styles.img}
                        src="/images/VitorSerpa2bc.png"
                        alt="Imagem do Autor do site Vitor Serpa"
                    />
                    <div className={styles.actions}>
                            <a className={styles.button1} href="">
                                Baixe meu CV!
                            </a>
                            <a className={styles.button2} href="#contato">
                                Contate-me!
                            </a>
                        </div>
                </div>
            </section>
        </div>
    );
};

export default About;
