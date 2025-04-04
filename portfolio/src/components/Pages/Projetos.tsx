import { Link } from "react-router-dom";
import styles from "./Projetos.module.css"
import Button from "../Inputs/Button";
import { FC } from "react";

const Projetos: FC = () => {
  return (
    <main className={styles.projetosMain}>
        <h1>Projetos nos quais participei</h1>
        <section className={styles.projectsView}>
            <div className={styles.projectCard}>
                <img src="/images/tccImage.jpeg" alt="Imagem do TCC" />
                <article className={styles.article}>    
                    <a href="#" className={styles.a}><Button nameButton="TCC"></Button></a>
                    <p>Refatoração do sistema de verificação de faltas acâdemicas da cólegio Técnico UNIVAP.</p>
                    <h3>Tecnologias:</h3>
                </article>
            </div>
            <div className={styles.projectCard}>
                <img src="/images/avenueImage.jpeg" alt="Imagem de veiculos sendo reconhecidos por câmera" />
                <article className={styles.article}>    
                    <a href="#" className={styles.a}><Button nameButton="Refatoração semafórica"></Button></a>
                    <p>Projeto de reconhecimento de tráfego urbano e refatoração semáforica em conjunto com professor do ITA (Em desenvolvimento).</p>
                    <h3>Tecnologias:</h3>
                </article>
            </div>
            <div className={styles.projectCard}>
                <img src="/images/certificado.jpeg" alt="Certificado de vencedor da maratona de programação Junior" />
                <article className={styles.article}>    
                    <a href="#" className={styles.a}><Button nameButton="Pyoneers"></Button></a>
                    <p>Vencedor junto do meu grupo Pyoneers da 13º maratona de programação Junior da Universidade do Vale do Paraiba em 2024.</p>
                    <h3>Tecnologias:</h3>
                </article>
            </div>
            <div className={styles.projectCard}>
                <img src="/images/chart.png" alt="Gráfico demonstrativo" />
                <article className={styles.article}>    
                    <a href="#" className={styles.a}><Button nameButton="Analise de cargas de SP"></Button></a>
                    <p>Projeto para análise gráfica de todas as exportações e importações feitas pelo Estado de São Paulo entre 2013 e 2023. (Em desenvolvimento)</p>
                    <h3>Tecnologias:</h3>
                </article>
            </div>
            <div className={styles.projectCard}>
                <img src="/images/trash-identifier.jpeg" alt="Demosntração de câmera reconhecendo residuos" />
                <article className={styles.article}>    
                    <a href="#" className={styles.a}><Button nameButton="Reconhecimento de resíduos"></Button></a>
                    <p>Projeto de reconhecimento de resíduos através de uma câmera (papelão, pilhas, plásticos diversos e metal).</p>
                    <h3>Tecnologias:</h3>
                </article>
            </div>
        </section>
    </main>
  );
};

export default Projetos;