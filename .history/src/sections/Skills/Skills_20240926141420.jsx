import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
    <h1>Skills</h1>
    <div className={styles.skillsList}>
        <SkillList src={checkMarkIcon} Skill='html'/>
        <SkillList src={checkMarkIcon} Skill='CSS'/>
        <SkillList src={checkMarkIcon} Skill='Tailwind CSS'/>
        <SkillList src={checkMarkIcon} Skill='Javascript'/>
    </div>
    <hr/>
    <div className={styles.skillsList}>
    <SkillList src={checkMarkIcon} Skill='React'/>
    <SkillList src={checkMarkIcon} Skill='Restful API (API development)'/>
    <SkillList src={checkMarkIcon} Skill='Git & Github'/> 
    </div>  
    </section>
  );
}

export default Skills