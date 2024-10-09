import styles from './ProjectsStyles.module.css';
import gym1 from '../../assets/gym1.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={gym1} link='https://react-gym-web-site.netlify.app/' />
        h3='gym '
        p='react gym website'
      </div>
    </section>
  );
}

export default Projects;
