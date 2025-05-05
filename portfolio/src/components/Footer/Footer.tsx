import React, { FC } from "react";
import styles from "./Footer.module.css"

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <h1 className={styles.title}>Contato</h1>
                <div className={styles.socialMedia}>
                    <div className={styles.items}>
                        <img src="/svg/github.svg" alt="" />
                        <a href="">Github</a>
                        <a href=""><p className={styles.p}>VitorSerpa</p></a>
                    </div>
                    <div className={styles.items}>
                        <img src="/svg/whatsapp.svg" alt="" />
                        <a href="">Whataspp</a>
                        <a href=""><p className={styles.p}>12981312111</p></a>
                        
                    </div>
                    <div className={styles.items}>
                        <img src="/svg/linkedin.svg" alt="" />
                        <a href="">Linkedin</a>
                        <a href=""><p className={styles.p}>Vitor Serpa</p></a>
                    </div>
                    <div className={styles.items}>
                        <a href=""><img src="/svg/gmail.svg" alt="" /></a>
                        <a href="">Gmail</a>
                        <a href=""><p className={styles.p}>vitorserpa123@gmail.com</p></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer