import React from "react";
import CustTimeline from "../common/CustTimeline";

import { WORK } from "../../data/work";

function Work(props) {
  return (
    <div>
      <CustTimeline type="work" work={WORK} theme={props.theme}></CustTimeline>
    </div>
  );
}

export default Work;
