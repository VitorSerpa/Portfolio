import React, { FC } from "react";
import styles from "./About.module.css"

const About: FC = () => {
    return (
        <div className={styles.about}>

            <div className={styles.description}>

                <h1>Meu nome é Vitor Serpa da Silva.</h1>
                <p className={styles.p}>
                    Apaixonado por tecnologia, atualmente estou cursando Desenvolvimento de Software
                    Multiplataforma na FATEC-SJC. Com experiências anteriores no ensino médio técnico da UNIVAP, tive
                    a oportunidade de realizar a conclusão do meu TCC, apresentar projetos no <a className={styles.a} href="https://pitsjc.org.br" target="blank"><b>PIT</b></a> (Parque de Inovação Tecnológica)
                    e desenvolver uma plataforma de reconhecimento de veículos em conjunto com um professor do <a href="http://www.ita.br"><b>ITA</b></a>, entre outros projetos.
                </p>
                <p className={styles.p}>
                    Na FATEC, neste primeiro semestre, eu e meu time estamos desenvolvendo um projeto de análise gráfica das importações e exportações no Estado de SP
                    entre os anos de 2013 e 2023. Está sendo uma experiência bastante enriquecedora. Estou atuando como P.O (Product Owner) e tenho gostado bastante
                    de aprender e desenvolver projetos com a metodologia SCRUM!
                </p>
                <p className={styles.p}>
                    Atualmente, estou em busca de uma oportunidade de estágio ou contrato CLT.
                </p>
            </div>
            <img className={styles.img} src="/images/VitorSerpa2.png" alt="Imagem do Autor do site Vitor Serpa" />
        </div>
    )
}

export default About