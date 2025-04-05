import React, { FC } from "react";
import styles from "./Footer.module.css"

const Footer:FC = () =>{
    return(
        <footer className={styles.footer}>
            <div className={styles.navigation}>
                <h2>Navegação</h2>
                <ul>
                    <li><img className={styles.svg} src="/svg/home.svg" alt="Icone home" /><a href="mailto:vitorserpa123@gmail.com" target="_blank">Home</a></li>
                    <li><img className={styles.svg} src="/svg/about.svg" alt="" /><a href="github.com/VitorSerpa" target="_blank">Sobre</a></li>
                    <li><img className={styles.svg} src="/svg/contact.svg" alt="" /><a href="https://www.linkedin.com/in/vitor-serpa-925b46322/" target="_blank">Contato</a></li>
                    <li><img className={styles.svg} src="/svg/project.svg" alt="" /><a href="wa.me/12981312111" target="_blank">Projetos</a></li>
                </ul>
            </div>

            <div className={styles.contacts}>
                <h2 id="contato">Contato</h2>
                <ul>
                    <li><img className={styles.svg} src="/svg/gmail.svg" alt="Icone email" /><a href="mailto:vitorserpa123@gmail.com" target="_blank">Email</a></li>
                    <li><img className={styles.svg} src="/svg/github.svg" alt="" /><a href="github.com/VitorSerpa" target="_blank">GitHub</a></li>
                    <li><img className={styles.svg} src="/svg/linkedin.svg" alt="" /><a href="https://www.linkedin.com/in/vitor-serpa-925b46322/" target="_blank">Linkedin</a></li>
                    <li><img className={styles.svg} src="/svg/whatsapp.svg" alt="" /><a href="wa.me/12981312111" target="_blank">WhatsApp</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer