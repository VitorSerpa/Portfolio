import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./Main.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useNavigate } from 'react-router-dom';


const Main: FC = () => {

    const navigate = useNavigate();

    const handleClickIcon = (icon:string) =>{
        navigate('/techs', { state: icon});
    }
    
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
        ["YOLO", "yolo"]
    ];

    const projectList = [
        {
            projectName: "Projeto de reconhecimento de veículos e refatoração de semáforos",
            normalImg: "/images/normalImages/avenueImage.jpeg",
            darkImg: "/images/darkImages/avenueImage.png",
            description: "Projeto de plataforma WEB e IA parasenvolvimento).",
            svgs: [
                "python", "yolo", "opencv", "google colab", "react"
            ]
        },
        {
            projectName: "Refatoração do sistema de registro de presença do Colégio UNIVAP",
            normalImg: "/images/normalImages/tccImage.jpeg",
            darkImg: "/images/darkImages/tccImage.png",
            description: "Projeto de plataforma WEB e IA (Em desenvolvimento).",
            svgs: [
                "python", "mysql", "custom tkinter"
            ]
        },
        {
            projectName: "Plataforma para análise gráfica de exportações e importações feitas pelo Estado de SP",
            normalImg: "/images/normalImages/analiseSP.png",
            darkImg: "/images/darkImages/analiseSP.png",
            description: "Projeto de plataforma WEB e IA  desenvolvimento).",
            svgs: [
                "html5", "css", "javascript", "mysql", "flask", "google colab", "pandas", "figma"
            ]
        },
        
    ]

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
                    <img className={styles.img} src="/images/VitorSerpa2bc.png" alt="Vitor Serpa" />
                </div>
            </section>

            <section className={styles.about}>
                <h1>Sobre mim:</h1>
                <p>Olá, meu nome é <b>Vitor Serpa</b>, apaixonado por tecnologia e programação. Atualmente estudo na <b>FATEC-SJC</b>, cursando <b>Desenvolvimento de Software Multiplataforma</b>. Busco me especializar no desenvolvimento WEB, com grande interesse na área de inteligência artificial e estrutura de dados.</p>
            </section>

            <section className={`${styles.skills}`}>
                <h1>Habilidades:</h1>
                <div className={styles.icons}>
                    {skillsList.map(([label, icon]) => (
                        <div
                            className={styles.icon} key={icon}
                        >
                            <button className={styles.iconButton} onClick={() => handleClickIcon(icon)}>
                                <p>{label}</p>
                                <img className={styles.iconConfig} src={`/svg/${icon}.svg`} alt={label} />
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            <section className={styles.projects}>
                <h1>Projetos:</h1>
                <h2>Destaques:</h2>
                <div className={styles.projectsSection}>
                    {projectList.map((project) => (
                        <ProjectCard
                            key={project.projectName}
                            projectName={project.projectName}
                            darkImg={project.darkImg}
                            normalImg={project.normalImg}
                            svgs={project.svgs}
                        />
                    ))}
                </div>
                <div className={styles.linkDiv}>
                    <a href="/projetos">Veja meus projetos!</a>
                </div>
            </section>
        </main>
    );
};

export default Main;