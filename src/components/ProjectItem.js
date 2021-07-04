import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import ProjectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-1);
    img {
      height: 100%;
    }
  }
  .project__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem ipsum dolor sit amet consectotur adipisicing alt adio undo',
}) {
  return (
    <Zoom>
      <ProjectItemStyles>
        <Link to="/project" className="projectItem__img">
          <img src={img} alt="" />
        </Link>
        <div className="project__info">
          <Link to="#">
            <h3 className="projectItem__title">{title}</h3>
          </Link>
          <p className="projectItem__desc">{desc}</p>
        </div>
      </ProjectItemStyles>
    </Zoom>
  );
}

export default ProjectItem;
