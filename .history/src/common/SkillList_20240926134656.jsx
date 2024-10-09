import React from 'react';

function SkillList({ src, Skill }) {
  return (
    <div>
      <img src={src} alt="checkmark icon" />
      <span>{Skill}</span>
    </div>
  );
}

export default SkillList;

