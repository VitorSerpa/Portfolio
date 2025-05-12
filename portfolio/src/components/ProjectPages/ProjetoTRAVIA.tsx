import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CargasSP.module.css";

const icons = ["python", "yolo", "opencv", "google colab"];

const ProjetoTRAVIA: FC = () => {
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
                    <video className={styles.video} src="/videos/traviaVideo.mp4" autoPlay controls></video>
                    <aside className={styles.metodology}>
                        <h1>Resultados</h1>
                        <p>
                            Foi possível realizar o reconhecimento de diferentes tipos de veículos — carros, motos,
                            ônibus e caminhões — e realizar a contagem de entrada e saída desses veículos nas diferentes
                            vias. Por meio de imagens aéreas, obtivemos grande porcentagem de precisão de reconhecimento
                        </p>

                        <h1>Conclusão</h1>
                        <p>
                            Percebe-se que, com o uso de inteligência artificial para mobilidade urbana, processos como
                            a análise do fluxo de veículos e o monitoramento do trânsito tornam-se mais simples e
                            eficazes.
                        </p>
                    </aside>
                </div>
            </section>
            <section className={styles.description}>
                <div className={styles.projectDescription}>
                    <h1>
                        T.R.A.V.I.A - Tecnologia de Reconhecimetno Automático de Veículos por Inteligência Artificial
                    </h1>
                    <p>
                        O objetivo da realização desse projeto é criar um sistema de análise de tráfego urbano,
                        utilizando visão computacional como principal ferramenta para identificar veículos e automatizar
                        o registro do fluxo viário, tornando o processo mais eficiente e preciso.
                    </p>
                    <h1 className={styles.metodologyTitle}>Metodologia:</h1>
                    <p>
                        Foi realizada a gravação de vídeos por drones para fazer a captura de imagens aéreas do tráfego
                        em determinadas áreas. A partir desses vídeos, separamos os vídeos em frames, que geraram em
                        torno de 10.000 imagens, para realizar a rotulação de veículos: carros, motos, caminhões e
                        ônibus. Utilizamos a plataforma CVAT (Computer Vision Annotation Tool) para fazer anotação de
                        vídeo e imagem. Por serem imagens irregulares, colocamos 4 pontos em cada imagem para gerar um
                        rótulo, que retornava um arquivo TXT com o número do tópico (de 0 a 3) e os 4 pontos onde o
                        veículo se localizava. Como havia grande quantidade de arquivos, utilizamos Python para
                        organizar e padronizar os dados. Após isso, processamos as imagens na plataforma Google Colab
                        com o YOLOv8, que usa redes neurais para reconhecer imagens. Os rótulos facilitaram o
                        reconhecimento de padrões pelo modelo. Ao fim do treinamento, foi gerado um arquivo com o modelo
                        da IA. Desenvolvemos um programa em Python para captar em tempo real cada frame de um vídeo e
                        reconhecer a imagem, mostrando um retângulo ao redor do veículo e contabilizando entradas e
                        saídas em determinada via, além da porcentagem de precisão do reconhecimento.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default ProjetoTRAVIA;
