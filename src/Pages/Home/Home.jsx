import "./Home.scss";
import "./Home.css";
import profile from "../../assets/profile.jpg";
import {Link} from "react-router-dom";
const Home = () => {
  return (<>
    <div className="home">
      <div className="details">
        <span className="intro">Hello, I'm</span>

        <div className="name">
          <div>
            <h1 className="txt">ANI</h1>
            <h1 className="txt">KE</h1>
          </div>

          <h1 className="txt lg">T</h1>

          <div className="dev">
            FULL-STACK <b>DEVELOPER</b>
          </div>
        </div>
      </div>

      <div className="profile-img">
        <img src={profile} alt="" />
      </div>

    </div>
<Link to="https://drive.google.com/drive/folders/17nmD_276P5QSFm-9xQCRANFjXCsAIl9U?usp=sharing" target="_blank">

<button class="button-51" role="button">Download Resume</button>
</Link>
    </>
  );
};

export default Home;
