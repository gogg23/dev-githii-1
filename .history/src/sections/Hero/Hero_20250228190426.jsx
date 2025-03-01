import styles from './HeroStyles.module.css';
import heroz from '../../assets/heroz.webp';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import moviepic from '../../assets/moviepic.png';
import Resume from '../../assets/Resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroz}
          alt='profile picture of Godffrey Githii'
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt='color mode icon'
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Godffrey <br /> Githii
        </h1>
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
          With a background in tech writing, I bring creativity to frontend web
          development,
          <br />
          crafting responsive, user-friendly websites & apps using HTML, CSS,
          JavaScript, Tailwind, and React.
        </p>
        <a href={Resume} download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
