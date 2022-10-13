import React, { useState } from "react";
import SkillsCard from "./SkillsCard";
import skillsData from "./skillsIndex";

function Skills() {
  const [sData] = useState(skillsData.skills);
  return (
    <>
      {sData.map(({ skillsIcon, skillsTitle, skillsPassage }) => (
        <SkillsCard
          skillsImage={skillsIcon}
          skillsTitle={skillsTitle}
          skillsPassage={skillsPassage}
        />
      ))}
    </>
  );
}

export default Skills;
