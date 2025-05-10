import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CargasSP.module.css";

const icons = ["python", "java"];

const Paint: FC = () => {
    const navigate = useNavigate();

    const handleClickIcon = (icon: string) => {
        navigate("/techs", { state: icon });
    };

    return (
        <div className={styles.main}>
            <section className={styles.videoSection}>
                <div className={styles.videoWrapper}>
                    <div className={styles.videoHoverDescription}>
                        <div className={styles.info}>
                            <div>
                                {icons.map((element, index) => (
                                    <button className={styles.buttonSvg} onClick={() => handleClickIcon(element)}>
                                        <img
                                            key={index}
                                            src={`/svg/${element}.svg`}
                                            alt={element}
                                            className={styles.svg}
                                        />
                                    </button>
                                ))}
                            </div>
                            <a href="https://github.com/VitorSerpa/CS-Paint" target="_blank" className={styles.seeMore}>
                                Baixar Certificado
                            </a>
                        </div>
                    </div>

                    <img className={styles.video} src="/images/normalImages/certificado.jpeg" alt="" />
                </div>
            </section>
            <section className={styles.description}>
                <div className={styles.projectDescription}>
                    <h1>Vencedor da 13ª maratona de Programação Jr. da Universidade do Vale do Paraiba</h1>
                    <p>
                        Em conjunto do meu grupo Pyoneers participamos e ganhamos da 13ª maratona de Programação Jr. da
                        Universidade do Vale do Paraiba, em que exigiu de nós uma grande coalaboração, trabalho em
                        equipe, e habilidade de resolução de problemas, que foi extremamente gratificante conseguirmos a
                        vitoria
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Paint;
