import { FC } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./CargasSP.module.css"

const icons = ["csharp"]

const Paint: FC = () => {

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
                           
                            <a href="https://github.com/VitorSerpa/CS-Paint" target="_blank" className={styles.seeMore}>Ver no GitHub</a>
                        </div>

                        <video className={styles.video} src="/videos/paintVideo.mp4" autoPlay controls></video>
                    </div>

                </div>
            </section>
            <section className={styles.description}>
                <div className={styles.projectDescription}>
                    <h1>Aplicação Gráfica Inspirada no Microsoft Paint</h1>
                    <p>
                        Projeto que desenvolvi durante meeu Técnico de Informática na UNIVAP para criação de formas geométricas diversas (Elipse, Circulo, Linha, Triangulo, Quadrado, Losango e Pentagono).
                        Com personalização de cores, expessura e tipo da linha. O aplicativo foi desenvolvido usando C# com a biblioteca Windows Forms que faz parte do .NET Framework. <br /><br />
                        Para a realização do desenho da elipse foi utilizado a equação, <b>paramétrica da elipse.</b> que é descrita nessa formula: <br /><br />
                        <b>x(t)=h+a⋅cos(t)</b> <br />
                        <b>y(t)=k+b⋅sin(t)</b><br /><br />

                        Para o retângulo foi utilizado a função <b>e.Graphics.DrawRectangle()</b> e já para as outra formas foi utilizado o <b>e.Graphics.DrawLine() </b>
                        com os devidos inputs de click do cursor.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Paint