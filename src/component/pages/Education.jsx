import React from "react";
import CustTimeline from "../common/CustTimeline";

import { EDU } from "../../data/education";

function Education(props) {
  return (
    <div>
      <CustTimeline
        type="education"
        education={EDU}
        theme={props.theme}
      ></CustTimeline>
    </div>
  );
}

export default Education;
