import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';

function Hero() {
  return (
    <section id='hero'>
        <div className='styles.colorModeContainer'>
            <img className='{styles.hero}' 
            src= {heroImg} 
            alt='profile picture of Godfrrey Githii'/>
            <img className='colorMode' 
            src='themeIcon' 
            alt='color mode icon'/>

        </div>
    </section>
  );
}

export default Hero;