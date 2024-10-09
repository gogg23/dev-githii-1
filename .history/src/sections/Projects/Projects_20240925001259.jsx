import styles from './ProjectsStyles.module.css';
import gym1 from '../../assets/gym1.png';
import hotel from '../../assets/hotel.jpg';
import eggplant from '../../assets/eggplant-1.png';
import dark-login from '../../assets/dark-login.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={gym1} 
        link='https://react-gym-web-site.netlify.app/'
        h3='gym '
        p='react gym app'
        />
        <ProjectCard src={hotel} 
        link='https://ho-tel-landing-page.netlify.app/'
        h3='hotel '
        p='landing page'
        />
         <ProjectCard src={eggplant} 
        link='https://meme-gene-rator-app.netlify.app/'
        h3='memes'
        p='meme generator app'
        />
        <ProjectCard src={dark-login} 
        link='https://react-login-register1.netlify.app/'
        h3='login'
        p='react login page'
        />
      </div>
    </section>
  );
}

export default Projects;
