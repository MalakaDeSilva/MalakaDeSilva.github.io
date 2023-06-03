import React from "react";
import { Col, Container, Row } from "reactstrap";
import CustomCard from "../common/CustomCard";

import { I1DARK, I1LIGHT, I2DARK, I2LIGHT } from "../../data/gitOverview";

function GitOverView(props) {
  const image1Dark = I1DARK;
  const image1Light = I1LIGHT;

  const image2Dark = I2DARK;
  const image2Light = I2LIGHT;

  let image1 = props.theme === "light" ? image1Light : image1Dark;
  let image2 = props.theme === "light" ? image2Light : image2Dark;

  let content = (
    <div className="col-center pt-3 pb-3">
      <h1>GitHub Overview</h1>
      <Container>
        <Row>
          <Col sm={6}>
            <img className="git-image" src={image1} alt="stat 1" />
          </Col>
          <Col sm={6}>
            <img className="git-image" src={image2} alt="stat 2" />
          </Col>
        </Row>
      </Container>
    </div>
  );

  return <CustomCard content={content}></CustomCard>;
}

export default GitOverView;
