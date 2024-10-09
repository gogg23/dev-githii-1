import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
    <h1>Skills</h1>
    <div className='{styles.skillsList}'>
        <SkillList src={checkMarkIcon}/>
    </div>
    </section>
  )
}

export default Skills