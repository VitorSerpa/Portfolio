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
                            <a href="/images/monografia.pdf" download className={styles.seeMore}>
                                Baixar monografia
                            </a>
                        </div>
                    </div>
                    <aside className={styles.metodology}>
                        <h1>REESTRUTURAÇÃO DO SISTEMA DE VERIFICAÇÃO DE FALTAS ACADÊMICAS DO COLEGIO UNIVAP</h1>
                        <p>
                            No ano de 2020, um grupo de alunos realizando um trabalho de conclusão de curso
                            desenvolveram para o Colégio Técnico “Antônio Teixeira Fernandes” um sistema que realiza o
                            controle de presenças/falta de alunos diariamente em aulas. Esse sistema realiza a leitura
                            de um código de barras constante na carteirinha do aluno, registrando a entrada do aluno em
                            aula. Por meio desse mecanismo, são controlados os fluxos de entrada e saída dos alunos,
                            mesmo que seja antecipada. (SANDI; ARAUJO, 2020). <br />
                            Objetiva-se, portanto, com este trabalho reestruturar o sistema, bem como os processosde
                            controle de registros de faltas / presenças dos alunos; enviar e-mails aos responsáveis
                            legaisdiante de faltas do aluno durante o período de aula do dia; possibilitar saídas
                            antecipadas dealunos antes do fechamento das faltas; e utilizar uma linguagem de programação
                            de uso gratuito(Python) com gerenciador de banco de dados MySQL.
                        </p>
                    </aside>
                    <img className={styles.video} src="/images/normalImages/tccImage1.png" alt="" />
                </div>
            </section>
            <section className={styles.description}>
                <div className={styles.projectDescription}>
                    <aside className={styles.metodology}>
                        <h1 className={styles.metodologyTitle}>Metodologia:</h1>
                        <p>
                            : Foi utilizado um dataset - banco com diversas imagens de determinado tópico - retirado do
                            Kaggle com aproximadamente 5000 imagens de: papelões, plásticos, metais e pilhas. Com isso,
                            foi feito uma normalização usando o CVAT (Computer Vision Annotation Tool) - software
                            interativo para fazer anotação de vídeo e imagem para visão computacional.-, pois eram
                            imagens irregulares, com isso, foi colocado 4 pontos na imagem para fazer um rótulo, que
                            retornaria um arquivo TXT com o número do tópico (de 0 a 3) e os 4 pontos na imagem onde
                            estaria o material, por ser uma grande quantidade de arquivos retornados utilizamos o Python
                            para fazer a organização e a padronização dos dados. Feito isso, iniciamos o processamento
                            dessas imagens na plataforma do Google Colab e utilizando o YOLOv8, que utiliza um modelo de
                            rede neural que faz o processamento dos dados para reconhecer as imagens, os rótulos já
                            previamente citados foram utilizados para facilitar e melhorar o reconhecimento de padrões
                            de imagens pelo modelo. Após o treinamento da inteligência, foi retornado um arquivo com o
                            modelo da inteligência artificial. Então, em Python foi feito um programa para captar em
                            tempo real cada frame da câmera e realizar o reconhecimento da imagem, em que mostraria na
                            tela do computador um retângulo no formato do objeto e a porcentagem de precisão do
                            reconhecimento.
                        </p>
                    </aside>
                    <h1 className={styles.metodologyTitle}>Resultados:</h1>
                    <p>
                        Foi possível fazer o reconhecimento de diferentes tipos de materiais: sacolas plásticas,
                        garrafas, aneis, correntes, latinhas, diferentes pedaços de papelão e diferentes pilhas em um
                        fundo branco, com grande porcentagem de precisão.
                    </p>
                    <aside className={styles.metodology}>
                        <h1 className={styles.metodologyTitle}>Conclusão:</h1>
                        <p>
                            Foi possível fazer o reconhecimento de diferentes tipos de materiais: sacolas plásticas,
                            garrafas, aneis, correntes, latinhas, diferentes pedaços de papelão e diferentes pilhas em
                            um fundo branco, com grande porcentagem de precisão.
                        </p>
                    </aside>
                </div>
            </section>
        </div>
    );
};

export default Paint;
