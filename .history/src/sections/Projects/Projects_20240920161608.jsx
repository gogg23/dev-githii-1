import styles from './ProjectsStyles.module.css';
import gym1 from '../../assets/gym1.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <a href="https://react-gym-web-site.netlify.app/"></a>
      <img src={gym1} alt='gym logo'/>
      <h3>Gym App</h3>
      <p>React Gym Website</p>
        </div>
    </section>
  );
}

export default Projects 