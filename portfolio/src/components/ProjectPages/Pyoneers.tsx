import React, {FC} from "react";
import styles from "./Pyoneers.module.css"

const Pyoneers: FC = () =>{
    return(
        <div className={styles.body}>
            <h1 className={styles.h1}>Vencedor da 13ª maratona de programação Junior da Universidade do Vale do Paraiba em 2024</h1>
            <div className={styles.description}>
                <img className={styles.img} src="/images/certificado.jpeg" alt="" />
            </div>
        </div>
    )
}

export default Pyoneers