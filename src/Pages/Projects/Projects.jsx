import { useState } from "react";
import ProjectTemplate from "../../Components/ProjectTemplate/ProjectTemplate";
import "./Projects.scss";
import {Link} from "react-router-dom"
import picsta from "../../assets/picsta.jpg"
import creativeCorner from "../../assets/creative.jpg";
import vibevision from "../../assets/vibevision.jpg";

const Projects = () => {
  const [tags] = useState([
    "React",
    "NodeJS",
    "CSS",
    "ExpressJS",
    "MongoDb",
    "Material UI",
    "Few more...",
    "React",
    "CSS",
    "Material UI",
    "Firebase",
    "Redux-toolkit",
    "React",
    "CSS",
    "Rapid APIs",
    "Material UI",
  ]);

  return (
    <>
    <div className="projects-wrapper">
      <ProjectTemplate
        projectName="Picsta"
        projectDesc="Picsta is such a site that provide a virtual space where users 
        can post tweets with custom captions, Basically this a social media MERN web-app where I used tech stacks like
        Material UI(React component library) to create responsive design, Redux-toolkit for state management , Formik and yup for form validation and may others "
        tags={tags.slice(0, 7)}
        img={picsta}
        link={"https://picsta.netlify.app/"}
      />

      <ProjectTemplate
        projectName="The Creative Corner"
        projectDesc="Basically it's a Blog web-app which is Authenticated with Google sign-up,
        where people can checkout each other blog, can post blogs and also have delete functionality. Here for the Front-end here we used React, CSS, Material UI(React component library) and for Backend-end we used Firebase"
        tags={tags.slice(6, 12)}
        img={creativeCorner}
        link={"https://the-creative-corner-158b1.web.app/"}
      />

      <ProjectTemplate
        projectName="Vibevision"
        projectDesc="Vibevision is a web-app that is designed to replicate the core 
        features and functionality of YouTube, which is the world's largest video 
        sharing platform. It includes features like playing video and getting video recommendations. 
        Here i used React,  CSS, Material UI(React component library) and an Api from Rapid APIs to feed the data to vibevision and 
         a npm package called 'react-player'  which gives vibevision to actually play videos in real time"
        tags={tags.slice(12, 17)}
        img={vibevision}
        link={"https://vibevision.netlify.app/"}
      />

      <div></div>
    </div>
    </>
  );
};

export default Projects;
