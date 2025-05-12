import React, { FC } from "react";
import styles from "./About.module.css";
import { useNavigate } from "react-router-dom";

const icons = [
    "html5",
    "css",
    "sass",
    "javascript",
    "typescript",
    "react",
    "node",
    "mysql",
    "java",
    "csharp",
    "unity",
    "python",
    "pandas",
    "custom tkinter",
    "flask",
    "google colab",
    "opencv",
    "yolo",
];

const About: FC = () => {
    const navigate = useNavigate();

    const handleClickIcon = (icon: string) => {
        navigate("/techs", { state: icon });
    };

    return (
        <div className={styles.about}>
            <section className={styles.info}>
                {icons.map((element, index) => (
                    <div className={styles.svgWrapper}>
                        <button className={styles.buttonSvg} onClick={() => handleClickIcon(element)}>
                            <img key={index} src={`/svg/${element}.svg`} alt={element} className={styles.svg} />
                        </button>
                        <span className={styles.tooltipText}>{element.toUpperCase()}</span>
                    </div>
                ))}
            </section>
            <section className={styles.welcomeSection}>
                <h1><b>Vitor Serpa da Silva </b></h1>
                <div className={styles.description}>
                    <h2>Sobre mim:</h2>
                    <p>
                        Olá, meu nome é Vitor Serpa, apaixonado por tecnologia e programação, atualmente estudo na
                        FATEC-SJC, cursando Desenvolvimento de Software Multiplataforma. Busco me especializar no
                        desenvolvimento WEB, com grande interesse na área de inteligência artificial e estrutura de
                        dados.
                    </p>{" "}
                    <br />
                    <p>
                        Sou uma pessoa extrovertida, sociável e com excelente capacidade de adaptação. Tenho experiência
                        com trabalho em equipe, sendo colaborativo e comunicativo. Possuo resiliência diante de
                        desafios, sou proativo na busca por soluções e tenho facilidade para aprender com rapidez.
                        Valorizo a escuta ativa, organização e estou sempre em busca de crescimento pessoal e
                        profissional.
                    </p>
                </div>

                <aside className={styles.infos}>
                    <h2>Brasileiro</h2>
                    <p>R. Capitão Alípio Neves Barbosa, 84 - Jardim Portugal, São José dos Campos - SP </p> <br />
                    <p>
                        <b>Telefone:</b> <a href="https://wa.me/12981312111" target="_blank">12981312111</a>
                    </p>
                    <p>
                        <b>Email:</b> <a href="mailto:vitorserpa123@gmail.com" target="_blank">vitorserpa123@gmail.com</a>
                    </p>
                    <p>
                        <b>Telefone:</b> <a href="https://wa.me/12981312111"target="_blank">GitHub</a>
                    </p>
                    <p>
                        <b>Linkedin:</b> <a href="https://www.linkedin.com/in/vitor-serpa-925b46322/" target="_blank">Linkedin</a>
                    </p>
                </aside>
                <h1><b>Formação acadêmica</b></h1>
                <section className={styles.formation1}>
                    <h2><b>Desenvolvimento de Software Multiplataforma – 2025 | FATEC | </b></h2>
                    <ul>
                        <li>Engenharia de Software.</li>
                        <li>Metodologia agil SCRUM </li>
                        <li>Desenvolvimento e desing WEB fullstack. </li>
                        <li>Modelagem de banco de dados </li>
                        <li>Algoritmos em C (ponteiros, structs, etc) (Em estudo). </li>
                    </ul>
                </section>
                <section className={styles.formation2}>
                    <h2><b>Ensino Médio Técnico em Informática - Completo | Colégio Técnico UNIVAP | </b></h2>
                    <ul>
                        <li>Desenvolvimento WEB: Node.js, Typescript, REST API, React, PHP. </li>
                        <li>Trabalhos com bancos de dados (MySQL, MongoDB) . </li>
                        <li>Desenvolvimento de programas gráficos em C#. </li>
                        <li>Python (pandas, matplotlib, etc).</li>
                        <li>Tecnologias como Unity2D, RAD (.NET Framework), Android Studio (Kotlin). </li>
                        <li>Programação orientada a objeto. </li>
                    </ul>
                </section>
            </section>
        </div>
    );
};

export default About;
