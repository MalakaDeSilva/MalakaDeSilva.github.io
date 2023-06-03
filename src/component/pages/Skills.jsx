import React from "react";
import Skill from "../common/Skill";

import { TECHSKILLS } from "../../data/skills";

function Skills(props) {
  const createSkills = (skills) => {
    const _skills = [];

    for (let k = 0; k < skills.length; k++) {
      _skills.push(
        <Skill
          key={k}
          height={0.5}
          skill={skills[k].type}
          level={skills[k].level}
          color={props.color}
        ></Skill>
      );
    }

    return _skills;
  };

  let content = (
    <div className="col-center col-size pb-3 pt-2">
      <h1>Technical Skills</h1>
      {createSkills(TECHSKILLS)}
    </div>
  );
  return content;
}

export default Skills;
