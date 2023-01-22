import "./ContentSection.css";
import profile_image from "../images/akila-jpeg.jpeg";
const ContentSection = () => {
  return (
    <div className="fullPageCss" id="homeSection">
      <img className="myprofilecss" src={profile_image} alt="profile image" />
      <span className="font">Hi,I am Akila_</span>
      <div>
      <p className="detailscss">
        I'm a Frontend Developer with a passion for solving real world problems
        with Programming. And I believe i'm a developer who always wants create
        something new Let's start scrolling and learn more about me
      </p>      
      </div>
    </div>
  );
};
export default ContentSection;
