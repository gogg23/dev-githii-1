import styles from './ProjectsStyles.module.css';
import gym1 from '../../assets/gym1.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard/>
        </div>
    </section>
  );
}

export default Projects 