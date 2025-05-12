import React, { FC } from "react";
import styles from "./Footer.module.css";

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialMedia}>
                <h1 className={styles.title}>Contato</h1>
                    <div className={styles.items}>
                        <a
                            target="_blank"
                            href="https://github.com/VitorSerpa?tab=overview&from=2025-05-01&to=2025-05-10"
                        >
                            <img src="/svg/github.svg" alt="" />
                        </a>
                        <a
                            target="_blank"
                            href="https://github.com/VitorSerpa?tab=overview&from=2025-05-01&to=2025-05-10"
                        >
                            Github
                        </a>
                        <a
                            target="_blank"
                            href="https://github.com/VitorSerpa?tab=overview&from=2025-05-01&to=2025-05-10"
                        >
                            <p className={styles.p}>VitorSerpa</p>
                        </a>
                    </div>
                    <div className={styles.items}>
                        <a href="https://wa.me/12981312111" target="_blank">
                            <img src="/svg/whatsapp.svg" alt="" />
                        </a>
                        <a href="https://wa.me/12981312111" target="_blank">
                            Whatsapp
                        </a>
                        <a href="https://wa.me/12981312111" target="_blank">
                            <p className={styles.p}>12981312111</p>
                        </a>
                    </div>
                    <div className={styles.items}>
                        <a href="https://www.linkedin.com/in/vitor-serpa-925b46322/" target="_blank">
                            <img src="/svg/linkedin.svg" alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/vitor-serpa-925b46322/" target="_blank">
                            Linkedin
                        </a>
                        <a href="https://www.linkedin.com/in/vitor-serpa-925b46322/" target="_blank">
                            <p className={styles.p}>Vitor Serpa</p>
                        </a>
                    </div>
                    <div className={styles.items}>
                        <a href="mailto:vitorserpa123@gmail.com" target="_blank">
                            <img src="/svg/gmail.svg" alt="" />
                        </a>
                        <a href="mailto:vitorserpa123@gmail.com" target="_blank">
                            Gmail
                        </a>
                        <a href="mailto:vitorserpa123@gmail.com" target="_blank">
                            <p className={styles.p}>vitorserpa123@gmail.com</p>
                        </a>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;
