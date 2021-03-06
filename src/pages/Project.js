import React, { useState, useEffect } from 'react';
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import ProjectInfo from '../assets/data/projects';
import FooterSection from '../components/FooterSection';

const ProjectsStyles = styled.div`
  padding-top: 10rem;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
  .projects__searchbar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchbar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchbar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchbar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchbar,
    .projects__searchbar form,
    .projects__searchbar input {
      width: 100%;
    }
  }
`;

function Project() {
  const [searchText, setSearchText] = useState('');
  const [projectData, setProjectData] = useState(ProjectInfo);
  useEffect(() => {
    if (searchText === '') return;
    setProjectData(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  function handleChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(ProjectInfo);
    }
  }
  return (
    <ProjectsStyles>
      <div className="container">
        <SectionTitle heading="project" subHeading="some of my reacent work" />
        <div className="projects__searchbar">
          <form>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="Project Name"
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="projects__allItems">
          {projectData.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
            />
          ))}
        </div>
        <FooterSection />
      </div>
    </ProjectsStyles>
  );
}

export default Project;
