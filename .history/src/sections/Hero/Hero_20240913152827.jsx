import styles from './HeroStyles.module.css';
import heroImg '../../assets/hero-img.png';

function Hero() {
  return (
    <section id='hero'>
        <div>
            <img src= {heroImg} alt=''/>
        </div>
    </section>
  );
}

export default Hero;