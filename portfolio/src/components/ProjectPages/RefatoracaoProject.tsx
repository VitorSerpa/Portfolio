import { FC } from "react";
import styles from "./RefatoracaoProject.module.css"

const RefatoracaoProject: FC = () => {
    return(
        <div className={styles.body}>
            <section className={styles.description}>
                <h1 className={styles.title}>Projeto de reconhecimento de veículos e refatoração de semáforos</h1>
                <div className={styles.images}>
                    <img src="/images/avenueImage.jpeg" alt="Imagem do projeto de reconhecimento de veículos" />
                </div>
                <h1>Introdução:</h1>
                <p>
                    Segundo gráficos do jornal Folha de São Paulo, o trânsito na capital paulista no período de dezembro de 2024 foi registrado com uma média diária de 509 quilômetros de congestionamentos por dia. Diante disso, é fundamental ressaltar que o trânsito no Brasil se tornou uma questão séria e urgente, afetando a qualidade de vida de milhões de cidadãos. Portanto, o investimento na melhoria da infraestrutura viária é essencial para promover o bem-estar da população e otimizar a mobilidade urbana no país.
                </p>

                <h1>Objetivos:</h1>
                <p>
                    O objetivo da realização desse projeto é criar um sistema de análise de tráfego urbano, utilizando visão computacional como principal ferramenta para identificar veículos e automatizar o registro do fluxo viário, tornando o processo mais eficiente e preciso.
                </p>

                <h1>Metodologia:</h1>
                <p>
                    Foi realizada a gravação de vídeos por drones para fazer a captura de imagens aéreas do tráfego em determinadas áreas. A partir desses vídeos, separamos os vídeos em frames, que geraram em torno de 10.000 imagens, para realizar a rotulação de veículos: carros, motos, caminhões e ônibus. Utilizamos a plataforma CVAT (Computer Vision Annotation Tool) para fazer anotação de vídeo e imagem. Por serem imagens irregulares, colocamos 4 pontos em cada imagem para gerar um rótulo, que retornava um arquivo TXT com o número do tópico (de 0 a 3) e os 4 pontos onde o veículo se localizava. Como havia grande quantidade de arquivos, utilizamos Python para organizar e padronizar os dados. Após isso, processamos as imagens na plataforma Google Colab com o YOLOv8, que usa redes neurais para reconhecer imagens. Os rótulos facilitaram o reconhecimento de padrões pelo modelo. Ao fim do treinamento, foi gerado um arquivo com o modelo da IA. Desenvolvemos um programa em Python para captar em tempo real cada frame de um vídeo e reconhecer a imagem, mostrando um retângulo ao redor do veículo e contabilizando entradas e saídas em determinada via, além da porcentagem de precisão do reconhecimento.
                </p>

                <h1>Resultados:</h1>
                <p>
                    Foi possível realizar o reconhecimento de diferentes tipos de veículos — carros, motos, ônibus e caminhões — e realizar a contagem de entrada e saída desses veículos nas diferentes vias. Por meio de imagens aéreas, obtivemos grande porcentagem de precisão de reconhecimento, variando entre 70% e 90%.
                </p>

                <h1>Conclusão:</h1>
                <p>
                    Percebe-se que, com o uso de inteligência artificial para mobilidade urbana, processos como a análise do fluxo de veículos e o monitoramento do trânsito tornam-se mais simples e eficazes.
                </p>
                
            </section>
        </div>
    )
}

export default RefatoracaoProject
