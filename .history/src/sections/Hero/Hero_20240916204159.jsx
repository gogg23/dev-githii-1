import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import twitterIcon from '../../assets/twitter-light.svg';
import githubIcon from '../../assets/github-light.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
import CV from '../../assets/cv.pdf';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt='profile picture of Godffrey Githii'
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt='color mode icon'
        />
      </div>
      <div className={styles.info}>
        <h1>Godffrey <br /> Githii</h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href='https://twitter.com/' target='_blank'>
            <img src={twitterIcon} alt='Twitter icon' />
          </a>
          <a href='https://github.com/' target='_blank'>
            <img src={githubIcon} alt='Github icon' />
          </a>
          <a href='https://linkedin.com/' target='_blank'>
            <img src={linkedinIcon} alt='LinkedIn icon' />
          </a>
        </span>
        <p>
          As a writer turned frontend developer, <br />
          I build responsive, user-friendly web apps using HTML, CSS, JavaScript, Tailwind, and React.
        </p>
        <a href={CV} download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
