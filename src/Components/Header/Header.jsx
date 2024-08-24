import { useEffect } from "react";
import "./Header.scss";
import profile from "../../assets/profile.jpg";

const Header = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll("nav ul li");
    const indicator = document.querySelector("nav .indicator");

    function update() {
      let width = navLinks[0].offsetWidth;
      let left = navLinks[0].offsetLeft;

      indicator.style.width = `${width + 28}px`;
      indicator.style.left = left + "px";
    }
    update();

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        let width = link.offsetWidth;
        let left = link.offsetLeft;

        indicator.style.left = left + "px";
        indicator.style.width = `${width + 28}px`;

        link.classList.add("active");
      });
    });

    window.addEventListener("resize", update());
  }, []);

  return (
    <header>
      <nav>
        <ul>
          <div className="indicator"></div>

          <li className="active">
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">GET IN TOUCH</a>
          </li>
        </ul>
      </nav>

      <span className="profile">
        <img src={profile} alt="" />
      </span>
    </header>
  );
};

export default Header;
