import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CargasSP.module.css";

const icons = ["python"];

const Residuos: FC = () => {
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
                                    <button
                                        className={styles.buttonSvg}
                                        onClick={() => handleClickIcon(element)}
                                    >
                                        <img
                                            key={index}
                                            src={`/svg/${element}.svg`}
                                            alt={element}
                                            className={styles.svg}
                                        />
                                    </button>
                                    <span className={styles.tooltipText}>
                                        {element.toUpperCase()}
                                    </span>
                                </div>
                            ))}
                            <a
                                href="https://github.com/Vitor-Lucas/Trash-Identifier"
                                target="_blank"
                                className={styles.seeMore}
                            >
                                Ver no GitHub
                            </a>
                        </div>
                    </div>

                    <video
                        className={styles.video}
                        src="/videos/residuosVideo.mp4"
                        autoPlay
                        controls
                    ></video>
                </div>
                <aside className={styles.metodology}>
                    <h1 className={styles.metodologyTitle}>Resultados:</h1>
                    <p>
                        Foi possível fazer o reconhecimento de diferentes tipos
                        de materiais: sacolas plásticas, garrafas, aneis,
                        correntes, latinhas, diferentes pedaços de papelão e
                        diferentes pilhas em um fundo branco, com grande
                        porcentagem de precisão.
                    </p>
                </aside>
                <aside className={styles.metodology}>
                    <h1 className={styles.metodologyTitle}>Conclusão:</h1>
                    <p>
                        Foi possível fazer o reconhecimento de diferentes tipos
                        de materiais: sacolas plásticas, garrafas, aneis,
                        correntes, latinhas, diferentes pedaços de papelão e
                        diferentes pilhas em um fundo branco, com grande
                        porcentagem de precisão.
                    </p>
                </aside>
            </section>
            <section className={styles.description}>
                <div className={styles.projectDescription}>
                    <h1>
                        Reconhecimento de resíduos reciclaveis através de visão
                        computacional
                    </h1>
                    <p>
                        O objetivo da realização desse projeto é criar um
                        sistema de separação automática de lixo, utilizando
                        visão computacional como principal fator para analisar e
                        facilitar a separação dos resíduos, colocando menos
                        pessoas em situações de contato com a sujeira e
                        possíveis riscos à saúde.
                    </p>
                    <aside className={styles.metodology}>
                        <h1 className={styles.metodologyTitle}>Metodologia:</h1>
                        <p>
                            : Foi utilizado um dataset - banco com diversas
                            imagens de determinado tópico - retirado do Kaggle
                            com aproximadamente 5000 imagens de: papelões,
                            plásticos, metais e pilhas. Com isso, foi feito uma
                            normalização usando o CVAT (Computer Vision
                            Annotation Tool) - software interativo para fazer
                            anotação de vídeo e imagem para visão
                            computacional.-, pois eram imagens irregulares, com
                            isso, foi colocado 4 pontos na imagem para fazer um
                            rótulo, que retornaria um arquivo TXT com o número
                            do tópico (de 0 a 3) e os 4 pontos na imagem onde
                            estaria o material, por ser uma grande quantidade de
                            arquivos retornados utilizamos o Python para fazer a
                            organização e a padronização dos dados. Feito isso,
                            iniciamos o processamento dessas imagens na
                            plataforma do Google Colab e utilizando o YOLOv8,
                            que utiliza um modelo de rede neural que faz o
                            processamento dos dados para reconhecer as imagens,
                            os rótulos já previamente citados foram utilizados
                            para facilitar e melhorar o reconhecimento de
                            padrões de imagens pelo modelo. Após o treinamento
                            da inteligência, foi retornado um arquivo com o
                            modelo da inteligência artificial. Então, em Python
                            foi feito um programa para captar em tempo real cada
                            frame da câmera e realizar o reconhecimento da
                            imagem, em que mostraria na tela do computador um
                            retângulo no formato do objeto e a porcentagem de
                            precisão do reconhecimento.
                        </p>
                    </aside>
                </div>
            </section>
        </div>
    );
};

export default Residuos;
