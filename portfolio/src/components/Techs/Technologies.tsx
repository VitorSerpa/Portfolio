import { title } from "process";
import { FC } from "react";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from "./Tehnologies.module.css"
import { useNavigate } from 'react-router-dom';


const skillsList = [
    ["HTML", "html5"],
    ["CSS", "css"],
    ["SASS", "sass"],
    ["Javascript", "javascript"],
    ["Typescript", "typescript"],
    ["React", "react"],
    ["Node.JS", "node"],
    ["MySQL", "mysql"],
    ["Java", "java"],
    ["C#", "csharp"],
    ["Unity", "unity"],
    ["Python", "python"],
    ["Pandas", "pandas"],
    ["CTkinter", "custom tkinter"],
    ["Flask", "flask"],
    ["COLAB", "google colab"],
    ["OpenCV", "opencv"],
    ["YOLO", "yolo"]
];


const techs = [
    {
        title: "html5",
        descriptionTitle: "Hypertext Markup Language:",
        description: "HTML (Hypertext Markup Language) é a linguagem padrão usada para criar e estruturar conteúdo na web. Ela define a estrutura de páginas da web por meio de elementos ou 'tags' que organizam e formam o conteúdo exibido nos navegadores. HTML é essencial para o desenvolvimento web, funcionando como o esqueleto das páginas, onde outros elementos como CSS e JavaScript são integrados para definir estilo e interatividade.",
        advantagesDescription: [
            "Fácil de aprender e usar – A sintaxe é simples e intuitiva, ideal para iniciantes em desenvolvimento web.",
            "Compatível com todos os navegadores – É interpretado de forma consistente nos principais navegadores da web.",
            "Estrutura semântica do conteúdo – Permite organizar o conteúdo de forma lógica, o que melhora a acessibilidade e o SEO.",
            "Integração com outras tecnologias – Funciona em conjunto com CSS, JavaScript, frameworks e bibliotecas modernas.",
            "Base de toda página web – Nenhuma aplicação web existe sem HTML; é o ponto de partida de qualquer site."
        ]
    },
    {
        title: "css",
        descriptionTitle: "Cascading Style Sheets:",
        description: "CSS (Cascading Style Sheets), ou Folhas de Estilo em Cascata, é a linguagem usada para estilizar páginas HTML. Enquanto o HTML estrutura o conteúdo (como títulos, parágrafos e imagens), o CSS define como esse conteúdo será apresentado, controlando cores, tamanhos de fonte, espaçamentos, layouts, animações e responsividade (adaptação a telas diferentes).",
        advantagesDescription: [
            "Separação entre conteúdo e estilo – Permite manter o HTML limpo e focado apenas na estrutura.",
            "Reutilização de estilos – Um único arquivo CSS pode estilizar várias páginas ao mesmo tempo.",
            "Facilidade de manutenção – Alterar a aparência de um site inteiro exige mudanças em apenas um lugar.",
            "Responsividade – Com media queries, o CSS adapta o layout para diferentes tamanhos de tela.",
            "Personalização visual avançada – Permite aplicar animações, transições, sombras, gradientes e outros efeitos visuais modernos."
        ]
    },

    {
        title: "sass",
        descriptionTitle: "Pré-processador CSS:",
        description: "SASS (Syntactically Awesome Stylesheets) é um pré-processador CSS que adiciona recursos avançados como variáveis, aninhamento, mixins, importações e operações matemáticas, permitindo escrever estilos de forma mais organizada e reutilizável, que depois são compilados em CSS puro interpretado pelos navegadores.",
        advantagesDescription: [
            "Uso de variáveis – facilita a reutilização de cores, tamanhos e fontes.",
            "Aninhamento de seletores – deixa o código mais legível e organizado.",
            "Mixins – permitem reutilizar blocos de código com ou sem parâmetros.",
            "Modularização com @import ou @use – separa o CSS em arquivos menores e mais gerenciáveis.",
            "Operações matemáticas – torna possível fazer cálculos direto no código (como dividir larguras ou calcular espaçamentos)."
        ]
    },
    {
        title: "javascript",
        descriptionTitle: "Linguagem de programção",
        description: "JavaScript é uma linguagem de programação usada para criar interatividade e dinamismo em páginas web, permitindo manipulação do DOM, validação de formulários, animações, efeitos e comunicação assíncrona, sendo essencial para o desenvolvimento de sites modernos e podendo ser executado tanto no cliente (navegador) quanto no servidor (com Node.js).",
        advantagesDescription: [
            "Uso de variáveis – facilita a reutilização de cores, tamanhos e fontes.",
            "Aninhamento de seletores – deixa o código mais legível e organizado.",
            "Mixins – permitem reutilizar blocos de código com ou sem parâmetros.",
            "Modularização com @import ou @use – separa o CSS em arquivos menores e mais gerenciáveis.",
            "Operações matemáticas – torna possível fazer cálculos direto no código (como dividir larguras ou calcular espaçamentos)."
        ]
    },
    {
        title: "typescript",
        descriptionTitle: "Linguagem de programação",
        description: "TypeScript é uma linguagem de programação baseada em JavaScript que adiciona tipagem estática e recursos avançados como interfaces e classes, permitindo maior segurança e robustez no desenvolvimento de aplicativos, especialmente em projetos grandes.",
        advantagesDescription: [
            "Tipagem estática – Detecta erros durante o desenvolvimento, antes da execução do código.",
            "Melhor suporte a IDEs – Oferece autocompletação e sugestões, melhorando a produtividade.",
            "Compatibilidade com JavaScript – Qualquer código JavaScript válido também é válido em TypeScript.",
            "Facilidade de refatoração – A tipagem facilita a reestruturação e manutenção do código.",
            "Suporte a classes e interfaces – Oferece uma abordagem orientada a objetos mais robusta, com recursos como interfaces e classes."
        ]
    },

    {
        title: "react",
        descriptionTitle: "Biblioteca javascript:",
        description: "React é uma biblioteca JavaScript desenvolvida pelo Facebook para construir interfaces de usuário (UIs) de maneira eficiente e declarativa. Ele permite criar componentes reutilizáveis, que podem ser atualizados de forma reativa quando os dados mudam, tornando o desenvolvimento de aplicativos web mais rápido e organizado. React é especialmente usado para criar SPAs (Single Page Applications), onde as interações com a página não exigem recarregamento completo.",
        advantagesDescription: [
            "Componentização – Permite criar componentes reutilizáveis e modulares, tornando o código mais organizado e fácil de manter.",
            "Virtual DOM – Melhora a performance ao atualizar apenas as partes da interface que realmente mudaram, sem recarregar toda a página.",
            "Facilidade de aprendizado – A sintaxe e o fluxo de trabalho são relativamente simples, especialmente para quem já conhece JavaScript.",
            "Grande comunidade e ecossistema – Há uma vasta quantidade de bibliotecas, ferramentas e suporte da comunidade.",
            "React Native – Permite o desenvolvimento de aplicativos móveis nativos para iOS e Android utilizando a mesma base de código em JavaScript/React."
        ]
    },
    {
        title: "node",
        descriptionTitle: "Back-end:",
        description: "Node.js é um ambiente de execução JavaScript baseado no motor V8 do Google Chrome, que permite executar código JavaScript no servidor. Ao contrário do JavaScript tradicional, que é executado no navegador, o Node.js possibilita a criação de servidores web e aplicações de backend utilizando JavaScript, permitindo a execução de código assíncrono e escalável. Ele é amplamente usado para construir aplicações web em tempo real, APIs, e sistemas com alta concorrência, como chats e sistemas de streaming.",
        advantagesDescription: [
            "Execução assíncrona – Permite a execução não bloqueante, o que melhora a performance em operações de I/O.",
            "JavaScript no backend e frontend – Possibilita o uso da mesma linguagem para ambos os lados, tornando o desenvolvimento mais simples e coeso.",
            "Escalabilidade – Ideal para construir sistemas com alta concorrência, como chats e APIs em tempo real.",
            "Grande ecossistema – Com o npm (Node Package Manager), há uma enorme variedade de pacotes e bibliotecas disponíveis.",
            "Rápido desempenho – O motor V8 do Google Chrome proporciona alta performance na execução de código JavaScript."
        ]
    },
    {
        title: "mysql",
        descriptionTitle: "Banco de dados relacional:",
        description: "MySQL é um sistema de gerenciamento de banco de dados relacional (RDBMS), que utiliza a linguagem SQL (Structured Query Language) para gerenciar e manipular dados. Ele é amplamente utilizado para armazenar, organizar e recuperar dados em aplicações web, especialmente em projetos que precisam de alta performance, escalabilidade e confiabilidade. O MySQL é open-source (código aberto) e pode ser usado tanto em pequenos projetos quanto em grandes sistemas de produção. Ele é um dos bancos de dados mais populares, devido à sua facilidade de uso, suporte robusto e integração com diversas plataformas e linguagens de programação.",
        advantagesDescription: [
            "Desempenho rápido – O MySQL é otimizado para consultas rápidas, ideal para aplicações que exigem alta performance.",
            "Facilidade de uso – A instalação e configuração do MySQL são simples, e ele oferece uma interface amigável.",
            "Escalabilidade – MySQL pode ser usado tanto para projetos pequenos quanto para grandes sistemas empresariais.",
            "Segurança – Oferece recursos robustos de segurança, como criptografia, autenticação e controle de acesso.",
            "Ampla comunidade e suporte – Sendo open-source, o MySQL tem uma grande comunidade de desenvolvedores e vasta documentação."
        ]
    },

    {
        title: "java",
        descriptionTitle: "Linguagem de programção:",
        description: "Java é uma linguagem de programação de alto nível, orientada a objetos e amplamente usada para o desenvolvimento de aplicações em diversas plataformas, como aplicações web, desktop e móveis (especialmente para Android). Uma das principais características do Java é o conceito de escreva uma vez, execute em qualquer lugar, pois o código Java é compilado para bytecode que pode ser executado em qualquer dispositivo que tenha a Java Virtual Machine (JVM) instalada, tornando-o altamente portável. Java é conhecida pela sua robustez, segurança e escalabilidade, o que a torna uma escolha popular para grandes sistemas corporativos e aplicações críticas.",
        advantagesDescription: [
            "Portabilidade – O código Java pode ser executado em qualquer plataforma que tenha a Java Virtual Machine (JVM), garantindo que o software seja portável.",
            "Segurança – Java oferece uma série de recursos de segurança, como a execução em uma máquina virtual, garantindo que o código malicioso não afete o sistema.",
            "Desempenho – O desempenho do Java é otimizado através da compilação para bytecode, o que melhora a execução de programas em diversas plataformas.",
            "Ampla comunidade e suporte – Java tem uma vasta comunidade de desenvolvedores e uma grande quantidade de bibliotecas e frameworks.",
            "Escalabilidade e robustez – Java é ideal para grandes sistemas, pois é altamente escalável e possui um modelo de gerenciamento de memória eficiente."
        ]
    },
    {
        title: "csharp",
        descriptionTitle: "Linguagem de programação:",
        description: "C# (C-Sharp) é uma linguagem de programação orientada a objetos, desenvolvida pela Microsoft como parte da plataforma .NET. Ela é usada principalmente para o desenvolvimento de aplicações de desktop, web e móveis (por meio do Xamarin). C# tem uma sintaxe semelhante ao Java e C++, mas é mais simplificada e voltada para produtividade.A linguagem é moderna, segura e possui um garbage collector (coletor de lixo), o que facilita o gerenciamento da memória. C# também é frequentemente usado para desenvolvimento de jogos com o Unity.",
        advantagesDescription: [
            "Desenvolvimento rápido e produtivo – C# oferece uma sintaxe simples e recursos como o LINQ (Language Integrated Query), que facilita a manipulação de dados.",
            "Integração com o .NET – É totalmente integrado ao .NET Framework e ao .NET Core, permitindo criar aplicativos multiplataforma com facilidade.",
            "Segurança de tipos – C# tem uma forte verificação de tipos, o que reduz erros comuns durante o desenvolvimento e melhora a estabilidade do código.",
            "Orientação a objetos – C# é uma linguagem completamente orientada a objetos, o que facilita a criação de programas bem estruturados e reutilizáveis.",
            "Suporte a desenvolvimento de jogos – Com o Unity, C# é uma das principais linguagens usadas para o desenvolvimento de jogos, tornando-o popular entre desenvolvedores de jogos."
        ]
    },
    {
        title: "unity",
        descriptionTitle: "Game Engine:",
        description: "Unity é uma plataforma de desenvolvimento amplamente utilizada para criar jogos e aplicações interativas em 2D e 3D. É uma das ferramentas mais populares para o desenvolvimento de jogos devido à sua versatilidade, fácil aprendizado e grande comunidade de desenvolvedores. Unity suporta várias plataformas, como Windows, macOS, Android, iOS, PlayStation, Xbox, VR e AR, permitindo que os desenvolvedores criem jogos que podem ser executados em diversos dispositivos com o mesmo código base. Unity usa C# como principal linguagem de programação e oferece uma ampla gama de recursos, incluindo motores gráficos poderosos, animação, física, áudio, rede e ferramentas para colaboração em equipe.",
        advantagesDescription: [
            "Multiplataforma – Unity permite que você crie jogos e aplicações para diversas plataformas, incluindo PC, mobile, consoles, realidade aumentada (AR) e realidade virtual (VR), com o mesmo código base.",
            "Fácil de aprender – A interface do Unity e o uso de C# como linguagem de programação tornam o aprendizado mais acessível, mesmo para iniciantes no desenvolvimento de jogos.",
            "Comunidade e recursos – Unity tem uma grande comunidade de desenvolvedores e uma vasta documentação, além da Unity Asset Store, onde você pode encontrar recursos como modelos, texturas e plugins prontos para uso.",
            "Desempenho otimizado – Unity oferece boas opções de otimização, especialmente para jogos móveis e experiências em realidade aumentada/virtual, garantindo alta performance.",
            "Ferramentas integradas – O Unity vem com uma gama completa de ferramentas, como sistema de física, animação, luzes dinâmicas, áudio e sistemas de partículas, permitindo criar jogos de forma rápida e eficaz."
        ]
    },
    {
        title: "python",
        descriptionTitle: "Linguagem de programação:",
        description: "Python é uma linguagem de programação de alto nível, interpretada e de propósito geral, conhecida por sua simplicidade e legibilidade. Python é amplamente utilizada em diversos campos, como desenvolvimento web, análise de dados, inteligência artificial (IA), automação, scripting, e muito mais. A linguagem foi criada por Guido van Rossum em 1991 e é projetada para ter uma sintaxe limpa e fácil de entender, o que facilita a escrita de código legível e reduz a complexidade. Além disso, Python possui uma grande comunidade e uma vasta quantidade de bibliotecas e frameworks, como Django (para desenvolvimento web), Pandas e NumPy (para análise de dados), TensorFlow e PyTorch (para IA), o que o torna uma escolha popular entre desenvolvedores de diversos tipos de projetos.",
        advantagesDescription: [
            "Sintaxe simples e legível – A sintaxe clara e concisa do Python facilita a leitura e escrita de código, tornando-o ideal para iniciantes e desenvolvedores experientes.",
            "Ampla comunidade e recursos – Python possui uma enorme comunidade de desenvolvedores, o que garante vasta documentação, tutoriais e bibliotecas de terceiros para suportar praticamente qualquer tipo de aplicação.",
            "Versatilidade – Python pode ser usado para uma variedade de aplicações, incluindo desenvolvimento web, análise de dados, inteligência artificial, automação de tarefas, ciência de dados, scripting, entre outros.",
            "Grande número de bibliotecas e frameworks – Com bibliotecas como Pandas, NumPy, Django, Flask e TensorFlow, Python facilita o desenvolvimento de projetos complexos, acelerando o processo de criação.",
            "Plataforma independente – Python é uma linguagem cross-platform, ou seja, pode ser executada em diferentes sistemas operacionais como Windows, Linux, macOS, sem a necessidade de alterações no código."
        ]
    },

    {
        title: "pandas",
        descriptionTitle: "Biblioteca Python:",
        description: "Pandas é uma biblioteca open-source para análise de dados em Python, que fornece estruturas de dados poderosas e fáceis de usar, como o DataFrame e Series, facilitando tarefas como carregar dados de diversas fontes (CSV, Excel, bancos de dados), limpar e transformar dados (tratamento de valores ausentes, filtros, ordenações), realizar operações complexas (agregações, agrupamentos, merges) e integrar com outras bibliotecas para visualização de dados, como o Matplotlib, tornando-a essencial para ciência de dados, análise estatística e machine learning.",
        advantagesDescription: [
            "Estruturas de dados eficientes – O DataFrame e o Series permitem trabalhar com grandes volumes de dados de forma rápida e eficiente, facilitando a manipulação de dados tabulares e sequenciais.",
            "Facilidade de leitura e escrita – Pandas suporta a leitura e escrita de dados em múltiplos formatos como CSV, Excel, SQL, JSON, entre outros, facilitando a integração com diferentes fontes de dados.",
            "Operações de dados intuitivas – Com funções integradas para manipulação de dados, como filtragem, agregação, ordenação e tratamento de valores ausentes, Pandas simplifica tarefas que seriam complexas em outras linguagens.",
            "Alto desempenho – Pandas é otimizado para trabalhar com grandes conjuntos de dados, permitindo operações rápidas e eficientes, mesmo em grandes volumes de dados.",
            "Integração com outras bibliotecas – Pandas se integra facilmente com outras bibliotecas como NumPy (para operações numéricas), Matplotlib (para visualização de dados) e Scikit-learn (para aprendizado de máquina), tornando-o uma ferramenta poderosa em fluxos de trabalho de análise de dados."
        ]
    },
    {
        title: "custom tkinter",
        descriptionTitle: "Biblioteca Python:",
        description: "Custom Tkinter é uma extensão da biblioteca Tkinter, que é a biblioteca padrão para criação de interfaces gráficas em Python. O Custom Tkinter fornece uma série de widgets personalizados e modernos, além de novos recursos e melhorias em relação ao Tkinter tradicional, permitindo que desenvolvedores criem interfaces mais sofisticadas e visualmente atraentes para suas aplicações. Enquanto o Tkinter oferece elementos básicos de interface, como botões, rótulos e caixas de entrada, o Custom Tkinter facilita a criação de interfaces mais elaboradas, com melhores controles gráficos e maior flexibilidade no design.",
        advantagesDescription: [
            "Interface moderna e estilizada – O CTk oferece widgets modernos e personalizáveis, permitindo que você crie interfaces mais atrativas e visualmente agradáveis, ao contrário dos widgets padrão do Tkinter.",
            "Facilidade de uso – Assim como o Tkinter, o Custom Tkinter mantém uma API simples e fácil de aprender, o que o torna ideal para desenvolvedores iniciantes e experientes.",
            "Maior flexibilidade de design – O CTk permite que você ajuste facilmente o estilo dos widgets, como cores, bordas, sombreamento, e tamanhos, proporcionando mais liberdade para criar interfaces personalizadas.",
            "Suporte a temas – O Custom Tkinter vem com suporte a temas prontos, além de permitir a criação de temas personalizados, ajudando a manter uma aparência consistente e profissional na aplicação.",
            "Facilidade de integração – Como é uma extensão do Tkinter, o CTk pode ser facilmente integrado a projetos existentes em Tkinter, sem a necessidade de aprender uma nova biblioteca, tornando-o uma opção simples para melhorar a aparência de aplicações Tkinter."
        ]
    },
    {
        title: "flask",
        descriptionTitle: "Micro-framework",
        description: "Flask é um micro-framework para desenvolvimento web em Python. Ele é projetado para ser simples, leve e flexível, permitindo que os desenvolvedores construam aplicações web de forma rápida e eficiente, sem impor uma estrutura rígida. Flask segue a filosofia de 'não opinar', o que significa que ele fornece apenas o essencial para começar e deixa a liberdade para o desenvolvedor escolher as ferramentas e bibliotecas que deseja usar. Flask é frequentemente usado para criar APIs, aplicações web simples ou complexas e também é muito popular para prototipagem rápida e micro-serviços devido à sua simplicidade e extensibilidade.",
        advantagesDescription: [
            "Leveza e simplicidade – Flask é um micro-framework, o que significa que ele não vem com muitas ferramentas e bibliotecas adicionais, permitindo que você comece rapidamente e escolha as ferramentas que melhor atendem às suas necessidades.",
            "Extensibilidade – Embora seja minimalista, Flask pode ser facilmente estendido com muitas extensões que adicionam funcionalidades, como autenticação de usuários, conexão com banco de dados, validação de formulários, entre outras.",
            "Flexibilidade – Flask não impõe uma estrutura rígida, permitindo que você escolha a arquitetura da sua aplicação e como ela será organizada, o que o torna ideal para projetos de todos os tamanhos e complexidades.",
            "Documentação rica e comunidade ativa – Flask tem uma excelente documentação e uma grande comunidade de desenvolvedores que contribuem com tutoriais, pacotes e soluções para problemas comuns, facilitando o aprendizado e a resolução de problemas.",
            "Ideal para protótipos e micro-serviços – Flask é perfeito para prototipagem rápida e desenvolvimento de micro-serviços, pois você pode construir APIs ou aplicações web simples de forma rápida e escalável."
        ]
    },

    {
        title: "google colab",
        descriptionTitle: "Plataforma Python:",
        description: "Google Colab (ou Colaboratory) é uma plataforma gratuita fornecida pelo Google que permite escrever e executar código Python diretamente em um ambiente de notebook interativo. Ele é baseado em Jupyter Notebooks e oferece uma interface para rodar código Python de forma simples, sem a necessidade de instalação de software adicional.",
        advantagesDescription: [
            "Execução em nuvem com GPU e TPU gratuitas – Colab oferece recursos de GPU e TPU gratuitamente, permitindo a execução de modelos de machine learning de forma mais rápida e eficiente sem custos adicionais.",
            "Ambiente de desenvolvimento sem instalação – Não é necessário configurar um ambiente local; basta acessar o Google Colab e começar a programar em Python com as bibliotecas já pré-instaladas.",
            "Integração com Google Drive – Você pode facilmente salvar e acessar seus notebooks diretamente no Google Drive, permitindo o armazenamento e o compartilhamento de arquivos de maneira prática.",
            "Colaboração em tempo real – Assim como o Google Docs, você pode colaborar em tempo real com outras pessoas em um notebook, facilitando o trabalho em equipe e a revisão de código.",
            "Facilidade de uso e compartilhamento – Compartilhar notebooks com outras pessoas é simples, permitindo que você envie seu trabalho, visualize resultados e compartilhe código facilmente com colegas ou em projetos públicos."
        ]
    },
    {
        title: "opencv",
        descriptionTitle: "Biblioteca Python:",
        description: "OpenCV (Open Source Computer Vision Library) é uma biblioteca open-source amplamente usada para processamento de imagens e visão computacional. Ela contém mais de 2.500 algoritmos otimizados para tarefas como reconhecimento de objetos, processamento de vídeo, análise de imagens, e mais, sendo uma das bibliotecas mais populares e poderosas para análise visual e computação gráfica.",
        advantagesDescription: [
            "Desempenho otimizado – OpenCV é projetado para ser rápido e eficiente, com suporte para processamento paralelo e otimizações de hardware, permitindo que ele execute operações complexas em tempo real.",
            "Versatilidade – Ele oferece uma grande variedade de funções para processamento de imagens, vídeos, análise de vídeo em tempo real, filtros e transformações geométricas, sendo útil em muitas aplicações de visão computacional.",
            "Compatibilidade com múltiplas linguagens – OpenCV pode ser usado em várias linguagens, incluindo C++, Python, Java, e MATLAB, tornando-o acessível a desenvolvedores de diferentes plataformas.",
            "Apoio a diferentes dispositivos e plataformas – Ele pode ser executado em diversas plataformas, como Windows, Linux, macOS, Android e iOS, o que facilita o desenvolvimento de aplicações multiplataforma.",
            "Completamente gratuito e open-source – OpenCV é uma biblioteca de código aberto, permitindo que os desenvolvedores contribuam com melhorias e utilizem a biblioteca sem custos, o que ajuda na criação de soluções acessíveis e inovadoras."
        ]
    },

    {
        title: "yolo",
        descriptionTitle: "Algoritmo de Detecção de Objetos:",
        description: "YOLO (You Only Look Once) é um algoritmo de detecção de objetos em tempo real baseado em deep learning. Ele identifica e localiza vários objetos dentro de uma imagem ou vídeo com alta precisão e velocidade, tudo em uma única passagem pela rede neural — por isso o nome “Você só olha uma vez”. Enquanto métodos tradicionais dividem a tarefa de localizar e classificar objetos em etapas separadas, o YOLO faz tudo de uma vez só, tornando-o ideal para aplicações como vigilância, carros autônomos, robótica e análise de vídeo em tempo real.",
        advantagesDescription: [
            "Altíssima velocidade – YOLO é extremamente rápido porque realiza a detecção e classificação de objetos em uma única etapa, sendo ideal para aplicações em tempo real.",
            "Detecção de múltiplos objetos simultaneamente – Ele consegue identificar vários objetos em uma imagem com boa precisão, mesmo quando estão sobrepostos ou em diferentes escalas.",
            "Precisão aprimorada – Versões mais recentes como YOLOv5 e YOLOv8 alcançam alta taxa de acerto com baixo índice de falsos positivos.",
            "Arquitetura simples e integrada – Toda a análise ocorre em um único modelo de rede neural, o que simplifica a implementação, manutenção e treinamento em comparação com métodos tradicionais.",
            "Ampla comunidade e suporte – Por ser open-source e amplamente usado, YOLO tem grande documentação, exemplos disponíveis e é fácil de encontrar modelos pré-treinados ou soluções específicas para diferentes contextos."
        ]
    },

]

