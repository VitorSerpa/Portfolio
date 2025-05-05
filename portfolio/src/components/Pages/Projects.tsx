import { Link } from "react-router-dom";
import styles from "./Projects.module.css"
import ProjectCard from "../ProjectCard/ProjectCard";
import { FC } from "react";


const projectList = [
    {
        projectName: "Projeto de reconhecimento de veículos e refatoração de semáforos",
        normalImg: "/images/normalImages/avenueImage.jpeg",
        darkImg: "/images/darkImages/avenueImage.png",
        description: "Projeto de plataforma WEB e IA parasenvolvimento).",
        svgs: [
            "python", "yolo", "opencv", "google colab", "react"
        ],
        large: true
    },
    {
        projectName: "Refatoração do sistema de registro de presença do Colégio UNIVAP",
        normalImg: "/images/normalImages/tccImage.jpeg",
        darkImg: "/images/darkImages/tccImage.png",
        description: "Projeto de plataforma WEB e IA (Em desenvolvimento).",
        svgs: [
            "python", "mysql", "custom tkinter"
        ],
        large: false
    },
    {
        projectName: "Plataforma para análise gráfica de exportações e importações feitas pelo Estado de SP",
        normalImg: "/images/normalImages/analiseSP.png",
        darkImg: "/images/darkImages/analiseSP.png",
        description: "Projeto de plataforma WEB e IA  desenvolvimento).",
        svgs: [
            "html5", "css", "javascript", "mysql", "flask", "google colab", "pandas", "figma"
        ],
        large: false
    },
    {
        projectName: "Plataforma para análise gráfica de exportações e importações feitas pelo Estado de SP",
        normalImg: "/images/normalImages/analiseSP.png",
        darkImg: "/images/darkImages/analiseSP.png",
        description: "Projeto de plataforma WEB e IA  desenvolvimento).",
        svgs: [
            "html5", "css", "javascript", "mysql", "flask", "google colab", "pandas", "figma"
        ],
        large: false
    },
    {
        projectName: "Plataforma para análise gráfica de exportações e importações feitas pelo Estado de SP",
        normalImg: "/images/normalImages/analiseSP.png",
        darkImg: "/images/darkImages/analiseSP.png",
        description: "Projeto de plataforma WEB e IA  desenvolvimento).",
        svgs: [
            "html5", "css", "javascript", "mysql", "flask", "google colab", "pandas", "figma"
        ],
        large: false
    },
    {
        projectName: "Plataforma para análise gráfica de exportações e importações feitas pelo Estado de SP",
        normalImg: "/images/normalImages/analiseSP.png",
        darkImg: "/images/darkImages/analiseSP.png",
        description: "Projeto de plataforma WEB e IA  desenvolvimento).",
        svgs: [
            "html5", "css", "javascript", "mysql", "flask", "google colab", "pandas", "figma"
        ],
        large: false
    },
    {
        projectName: "Plataforma para análise gráfica de exportações e importações feitas pelo Estado de SP",
        normalImg: "/images/normalImages/analiseSP.png",
        darkImg: "/images/darkImages/analiseSP.png",
        description: "Projeto de plataforma WEB e IA  desenvolvimento).",
        svgs: [
            "html5", "css", "javascript", "mysql", "flask", "google colab", "pandas", "figma"
        ],
        large: false
    },
]

const Projetos: FC = () => {
    return (
        <main className={styles.projetosMain}>
            <h1>Projetos nos quais participei</h1>
            <section className={styles.projects}>
                <div className={styles.projectsSection}>
                    {projectList.map((project) => (
                        <ProjectCard
                            key={project.projectName}
                            projectName={project.projectName}
                            darkImg={project.darkImg}
                            normalImg={project.normalImg}
                            svgs={project.svgs}
                            className={`${project.large ? styles.projectLarge : ""}`} 
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Projetos