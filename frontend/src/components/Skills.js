import React, { useState } from "react";
import Card from "./Card";
import skillsData from "./skillsIndex";

function Skills() {
  const [sData] = useState(skillsData.skills);
  return (
    <>
      <div className="grid md:grid-cols-3 container mx-auto inline-block gap-10">
        {sData.map(({ skillsIcon, skillsTitle, skillsPassage }) => (
          <Card
            image={skillsIcon}
            title={skillsTitle}
            passage={skillsPassage}
          />
        ))}
      </div>
    </>
  );
}

export default Skills;
