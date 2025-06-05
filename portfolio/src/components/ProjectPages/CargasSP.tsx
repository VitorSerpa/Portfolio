import React, { FC } from "react";
import styles from "./CargasSP.module.css";
import { useNavigate } from "react-router-dom";

const icons = ["html5", "css", "javascript", "mysql", "flask", "google colab", "pandas"];
const CargasSP: FC = () => {
    const navigate = useNavigate();

    const handleClickIcon = (icon: string) => {
        navigate("/techs", { state: icon });
    };

    return (
        <main className={styles.main}>
            <section className={styles.videoSection}>
                <div className={styles.videoWrapper}>
                    <div className={styles.videoHoverDescription}>
                        <div className={styles.info}>
                            {icons.map((element, index) => (
                                <div className={styles.svgWrapper} key={index}>
                                    <button className={styles.buttonSvg} onClick={() => handleClickIcon(element)}>
                                        <img src={`/svg/${element}.svg`} alt={element} className={styles.svg} />
                                    </button>
                                    <span className={styles.tooltipText}>{element.toUpperCase()}</span>
                                </div>
                            ))}
                            <a
                                href="https://github.com/Kernel-Panic-FatecSjc/KernelPanic"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.seeMore}
                            >
                                Ver no GitHub
                            </a>
                        </div>
                    </div>
                    <div>
                        <h1>
                            Plataforma para análise gráfica de exportações e importações realizadas pelo Estado de São
                            Paulo entre os anos de 2013 e 2025.
                        </h1>
                        <p>
                            O site possui 2 gráficos, 1 gráfico de linha em que pode-se analisar:{" "}
                            <b>Quantidade movimentada</b> ; <b>Valor agregado</b> ; <b>Valor FOB</b> e{" "}
                            <b>KG movimentado </b>
                            com gráficos personalizados onde o usuário possui uma diversidade de filtros à sua escolha.
                            <br />
                            <br /> Já o segundo gráfico mostra-se os <b>valores agregados (Valor FOB / Kg)</b> das
                            importações e exportações realizadas com possibilidade de diversos filtros
                            <br />
                            <br />
                            Na página de <b>Insights</b> o usuário pode visualizar entre as exportações e importações os
                            seguintes tópicos:
                            <b>Paises em crescimento e decaimento na economia brasileira</b>,{" "}
                            <b>Paises e municipios mais importantes para a economia brasileira</b>
                            <br />
                            <br />O projeto utiliza uma base de dados disponiblizada no site do governo{" "}
                            <b>
                                <a href="">.gov</a>
                            </b>{" "}
                            onde são listadas todos os tipos de produtos exportados e importados em cada mês de todos os
                            anos.
                        </p>
                    </div>

                    <video className={styles.video} src="/videos/chartVideo.mp4" autoPlay controls></video>
                </div>
            </section>

            <section className={styles.description}>
                <aside className={styles.metodology}>
                    <h1 className={styles.metodologyTitle}>Metodologia:</h1>
                    <p>
                        Para a criação do desing do site foi usado o FIGMA, e para a criação do site foi utilizado HTML,
                        CSS e Javascript. A fim de realizarmos a normalização e formatação dos dados utilizamos o Google
                        COLAB com a biblioteca PANDAS no qual é adequada para mexer com arquivos .CSV. Para o
                        armazenamento dos dados está sendo utilizado o banco de dados relacional MySQL que é o ideal
                        pelo relacionamento entre tabelas. Já no back-end, estamos utilizando o FLASK que é utilizado
                        para criar as querys SQL com base nos filtros selecionados e realizar a busca no banco de dados.
                        Foi utilizada a plataforma <b>Google CLOUD SQL</b> para a melhor performance da Query SQL por
                        causa da quantidade de registros no banco de dados (+12 milhões), foi utilizado o <b>Docker</b>{" "}
                        para gerenciamento do projeto, e para a hospedagem na WEB utilizamos a <b>Amazon AWS EC2</b>
                    </p>
                </aside>
                <div className={styles.projectDescription}>
                    <h1>Participação:</h1>
                    <p>
                        O projeto foi desenvolvido com a metodologia agil SCRUM, na qual atuo no cargo como
                        <b> Product Owner (P.O)</b>, onde tive a responsabilidade de realizar o levantamento e a
                        definição de requisitos com o cliente, criar o <b>Backlog Product</b> e auxiliar e sanar dúvidas
                        do meu time em relação ao projeto. Na área de desenvolvimento, fui responsável pelo
                        gerenciamento e inserção dos dados no banco de dados utilizando <b>Python</b>, pela
                        implementação dos gráficos do site (Gráfico de Linha e Gráfico de Funil), utilizando a
                        biblioteca Chart.js. Além disso, atuei na funcionalidade dos filtros do gráfico de Linha e de
                        Funil, desenvolvendo a lógica em que, com base nos parâmetros selecionados pelo usuário, o
                        backend gera dinamicamente uma query SQL para consulta ao banco de dados, retornando um JSON
                        representativo. Essa abordagem foi essencial para lidar com o grande volume de dados envolvidos
                        no projeto. Atuei tambem para a responsividade do site para dispositivos moveis, visto que é
                        essencial um plataforma compativel com celulares.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default CargasSP;
