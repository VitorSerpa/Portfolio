import styles from './ProjectCard.module.css';
import { useNavigate } from 'react-router-dom';

type ProjectCardProps = {
  projectName: string;
  darkImg: string;
  normalImg: string;
  svgs: string[];
  className?: string;
  gif?: string;
};

export default function ProjectCard({
  projectName,
  darkImg,
  normalImg,
  gif,
  svgs,
}: ProjectCardProps) {
  const navigate = useNavigate(); // Correct placement of the hook

  const handleClickIcon = (icon: string) => {
    navigate('/techs', { state: icon });
  };

  return (
    <div className={`${styles.projectCard}`}>
      <img className={styles.darkImage} src={darkImg} alt={projectName + ' dark'} />
      {gif ? (
        <img className={styles.gifImage} src={gif} alt={projectName + ' gif'} />
      ) : (
        <img className={styles.normalImage} src={normalImg} alt={projectName + ' normal'} />
      )}

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
              <button className={styles.buttonSvg} onClick={() => handleClickIcon(element)}>
                <img src={`svg/${element}.svg`} alt={element} className={styles.svg} />
              </button>

              <span className={styles.tooltipText}>{element.toUpperCase()}</span>
            </div>
          ))}
        </div>
        <button className={styles.seeMore}>Ver sobre</button>
      </div>
    </div>
  );
}