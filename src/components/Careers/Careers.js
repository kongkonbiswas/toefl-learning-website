import React from 'react';
import { Card } from 'react-bootstrap';
import img from "../..//images/img/download (1).jpg";

const Careers = () => {
    return (
      <Card className="bg-dark text-white">
        <Card.Img src={img} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="text-success">
            Your Expertise. Our Strength.
          </Card.Title>
          <Card.Text className="text-dark">
            <strong className="text-primary">
              At ETS, we recruit people who love learning and teaching and
              strive to maintain the highest standards in the field of
              education.
            </strong>
            <hr />
            The professional challenges at our organization are rewarding and
            endless: you can learn new skill sets, programs and applications;
            work with preeminent scholars, researchers and policymakers; develop
            groundbreaking products and services; and push the boundaries of
            knowledge in the service of learning. Our employees accomplish these
            achievements in an environment that respects expertise, promotes
            intellectual engagement and nurtures professional advancement. If
            you share our commitment to education, there's no better place for
            you than ETS.
          </Card.Text>
          <Card.Text>Last updated 2 days ago</Card.Text>
          <button>
            <a className=" text-info p-5" href="https://www.ets.org/careers">
              Learn More
            </a>
          </button>
          <button>
            <a href="https://etscareers.pereless.com/index.cfm?cid=83080">
              Wiew Job Opportunities
            </a>
          </button>
        </Card.ImgOverlay>
      </Card>
    );
};

export default Careers;