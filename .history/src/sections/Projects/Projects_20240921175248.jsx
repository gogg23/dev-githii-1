import styles from './ProjectsStyles.module.css';
import gym1 from '../../assets/gym1.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={gym1}/>
        </div>
    </section>
  );
}

export default Projects 