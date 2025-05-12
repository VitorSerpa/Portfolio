import React, { FC } from "react";
import styles from "./About.module.css";
import { useNavigate } from "react-router-dom";



const skillsList = [
    ["HTML", "html5"],
    ["CSS", "css"],
    ["SASS", "sass"],
    ["Javascript", "javascript"],
    ["Typescript", "typescript"],
    ["React", "react"],
    ["Node.JS", "node"],
    ["MySQL", "mysql"],
    ["Java", "java"],
    ["C#", "csharp"],
    ["Unity", "unity"],
    ["Python", "python"],
    ["Pandas", "pandas"],
    ["CTkinter", "custom tkinter"],
    ["Flask", "flask"],
    ["COLAB", "google colab"],
    ["OpenCV", "opencv"],
    ["YOLO", "yolo"],
];

const About: FC = () => {
    const navigate = useNavigate();

    const handleClickIcon = (icon: string) => {
        navigate("/techs", { state: icon });
    };

    return (
        <div className={styles.about}>
            <h1>Sobre mim:</h1>
            <section className={styles.welcomeSection}>
                <div className={styles.welcomeTextDiv}>
                    <h3>Brasileiro</h3>
                    <p>R. Capitão Alípio Neves Barbosa, 84 - Jardim Portugal, São José dos Campos - SP </p> <br />
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
                <div className={styles.actions}>
                    <h2>Tecnologias</h2>
                    <div className={styles.icons}>
                    {skillsList.map(([label, icon]) => (
                        <div className={styles.icon} key={icon}>
                            <button className={styles.iconButton} onClick={() => handleClickIcon(icon)}>
                                <p>{label}</p>
                                <img className={styles.iconConfig} src={`/svg/${icon}.svg`} alt={label} />
                            </button>
                        </div>
                    ))}
                </div>
                </div>
            </section>
            <section className={styles.projectsSection}>
                <h1>Projetos</h1>
            </section>
        </div>
    );
};

export default About;
