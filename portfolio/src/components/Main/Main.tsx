import React, { FC } from "react";
import styles from "./Main.module.css"

const Main: FC = () =>{
    return (
        <main className={styles.main}>
            <section className={styles.sectionTitle}>
                <h1>Olá, eu sou o Vitor</h1>
                <p>Desenvolvedor Full-Stack</p>
                <div>
                    <button>Baixe meu CV</button>
                    <button>Entre em contato</button>
                </div>
            </section>
            <aside className={styles.sectionImg}>
                <img src="" alt="Minha imagem" />
            </aside>
        </main>
    )
}

export default Main 