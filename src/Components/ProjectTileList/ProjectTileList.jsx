import React from "react";
import "./ProjectTileList.scss";
import anotherData from "./../../../Resources/anotherData.js";
import recentData from "../../../Resources/recentData";
import ProjectTile from "../ProjectTile/ProjectTile";
import projectsBackground from "../../../Resources/images/triangle_pic.jpg";

const ProjectTileList = () => {
  const tiles = anotherData.map((element) => {
    return (
      <ProjectTile
        project_picture={element.project_picture}
        title={element.title}
        header={element.header}
        description={element.description}
        code_link={element.code_link}
        preview_link={element.preview_link}
        back_end_link={element.back_end_link}
      />
    );
  });

  const recentTiles = recentData.map((element) => {
    return (
      <ProjectTile
        project_picture={element.project_picture}
        title={element.title}
        header={element.header}
        description={element.description}
        code_link={element.code_link}
        preview_link={element.preview_link}
        back_end_link={element.back_end_link}
      />
    );
  });

  return (
    <>
      <h1 className="project-header" id="projects">
        My most recent projects...
      </h1>
      <div className="project-list">
        {recentTiles}
        {/* <img
          src={projectsBackground}
          alt="picture"
          className="project-list__background"
        /> */}
      </div>

      <div className="project-header">
        <h1>Other projects</h1>
      </div>
      <div className="project-list">
        {tiles}
        {/* <img
          src={projectsBackground}
          alt="picture"
          className="project-list__background"
        /> */}
      </div>
    </>
  );
};

export default ProjectTileList;
