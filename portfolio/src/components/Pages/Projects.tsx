import { Link } from "react-router-dom";
import styles from "./Projects.module.css"
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
                    <a href="/projetos/tcc" className={styles.a}><Button nameButton="TCC"></Button></a>
                    <p>Refatoração do sistema de registros de presenças acâdemicas do cólegio Técnico UNIVAP.</p>
                    <div className={styles.technologies}>
                        <h3>Tecnologias:</h3> 
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/python.svg"} alt="YOLO Icon" />
                            <span className={styles.tooltipText}>PYTHON</span>
                        </div>
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/mysql.svg"} alt="OPENCV Icon" />
                            <span className={styles.tooltipText}>MYSQL</span>
                        </div>
                    </div>
                </article>
            </div>
            <div className={styles.projectCard}>
                <img src="/images/avenueImage.jpeg" alt="Imagem de veiculos sendo reconhecidos por câmera" />
                <article className={styles.article}>    
                    <a href="/projetos/refatoracao" className={styles.a}><Button nameButton="Refatoração semafórica"></Button></a>
                    <p>Projeto de plataforma WEB e IA para reconhecimento de tráfego urbano e refatoração semáforica em conjunto com professor do ITA (Em desenvolvimento).</p>
                    <div className={styles.technologies}>
                        <h3>Tecnologias:</h3> 
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/react.svg"} alt="REACT Icon" />
                            <span className={styles.tooltipText}>REACT</span>
                        </div>
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/javascript.svg"} alt="JAVASCRIPT Icon" />
                            <span className={styles.tooltipText}>JAVASCRIPT</span>
                        </div>
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/css.svg"} alt="CSS Icon" />
                            <span className={styles.tooltipText}>CSS</span>
                        </div>
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/yolo.svg"} alt="YOLO Icon" />
                            <span className={styles.tooltipText}>YOLOV8</span>
                        </div>
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/opencv.svg"} alt="OPENCV Icon" />
                            <span className={styles.tooltipText}>OpenCV</span>
                        </div>
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/python.svg"} alt="Python Icon" />
                            <span className={styles.tooltipText}>Python</span>
                        </div>
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/googlecolab.svg"} alt="Google Colab Icon" />
                            <span className={styles.tooltipText}>Google Colab</span>
                        </div>
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/figma.svg"} alt="FIGMA Icon" />
                            <span className={styles.tooltipText}>FIGMA</span>
                        </div>
                    </div>
                </article>
            </div>
            <div className={styles.projectCard}>
                <img src="/images/chart.png" alt="Gráfico demonstrativo" />
                <article className={styles.article}>    
                    <a href="#" className={styles.a}><Button nameButton="Analise de cargas de SP"></Button></a>
                    <p>Projeto para análise gráfica de todas as exportações e importações feitas pelo Estado de São Paulo entre os anos de 2013 e 2023. (Em desenvolvimento)</p>
                    <div className={styles.technologies}>
                        <h3>Tecnologias:</h3> 
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/html5.svg"} alt="HTML Icon" />
                            <span className={styles.tooltipText}>HTML5</span>
                        </div>
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/css.svg"} alt="CSS Icon" />
                            <span className={styles.tooltipText}>CSS</span>
                        </div>
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/javascript.svg"} alt="JAVASCRIPT Icon" />
                            <span className={styles.tooltipText}>JAVASCRIPT</span>
                        </div>
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/python.svg"} alt="Python Icon" />
                            <span className={styles.tooltipText}>Python</span>
                        </div>
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/flask.svg"} alt="Flask Icon" />
                            <span className={styles.tooltipText}>FLASK</span>
                        </div>
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/googlecolab.svg"} alt="Google COLAB Icon" />
                            <span className={styles.tooltipText}>Google COLAB</span>
                        </div>
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/figma.svg"} alt="FIGMA Icon" />
                            <span className={styles.tooltipText}>FIGMA</span>
                        </div>
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/mysql.svg"} alt="MySQL Icon" />
                            <span className={styles.tooltipText}>MYSQL</span>
                        </div>
                    </div>
                </article>
            </div>
            <div className={styles.projectCard}>
                <img src="/images/certificado.jpeg" alt="Certificado de vencedor da maratona de programação Junior" />
                <article className={styles.article}>    
                    <a href="/projetos/pyoneers" className={styles.a}><Button nameButton="Pyoneers"></Button></a>
                    <p>Vencedor junto do meu grupo Pyoneers da 13º maratona de programação Junior da Universidade do Vale do Paraiba em 2024.</p>
                    <div className={styles.technologies}>
                        <h3>Tecnologias:</h3> 
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/python.svg"} alt="PYTHON Icon" />
                            <span className={styles.tooltipText}>PYTHON</span>
                        </div>
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/java.svg"} alt="JAVA Icon" />
                            <span className={styles.tooltipText}>JAVA</span>
                        </div>
                    </div>
                </article>
            </div>
            <div className={styles.projectCard}>
                <img src="/images/trash-identifier.jpeg" alt="Demosntração de câmera reconhecendo residuos" />
                <article className={styles.article}>    
                    <a href="#" className={styles.a}><Button nameButton="Reconhecimento de resíduos"></Button></a>
                    <p>Projeto de reconhecimento de resíduos através de uma câmera (papelão, pilhas, plásticos diversos e metal).</p>
                    <div className={styles.technologies}>
                        <h3>Tecnologias:</h3> 
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/python.svg"} alt="Python Icon" />
                            <span className={styles.tooltipText}>PYTHON</span>
                        </div>
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/yolo.svg"} alt="YOLO Icon" />
                            <span className={styles.tooltipText}>YOLOV8</span>
                        </div>
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/opencv.svg"} alt="OPENCV Icon" />
                            <span className={styles.tooltipText}>OpenCV</span>
                        </div>
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/googlecolab.svg"} alt="Google COLAB Icon" />
                            <span className={styles.tooltipText}>Google COLAB</span>
                        </div>
                    </div>
                </article>
            </div>
            <div className={styles.projectCard}>
                <img src="/images/portfolio.png" alt="Meu portfolio" />
                <article className={styles.article}>    
                    <a href="#" className={styles.a}><Button nameButton="Portfolio"></Button></a>
                    <p>Meu primeiro portfólio!!.</p>
                    <div className={styles.technologies}>
                        <h3>Tecnologias:</h3> 
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/html5.svg"} alt="HTML Icon" />
                            <span className={styles.tooltipText}>HTML5</span>
                        </div>
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/css.svg"} alt="CSS Icon" />
                            <span className={styles.tooltipText}>CSS</span>
                        </div>
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/javascript.svg"} alt="JAVASCRIPT Icon" />
                            <span className={styles.tooltipText}>JAVASCRIPT</span>
                        </div>
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/react.svg"} alt="REACT Icon" />
                            <span className={styles.tooltipText}>REACT</span>
                        </div>
                        <div className={styles.tooltip}>
                            <img className={styles.svg} src={"/svg/figma.svg"} alt="FIGMA Icon" />
                            <span className={styles.tooltipText}>FIGMA</span>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    </main>
  );
};

export default Projetos;