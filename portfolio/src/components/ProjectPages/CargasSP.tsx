import React, { FC } from "react";
import styles from "./CargasSP.module.css"

const CargasSP:FC = () =>{
    return(
        <div className={styles.body}>
            <section className={styles.description}>
                <h1 className={styles.title}>Plataforma para análise gráfica de exportações e importações de cargas no Estado de São Paulo.</h1>

                <div className={styles.images}>
                    <img src="/images/chart.png" alt="Exemplo de Imagem do TCC" />
                </div>
                <h1>Objetivos:</h1>
                <p>
                    Realizar a criação de uma plataforma WEB para análise gráfica de todas as exportações e importações realizadas no Estado, e támbem os TOP 5 produtos de São Paulo entre os anos de 2013 e 2023.
                    - Nesse projeto estou atuando como P.O (Product Owner) e desenvolvedor, estou tendo uma boa experiencia nesse cargo, e quero aprender mais!
                </p>
                <h1>Metodologia:</h1>
                <p>
                    Estamos utilizando uma base de dados publica disponivel no: <a href="https://www.gov.br/pt-br">GOV.BR</a>.
                </p>
                <p>
                    Para a normalização e formatação das planilhas utilizamos o Google COLAB, e para armazenamento o banco de dados MySQL. O site está sendo desenvolvido em HTML, CSS e JavaScript, e para o Backend estamos utilizando o Flask
                </p>
           
            </section>
        </div>
    )
}

export default CargasSP