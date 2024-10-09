import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <div className={styles.SkillList}></div> 
        <span>
            <img src={checkMarkIcon} alt='Checkmark icon'/>
            <p>HTML</p>
        </span>
    </section>
  );
}

export default Skills