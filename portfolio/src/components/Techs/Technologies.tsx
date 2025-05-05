import { title } from "process";
import { FC } from "react";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from "./Tehnologies.module.css"


const techs = [
    {
        title: "python",
        imgs: ["imagem", "imagem2"],
        description: "Python é blablablabla",
        advantages: "PQ sim",
        advantagesDescription: "KDSAOSDAP",
        disvatanges: "PQ é ruim",
        disvatangesDescription: "balblabalba"
    },
    {
        title: "javascript",
        imgs: ["imagem"],
        description: "Javascript é blablablabla",
        advantagesDescription: "KDSAOSDAP",
        disvatangesDescription: "balblabalba"
    },

    {
        title: "css",
        imgs: ["imagem"],
        description: "Javascript é blablablabla",
        advantagesDescription: "KDSAOSDAP",
        disvatangesDescription: "balblabalba"
    },
]

let techSelected = techs[0]

const Technologies: FC = () => {
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
            <section className={styles.sectionTech}>
                <img src={`/svg/${techSelected.title}.svg`} alt="" />
                <h1 className={styles.title}>{techSelected.title.charAt(0).toUpperCase() + techSelected.title.slice(1).toLowerCase()}</h1>
                <p>{techSelected.description}</p>
                <h2>Vantagens</h2>
                <p>{techSelected.advantagesDescription}</p>
                <h2>Desvantagens</h2>
                <p>{techSelected.disvatangesDescription}</p>
            </section>
        </div>
    )
}

export default Technologies