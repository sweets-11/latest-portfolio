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
            Hi, I'm Aniket Jain, an experienced MERN developer with over
            2.5 years of expertise in building robust and scalable web
            applications. My skill set encompasses advanced JavaScript
            techniques, TypeScript, and component-based architecture, with a
            strong focus on state management, responsive design, and scalable
            backend solutions. Throughout my career, I have successfully tackled
            complex challenges, creating high-quality, interactive user
            interfaces that meet client goals.
          </Typography>
          <Typography variant="h4" marginTop="7px" fontFamily="roboto">
            I find true joy in the process of creation, constantly learning and
            exploring new technologies to stay at the forefront of the rapidly
            evolving digital landscape.
          </Typography>
        </Box>

        <InfoCard sectionTitle="Work Experience" />

        <Box>
          <Typography variant="h4" fontFamily="roboto">
            As a <strong>software engineer at Thoughtwin</strong>, I
            contributed to the development of scalable web applications,
            following are the projects I created during my work with Thoughtwin.
            <Typography variant="h4" marginTop="7px" fontFamily="roboto">
              <strong>FifthAvenueHub:</strong> Developed a luxury e-commerce
              platform using the MERN stack with TypeScript, featuring a dynamic
              dashboard and seamless Stripe integration, improving API
              performance by 80%.
            </Typography>
            <Typography variant="h4" marginTop="7px" fontFamily="roboto">
              <strong> DriveThroughU:</strong> Built a React Native service
              platform for groceries, parcels, and car rentals, with Stripe
              payments, Google Cloud APIs for location services, and AWS for
              notifications and media management.
            </Typography>
            <Typography variant="h4" marginTop="7px" fontFamily="roboto">
              <strong>Enveral: </strong> Developed an AI-driven platform
              developed to generate viral video clips from YouTube URLs. The
              platform utilizes Node.js and OpenAI APIs to automate content
              creation. It employs ytdl-core for downloading videos and ffmpeg
              for video editing, allowing users to easily add engaging captions,
              hashtags, titles, and scripts. This enhances user experience and
              maximizes the potential for video virality, streamlining the
              process of creating and sharing compelling video content.
            </Typography>
          </Typography>
        </Box>

        <InfoCard sectionTitle="Education" />
        <Box>
          <Typography variant="h3" fontFamily="roboto">
            Bachelor of BBA
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4" marginTop="7px" fontFamily="roboto">
              From Rukmadevi Pannalal Laddha Maheshwari College (Indore, Madhya
              Pradesh)
            </Typography>
            <Typography variant="h5" fontFamily="roboto">
              7.2 CGPA
            </Typography>
          </Box>
          <Box marginTop="10px">
            <Typography variant="h3" fontFamily="roboto">
              12th Boards
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h4" marginTop="7px" fontFamily="roboto">
                Sarafa Vidya Niketan (Indore, Madhya Pradesh)
              </Typography>
              <Typography variant="h5" fontFamily="roboto">
                87.8%
              </Typography>
            </Box>
          </Box>
        </Box>

        <InfoCard sectionTitle="Skills" />

        <Box>
          <Typography variant="h4" fontFamily="roboto">
            THE SKILLS, TOOLS, AND TECHNOLOGIES I USE TO BRING YOUR PRODUCTS TO
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
              <li>Typescript</li>
              <li>Bootstrap 5</li>
              <li>Postman</li>
              <li>Rest APIs</li>
              <li>Security and Authentication</li>
              <li>Git and GitHub</li>
            </Typography>
          </Box>

          <Box sx={{ marginLeft: { xs: "none", md: "60px", lg: "100px" } }}>
            <Typography fontFamily="roboto" variant="h4">
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDb</li>
              <li>Redis</li>
              <li>Docker</li>
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
            fresh air, or playing games, I believe that a well-balanced life
            enhances my productivity and overall well-being.
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default About;
