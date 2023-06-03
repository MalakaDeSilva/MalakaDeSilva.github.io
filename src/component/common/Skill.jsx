import React, { useEffect, useState } from "react";
import "./common.css";

function Skill(props) {
  const [skillLevel, setSkillLevel] = useState(0);

  const style = {
    lineHeight: props.height,
    width: `${skillLevel}%`,
    backgroundColor: props.color,
  };

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
    async function skillAnimation() {
      for (let i = 0; i < props.level + 1; i++) {
        await sleep(20);
        setSkillLevel(i);
      }
    }

    skillAnimation(); // eslint-disable-next-line
  }, []);

  return (
    <div style={{ width: "90%" }}>
      <div style={{ marginTop: 10, marginBottom: 5, fontWeight: "bold" }}>
        {props.skill} - {skillLevel}%
      </div>
      <div className="skill-container">
        <div className="skill-fill" style={style}>
          &nbsp;
        </div>
      </div>
    </div>
  );
}

export default Skill;