let techSelected = techs[0]

const Technologies: FC = () => {

    const navigate = useNavigate();

    const handleClickIcon = (icon: string) => {
        navigate('/techs', { state: icon });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const location = useLocation();
    const title = location.state as { title?: string } || {};
    console.log(title)
    for (let i = 0; i <= techs.length; i++) {
        if (techs[i].title == title) {
            techSelected = techs[i]
            console.log(techSelected)
            break;
        }
    }
    return (
        <div className={styles.tech}>
            <div className={styles.icons}>
                {skillsList.map(([label, icon]) => (
                    <div
                        className={styles.icon} key={icon}
                    >
                        <button className={styles.iconButton} onClick={() => handleClickIcon(icon)}>
                            <p>{label}</p>
                            <img className={styles.iconConfig} src={`/svg/${icon}.svg`} alt={label} />
                        </button>
                    </div>
                ))}
            </div>
            
            <section className={styles.sectionTech}>
                <div className={styles.titleDiv}>
                    <img className={styles.img} src={`/svg/${techSelected.title}.svg`} alt="" />
                    <h1 className={styles.title}>{techSelected.title.toUpperCase()}</h1>
                </div>
                <div className={styles.descriptionSection}>
                    <h2 className={styles.h2Title}>{techSelected.descriptionTitle}</h2>
                    <p className={styles.descriptionText}>{techSelected.description}</p>
                    <h2  className={styles.advantages}>Vantagens</h2>
                    <ol className={styles.advantagesDescription} >
                        {techSelected.advantagesDescription.map((item, index) => (
                            <li className={styles.item}>{item}</li>
                        ))}
                    </ol>

                </div>
            </section>
            
        </div>
    )
}

export default Technologies