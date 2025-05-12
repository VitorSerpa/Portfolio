import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CargasSP.module.css";

const icons = ["python", "custom tkinter", "mysql"];

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
                                {icons.map((element, index) => (
                                    <div className={styles.svgWrapper}>
                                        <button className={styles.buttonSvg} onClick={() => handleClickIcon(element)}>
                                            <img
                                                key={index}
                                                src={`/svg/${element}.svg`}
                                                alt={element}
                                                className={styles.svg}
                                            />
                                        </button>
                                        <span className={styles.tooltipText}>{element.toUpperCase()}</span>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <img className={styles.video} src="/images/normalImages/tccImage1.png" alt="" />
                </div>
            </section>
            <section className={styles.description}>
                <div className={styles.projectDescription}>
                    <h1>Refatoração do sistema de registro de presença do Colégio UNIVAP</h1>
                    <p>Trabalho de conclusão de curso (TCC) que visa c</p>
                </div>
            </section>
        </div>
    );
};

export default Paint;
