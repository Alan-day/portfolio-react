import React from "react";
import "./ProjectTileList.scss";
import anotherData from "./../../../Resources/anotherData.js";
import ProjectTile from "../ProjectTile/ProjectTile";
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
      />
    );
  });
  console.log(anotherData);
  return <div className="projects-list">{tiles}</div>;
};

export default ProjectTileList;
