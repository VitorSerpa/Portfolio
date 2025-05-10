import { Link } from "react-router-dom";
import styles from "./Projects.module.css"
import ProjectCard from "../ProjectCard/ProjectCard";
import { FC } from "react";


const projectList = [
    {
        projectName: "Tecnologia de Reconhecimetno Automático de Veículos por Inteligência Artificial",
        normalImg: "/images/normalImages/traviaVideoGif.gif",
        darkImg: "/images/darkImages/avenueImage.png",
        description: "Projeto de plataforma WEB e IA parasenvolvimento).",
        svgs: [
            "python", "yolo", "opencv", "google colab"
        ],
        large: true,
        linkToProject: "/projetos/refatoracao"
    },
    {
        projectName: "Refatoração do sistema de registro de presença do Colégio UNIVAP",
        normalImg: "/images/normalImages/tccImage.jpeg",
        darkImg: "/images/darkImages/tccImage.png",
        description: "Projeto de plataforma WEB e IA (Em desenvolvimento).",
        svgs: [
            "python", "mysql", "custom tkinter"
        ],
        large: false,
        linkToProject: "/projetos/tcc"
    },
    {
        projectName: "Plataforma para análise gráfica de exportações e importações feitas pelo Estado de SP",
        normalImg: "/images/normalImages/chartGif.gif",
        darkImg: "/images/darkImages/analiseSP.png",
        description: "Projeto de plataforma WEB e IA  desenvolvimento).",
        svgs: [
            "html5", "css", "javascript", "mysql", "flask", "google colab", "pandas"
        ],
        large: false,
        linkToProject: "/projetos/cargasSP"
    },
    {
        projectName: "Vencedor da Maratona de programação Jr. UNIVAP 2024",
        normalImg: "/images/normalImages/certificado.jpeg",
        darkImg: "/images/darkImages/certificado.png",
        description: "Projeto de plataforma WEB e IA  desenvolvimento).",
        svgs: [
            "python","java"
        ],
        large: false,
        linkToProject: "/projetos/pyoneers"
    },
    {
        projectName: "Reconhecimento de resíduos reciclaveis com Visão Computacional",
        normalImg: "/images/normalImages/residuosVideoGif.gif",
        darkImg: "/images/darkImages/trash-identifier.png",
        description: "Projeto de plataforma WEB e IA  desenvolvimento).",
        svgs: [
            "python","opencv", "yolo", "google colab", 
        ],
        large: false,
        linkToProject: "/projetos/residuos"
    },
    {
        projectName: "Paint do Windows",
        gif: "/images/normalImages/paintGif.gif",
        normalImg: "/images/normalImages/paintGif.gif",
        darkImg: "/images/darkImages/paintImage.png",
        description: "Projeto de plataforma WEB e IA  desenvolvimento).",
        svgs: [
            "csharp"
        ],
        large: false,
        linkToProject: "/projetos/paint"
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
                            linkToProject={project.linkToProject}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Projetos