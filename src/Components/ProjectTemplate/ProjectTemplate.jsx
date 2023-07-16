import Tag from "../Tag/Tag";
import "./ProjectTemplate.scss";
import {Link} from "react-router-dom";

const ProjectTemplate = ({ projectName, projectDesc, tags, img, link }) => {
  return (
    <div className="project">
      <div className="project-details">
        <h2 className="project-name">{projectName}</h2>
        <span className="project-desc">{projectDesc}</span>

        <div className="tags">
          <h2 className="tech-stack">Technologies used:</h2>
          <div className="tags-wrapper">
            {tags.map((tag) => {
              return <Tag key={projectName} value={tag} />;
            })}
          </div>
        </div>
      </div>

      <div className="project-images">
        <div className="img">
          <Link target="_blank" to={link} >
          <img src={img} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplate;
