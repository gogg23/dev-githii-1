import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';

function Hero() {
  return (
    <section id='hero' className='styles.container'>
        <div className='styles.colorModeContainer'>
            <img 
            className= {styles.hero}
            src= {heroImg} 
            alt='profile picture of Godfrrey Githii'    
            />
            <img className={styles.colorMode} 
            src={themeIcon} 
            alt='color mode icon'

            />

        </div>
        <div className='{styles.info}'>
            <h1>Godffrey <br/>
            Githii</h1>
            <h2>Frontend Developer</h2>
            <span>
                <a href='https:twitter.com'></a>
            </span>
        </div>
    </section>
  );
}

export default Hero;