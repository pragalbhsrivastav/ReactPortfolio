import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  link: string,
  title: string;
  // description: string;
  imgUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ link, title, imgUrl }) => {
  const navigate = useNavigate()
  return (
    <Col sm={6} md={4}>
      <div className='proj-imgbx'  onClick={() => window.open(link, "_blank")}>
        <img src={imgUrl} alt={title} />
        <div className='proj-txtx'>
          <h4>{title}</h4>
          {/* <span>{description}</span> */}
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
