import React from "react";

function SkillsCard({ skillsImage, skillsTitle, skillsPassage }) {
  return (
    <div className="container mx-auto inline-block mr-8 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div>
        <img src={skillsImage} />
      </div>
      <div className="p-5">{skillsTitle}</div>
      <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {skillsPassage}
      </div>
    </div>
  );
}

export default SkillsCard;
