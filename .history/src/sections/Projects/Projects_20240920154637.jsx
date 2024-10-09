import styles from './ProjectsStyles.module.css';
import gym1 from '../../assets/gym1.png';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
        <a href='https://meme-gene-rator-app.netlify.app/'></a>
        <img className='hover' src={gym1.png} alt=''/>
        </div>
    </section>
  )
}

export default Projects 