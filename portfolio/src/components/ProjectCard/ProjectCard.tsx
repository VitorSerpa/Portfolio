import styles from './ProjectCard.module.css';

type ProjectCardProps = {
  projectName: string;
  darkImg: string;
  normalImg: string;
  svgs: string[];
  className?: string; // Tornando className opcional
};

export default function ProjectCard({
  projectName,
  darkImg,
  normalImg,
  svgs,
}: ProjectCardProps) {
  return (
    <div className={`${styles.projectCard}`}> 
      <img className={styles.darkImage} src={darkImg} alt={projectName + ' dark'} />
      <img className={styles.normalImage} src={normalImg} alt={projectName + ' normal'} />
      <div className={styles.skillsProjectCard}>
        <h3>{projectName}</h3>
        {svgs.map((element, index) => (
          <img
            key={index}
            src={`svg/${element}.svg`}
            alt={element}
            className={styles.svg}
          />
        ))}
      </div>
      <div className={styles.hoverDescription}>
        <div className={styles.svgInfo}>
          {svgs.map((element, index) => (
            <div key={index} className={styles.svgWrapper}>
              <img src={`svg/${element}.svg`} alt={element} className={styles.svg} />
              <span className={styles.tooltipText}>{element.toUpperCase()}</span>
            </div>
          ))}
        </div>
        <button className={styles.seeMore}>Ver sobre</button>
      </div>
    </div>
  );
}