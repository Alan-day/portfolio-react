import React from "react";
import "./ProjectTile.scss";
import code_sign from "./../../Resources/images/Vector(11).svg";

const ProjectTile = ({
  title,
  header,
  code_link,
  preview_link,
  description,
  project_picture,
  back_end_link,
  view,
}) => {
  return (
    <>
      <div className="card">
        <div className="card__top">
          {/* <img class="card__top--image" src={project_background} /> */}
        </div>

        <div className="card__preview">
          <img className="card__img" src={project_picture} />
        </div>
        <div className="card__language">
          <p className="card__title">{title}</p>
        </div>

        <div className="card__description">
          <div class="text">{description}</div>
        </div>
        <div className="card__header1">{header}</div>

        <div className="card__buttons">
          {view && (
            <button className="card__buttons--element1">
              <a href={view}>Verify</a>
            </button>
          )}
          {code_link && (
            <button className="card__buttons--element1">
              <a href={code_link}>Code</a>
              <img class="code-icon" src={code_sign} />
            </button>
          )}
          {preview_link && (
            <button className="card__buttons--element2">
              <a href={preview_link}>Preview</a>
            </button>
          )}
          {back_end_link && (
            <button className="card__buttons--element2">
              <a href={back_end_link}>Back-end</a>
              <img className="code-icon" src={code_sign} />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectTile;
