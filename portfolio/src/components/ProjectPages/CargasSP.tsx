import React, { FC } from "react";
import styles from "./CargasSP.module.css"
import { useNavigate } from 'react-router-dom';

const icons = [
    "html5", "css", "javascript", "mysql", "flask", "google colab", "pandas"
]
const CargasSP:FC = () =>{
    const navigate = useNavigate();

    const handleClickIcon = (icon: string) => {
        navigate('/techs', { state: icon });
    }


    return(
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
                            <a href="https://github.com/Kernel-Panic-FatecSjc/KernelPanic" target="_blank" className={styles.seeMore}>Ver no GitHub</a>
                        </div>
                    </div>

                    <video className={styles.video} src="/videos/chartVideo.mp4" autoPlay controls></video>

                </div>
                <aside className={styles.metodology}>
                    <h1 className={styles.metodologyTitle}>Metodologia:</h1>
                    <p>
                        Para a criação do desing do site foi usado o FIGMA, e o desenvolvimento está sendo utilizado HTML, CSS e Javascript. 
                        A fim de realizarmos a normalização e formatação dos dados utilizamos o Google COLAB com a biblioteca PANDAS no qual é adequada
                        para mexer com arquivos .CSV. Para o armazenamento dos dados está sendo utilizado o banco de dados relacional MySQL que é o ideal 
                        pelo relacionamento entre tabelas. Já no back-end, estamos utilizando o FLASK que é utilizado para criar as querys SQL com base nos filtros
                        selecionados e realizar a busca no banco de dados. 
                    </p>
                </aside>
            </section>
            <section className={styles.description}>
                <div className={styles.projectDescription}>
                    <h1>Plataforma para análise gráfica de exportações e importações realizadas pelo Estado de São Paulo entre os anos de 2013 e 2023.</h1>
                    <p>
                        O site possui 2 gráficos, 1 gráfico de linha em que pode-se analisar: <b>Quantidade movimentada</b> ; <b>Valor agregado</b> ; <b>Valor FOB</b> e <b>KG movimentado </b> 
                         com gráficos personalizados onde o usuário possui uma diversidade de filtros à sua escolha.<br /><br />
                        O projeto utiliza uma base de dados disponiblizada no site do governo <b>.gov</b> onde são listadas todos os tipos de produtos exportados e importados em cada mês de todos os anos.
                    </p>
                    <h1>Participação:</h1>
                    <p>
                        O projeto está sendo desenvolvido com a metodologia agil SCRUM, na qual atuo no cargo como Product Owner(P.O), onde tenho a responsabilidade 
                        de realizar o levantamento e a definição de requisitos com o cliente, criar o Backlog Product e auxiliar e sanar dúvidas do meu time em relação 
                        ao projeto. Na área de desenvolvimento, fui responsável pela implementação do gráfico interativo do site, utilizando a biblioteca Chart.js. Além disso, atuei na funcionalidade dos filtros, desenvolvendo a lógica em que, com base nos parâmetros selecionados pelo usuário,
                        o back-end gera dinamicamente uma query SQL para consulta ao banco de dados, retornando um objeto JSON representativo. Essa abordagem foi essencial para lidar com o grande volume de dados envolvidos no projeto.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default CargasSP