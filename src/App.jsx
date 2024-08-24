import { useEffect } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import { Link } from "react-router-dom";
import instagram from "./assets/instagram.png";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import twitter from "./assets/X.png";
import Subscribe from "./Pages/Home/Subscribe";
import { Box } from "@mui/material";

function App() {
  useEffect(() => {
    const navLinks = document.querySelectorAll("nav ul li");
    const indicator = document.querySelector("nav .indicator");

    const navIcons = document.querySelectorAll(".nav-toggle .nav-icon");

    const pages = document.querySelectorAll(".page");

    const profile = document.querySelector(".profile");

    function handleScroll() {
      let homeBottom = pages[0].getBoundingClientRect().bottom;
      let homeHeight = pages[0].offsetHeight;

      if (homeBottom < homeHeight / 2) {
        profile.classList.add("active");
      } else {
        profile.classList.remove("active");
      }

      for (let i = 0; i < pages.length; i++) {
        let currentPage = pages[i];

        let pageTop = currentPage.getBoundingClientRect().top;

        if (pageTop < 300) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
          });

          navLinks[i].classList.add("active");

          let width = navLinks[i].offsetWidth;
          let left = navLinks[i].offsetLeft;

          indicator.style.width = `${width + 28}px`;
          indicator.style.left = left + "px";

          navIcons.forEach((icon) => {
            icon.classList.remove("active");
          });

          navIcons[i].classList.add("active");
        }
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Header />
      <Nav />

      <main>
        <div className="page" id="home">
          <Home />
        </div>

        <div className="page" id="about">
          <About />
        </div>

        <div className="socials-wrapper">
          <h2 className="quick-links">Quick links</h2>

          <div className="socials">
            <Link
              to="https://github.com/sweets-11"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Box className="social">
                <img src={github} alt="" />
                <h1>{"GitHub"}</h1>
              </Box>
            </Link>

            <Link
              to="https://www.linkedin.com/in/aniket-jain-637025196/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div className="social">
                <img src={linkedin} alt="" />
                <h1>{"Linkedin"}</h1>
              </div>
            </Link>
            <Link
              to="https://x.com/AniketJ14856315"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div className="social">
                <img src={twitter} alt="" />
                <h1>{"Twitter"}</h1>
              </div>
            </Link>
            <Link
              to="https://www.instagram.com/aniketjain_1116/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div className="social">
                <img src={instagram} alt="" />
                <h1>{"Instagram"}</h1>
              </div>
            </Link>
          </div>
        </div>

        <div className="page" id="projects">
          <Projects />
        </div>

        <div className="page" id="contact">
          <Subscribe />
        </div>
      </main>
    </div>
  );
}

export default App;
