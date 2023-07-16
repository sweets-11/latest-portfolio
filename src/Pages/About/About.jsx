import { Box, Typography } from "@mui/material";
import "./About.scss";
import InfoCard from "./InfoCard/InfoCard";

const About = () => {
  return (
    <div className="about">
      <div className="name">
        <div>
          <h1 className="txt">AB</h1>
          <h1 className="txt">OU</h1>
        </div>

        <h1 className="txt lg">T</h1>

        <div className="me">ME</div>
      </div>

      <div className="info">
        <InfoCard sectionTitle="About Me" />

        <Box>
          <Typography variant="h4" fontFamily="roboto">
            Hi, I'm Aniket Jain, a Full-stack developer based in Indore, India.
            I'm passionate about bringing both the technical and visual aspects
            of digital products to life. With a keen eye for detail and a love
            for problem-solving, I thrive on transforming ideas into efficient
            and user-friendly solutions.
          </Typography>
          <Typography variant="h4" marginTop="7px" fontFamily="roboto">
            I find true joy in the process of creation, constantly learning and
            exploring new technologies to stay at the forefront of the rapidly
            evolving digital landscape.
          </Typography>
        </Box>

        <InfoCard sectionTitle="Education" />
        <Box>
          <Typography variant="h3" fontFamily="roboto">
            Bachelor of BBA (Pursuing)
          </Typography>
          <Typography variant="h4" marginTop="7px" fontFamily="roboto">
            From Rukmadevi Pannalal Laddha Maheshwari College (Indore, Madhya Pradesh)
          </Typography>
        </Box>

        <InfoCard sectionTitle="Skills" />

        <Box>
          <Typography variant="h4" fontFamily="roboto">
            HE SKILLS, TOOLS, AND TECHNOLOGIES I USE TO BRING YOUR PRODUCTS TO
            LIFE
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3" fontFamily="roboto">
            <li>Java (Intermediate )</li>
          </Typography>
          <Typography variant="h3" fontFamily="roboto">
            <li>OOP</li>
          </Typography>
          <Typography variant="h3" fontFamily="roboto">
            <li>Data Structures and Algorithms</li>
          </Typography>
        </Box>
        <Box
          display="flex"
          sx={{
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          }}
          justifyContent="flex-start"
        >
          <Box>
            <Typography fontFamily="roboto" variant="h4">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript ES6</li>
              <li>Bootstrap 5</li>
              <li>Postman</li>
              <li>Rest APIs</li>
              <li>Security and Authentication</li>
            </Typography>
          </Box>

          <Box sx={{ marginLeft: { xs: "none", md: "60px", lg: "100px" } }}>
            <Typography fontFamily="roboto" variant="h4">
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDb</li>
              <li>Git and GitHub</li>
              <li>Redux</li>
              <li>Material UI (React component library)</li>
            </Typography>
          </Box>
        </Box>
        <InfoCard sectionTitle="Social Life" />
        <Box>
          <Typography variant="h4" fontFamily="roboto">
            While I am deeply committed to my work, I understand the importance
            of maintaining a healthy work-life balance. Outside of coding and
            designing, I pursue hobbies and activities that bring me joy and
            recharge my creativity. Whether it's exploring nature, practicing
            mindfulness through cycling, walking in garden so I can have some
            fresh air, or playing games, I believe that a
            well-balanced life enhances my productivity and overall well-being.
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default About;
