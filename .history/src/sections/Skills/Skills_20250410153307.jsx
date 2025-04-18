import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='HTML' />
        <SkillList src={checkMarkIcon} skill='CSS' />
        <SkillList src={checkMarkIcon} skill='JavaScript' />
        <SkillList src={checkMarkIcon} skill='Tailwind CSS' />
        <SkillList src={checkMarkIcon} skill='React' />
        <SkillList src={checkMarkIcon} skill='Restful API (API development)' />
        <SkillList src={checkMarkIcon} skill='Databases(MongoDB)' />
        <SkillList src={checkMarkIcon} skill='Node.js (In progress)' />
        <SkillList src={checkMarkIcon} skill='DevOps (In progress)' />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='Git & Github' />
        <SkillList src={checkMarkIcon} skill='Figma' />
        <SkillList src={checkMarkIcon} skill='Vite' />
        <SkillList src={checkMarkIcon} skill='Visual Studio Code' />
        <SkillList src={checkMarkIcon} skill='Netlify' />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
