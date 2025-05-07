import React, { FC } from "react";
import styles from "./CargasSP.module.css"

const CargasSP:FC = () =>{
    return(
        <div className={styles.main}>
            <section className={styles.videoSection}>
                <video src="/videos/chartVideo.mkv" autoPlay controls></video>
                <aside className={styles.metodology}>
                    <h1 className={styles.metodologyTitle}>Metodologia:</h1>
                    <p>
                        O projeto está sendo desenvolvido com a metodologia agil SCRUM na qual atuo como Product Owner(P.O).
                        Para a criação do desing do site foi usado o FIGMA, e o desenvolvimento está sendo utilizado HTML, CSS e Javascript. 
                        A fim de realizarmos a normalização e formatação dos dados utilizamos o Google COLAB com a biblioteca PANDAS que é adequada
                        para mexer com arquivos .CSV
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
                </div>
            </section>
        </div>
    )
}

export default CargasSP