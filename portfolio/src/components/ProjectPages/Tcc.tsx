import React, { FC } from "react";
import styles from "./Tcc.module.css"

const Tcc:FC = () =>{
    return(
        <div className={styles.body}>
            <section className={styles.description}>
                <h1 className={styles.title}>REESTRUTURAÇÃO DO SISTEMA DE VERIFICAÇÃO DE FALTAS ACADÊMICAS:</h1>

                <div className={styles.images}>
                        <img src="/images/tccImage.png" alt="Exemplo de Imagem do TCC" />
                        <img src="/images/tccImage1.png" alt="Exemplo de Imagem do TCC" />
                </div>
                <h1>Objetivos:</h1>
                <p>
                    Objetiva-se, com este trabalho reestruturar o sistema, bem como os processos de controle de registros de faltas / presenças dos alunos; enviar e-mails aos responsáveis legais diante de faltas do aluno durante o período de aula do dia; possibilitar saídas antecipadas de alunos antes do fechamento das faltas; e utilizar uma linguagem de programação de uso gratuito(Python) com gerenciador de banco de dados MySQL.
                </p>

                <h1>Metodologia:</h1>
                <p>
                    Para o desenvolvimento da programação deste sistema de controle de faltas acadêmicas, utilizaram-se a linguagem de programação Python com os módulos Tkinter e CustomTkinter(CUSTOMTKINTER, 2024); o aplicativo MySQL Workbench, (ANDRE MILANI, 2007) O MySQL  é  um  banco  de  dados  completo,  robusto  e  extremamente  rápido,  com  todas  ascaracterísticas existentes nos principais bancos de dados pagos existentes no mercado. Atravésda linguagem SQL, para a modelagem e consulta do banco de dados e a tecnologia do código de barras para a leitura das carteirinhas escolares no programa. A seguir está uma explicaçãomais elaborada sobre as tecnologias utilizadas.
                </p>
                <h1>Conclusão</h1>
                <p>
                    Conclui-se que o sistema desenvolvido cumpriu os objetivos propostos inicialmente. Foi criado o módulo de envio de e-mails, não existente no sistema antigo. Foram implementadossistemas  de  prevenção  e  esclarecimento  de  possíveis  erros  de  importação  de  dados.  Outras possibilidades de filtros de informações foram desenvolvidas nas telas do sistema, atendendo,com isso, as necessidades dos usuários.
                </p>                
            </section>
            
        </div>
    )
}

export default Tcc