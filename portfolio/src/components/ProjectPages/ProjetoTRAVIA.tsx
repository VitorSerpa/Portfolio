import { FC } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./CargasSP.module.css"

const icons = ["python", "yolo", "opencv", "google colab"]

const ProjetoTRAVIA: FC = () => {

    const navigate = useNavigate();

    const handleClickIcon = (icon: string) => {
        navigate('/techs', { state: icon });
    }

    return (
        <div className={styles.main}>
            <section className={styles.videoSection}>
                <div className={styles.videoWrapper}>
                    <div className={styles.videoHoverDescription}>
                        <div className={styles.info}>
                            <div>
                                {icons.map((element, index) => (
                                    <button className={styles.buttonSvg} onClick={() => handleClickIcon(element)}>
                                        <img key={index} src={`/svg/${element}.svg`} alt={element} className={styles.svg} />
                                    </button>

                                ))}
                            </div>
                            <a href="https://github.com/VitorSerpa/CS-Paint" target="_blank" className={styles.seeMore}>Ver no GitHub</a>
                        </div>
                    </div>

                    <video className={styles.video} src="/videos/traviaVideo.mp4" autoPlay controls></video>

                </div>
            </section>
            <section className={styles.description}>
                <div className={styles.projectDescription}>
                    <h1>T.R.A.V.I.A - Tecnologia de Reconhecimetno Automático de Veículos por Inteligência Artificial</h1>
                    <p>
                        Projeto que visa realizar o reconhecimento e contagem de veiculos afim de realizar uma refatoração semafórica
                        
                    </p>
                </div>
            </section>
        </div>
    )
}

export default ProjetoTRAVIA