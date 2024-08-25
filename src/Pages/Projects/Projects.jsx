import { useState } from "react";
import { ProjectTemplate } from "../../Components/ProjectTemplate/ProjectTemplate";
import "./Projects.scss";
import { Link } from "react-router-dom";
import picsta from "../../assets/picsta.jpg";
import fifthavenuehub from "../../assets/fifthavenuehub.jpg";
import drivethroughu from "../../assets/drivethroughu.png";
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
    "Stript",
    "Typescript",
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

  let picstaProject = tags.slice(0, 6);
  picstaProject.push("Few more...");
  console.log(picstaProject);

  let driveThroughuTech = [
    "React-Native",
    "CSS",
    "Redux-toolkit",
    "Firebase",
    "AWS",
    "NodeJS",
    "ExpressJS",
    "Stript",
    "GCP",
  ];
  return (
    <>
      <div className="projects-wrapper">
        <ProjectTemplate
          projectName="Fifthavenuehub"
          projectDesc="FifthAvenueHub is a scalable e-commerce fashion platform created using the MERN stack with TypeScript and Sass. The platform features a dynamic dashboard developed with React, Redux, and Chart.js, providing clients with real-time insights into product management, order approval, and sales tracking. It integrates Stripe for seamless payment processing and did backend caching and lazy loading to significantly enhance API performance, resulting in an 80% faster response time. The project emphasizes creating high-quality, interactive user interfaces and efficient data visualization processes, reducing client reporting time by 30%."
          tags={tags.slice(0, 9)}
          img={fifthavenuehub}
          link={"https://fifthavenue.vercel.app/"}
        />

        <ProjectTemplate
          projectName="Drivethroughu"
          projectDesc="DriveThroughU is a service platform developed using React Native for ordering groceries, sending parcels, and renting cars with drivers. The Node.js backend integrates Stripe for payment processing and utilizes various Google Cloud Platform APIs for location services. It also implements AWS Pinpoint and Firebase for push notifications and AWS S3 for image storage, ensuring a seamless user experience and efficient media management. The platform handles real-time updates via webhooks, providing a responsive and interactive service for users."
          tags={driveThroughuTech}
          img={drivethroughu}
          link={
            "https://drive.google.com/drive/folders/1XKmLgr_z_W0ItFryv4FLVROkIp-1tCHK?usp=sharing"
          }
        />

        <ProjectTemplate
          projectName="Picsta"
          projectDesc="Picsta is such a site that provide a virtual space where users 
        can post tweets with custom captions, Basically this a social media MERN web-app where I used tech stacks like
        Material UI(React component library) to create responsive design, Redux-toolkit for state management , Formik and yup for form validation and may others "
          tags={picstaProject}
          img={picsta}
          link={"https://picsta.netlify.app/"}
        />

        <ProjectTemplate
          projectName="The Creative Corner"
          projectDesc="Basically it's a Blog web-app which is Authenticated with Google sign-up,
        where people can checkout each other blog, can post blogs and also have delete functionality. Here for the Front-end here we used React, CSS, Material UI(React component library) and for Backend-end we used Firebase"
          tags={tags.slice(9, 13)}
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
          tags={tags.slice(14, 18)}
          img={vibevision}
          link={"https://vibevision.netlify.app/"}
        />

        <div></div>
      </div>
    </>
  );
};

export default Projects;
