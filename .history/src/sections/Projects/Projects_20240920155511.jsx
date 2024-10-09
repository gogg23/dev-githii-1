import styles from './ProjectsStyles.module.css';
import gym1 from '../../assets/gym1.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <a href="https://github.com/Ade-mir/company-landing-page-2"></a>
      <img src={gym1} alt='gym logo'/>
        </div>
    </section>
  );
}

export default Projects 