import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                corrupti rerum, tempora enim quos architecto obcaecati, ipsum
                nostrum natus ad incidunt sunt earum error tempore? Alias nam
                ipsa tempore cum?
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item" aria-label="HTML">
                  {/* <img src="" alt="image" /> */}
                  <h5>HTML</h5>
                </div>
                <div className="item" aria-label="CSS">
                  {/* <img src="" alt="image" /> */}
                  <h5>CSS</h5>
                </div>
                <div className="item" aria-label="JS">
                  {/* <img src="" alt="image" /> */}
                  <h5>Javascript</h5>
                </div>
                <div className="item" aria-label="typescript">
                  {/* <img src="" alt="image" /> */}
                  <h5>Typescript</h5>
                </div>
                <div className="item" aria-label="reactjs">
                  {/* <img src="" alt="image" /> */}
                  <h5>Reactjs</h5>
                </div>
                <div className="item" aria-label="mUI">
                  {/* <img src="" alt="image" /> */}
                  <h5>Material UI</h5>
                </div>
                <div className="item" aria-label="nodejs">
                  {/* <img src="" alt="image" /> */}
                  <h5>Nodejs</h5>
                </div>
                <div className="item" aria-label="express">
                  {/* <img src="" alt="image" /> */}
                  <h5>Express</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
