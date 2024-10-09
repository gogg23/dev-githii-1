import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1>Skills</h1>
        <div className={styles.SkillList}>
            <SkillList src={checkMarkIcon} skill='html'/>
            <SkillList src={checkMarkIcon} skill='CSS'/>
            <SkillList src={checkMarkIcon} skill='Tailwind CSS'/>
            <SkillList src={checkMarkIcon} skill='JavaScript'/>
        </div> 
        <hr/>
        <div className={styles.SkillList}>
            <SkillList src={checkMarkIcon} skill='html'/>
            <SkillList src={checkMarkIcon} skill='CSS'/>
            <SkillList src={checkMarkIcon} skill='Tailwind CSS'/>
            <SkillList src={checkMarkIcon} skill='JavaScript'/>
        </div> 

    </section>
  );
}

export default Skills