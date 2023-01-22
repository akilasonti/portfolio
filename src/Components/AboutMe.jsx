import profile_image from "../images/akila-jpeg.jpeg";
import "./AboutMe.css";
import phone_call from "../images/phone-call.png";
import icon from "../images/icon.jpg";
export default function AboutMe() {
  return (
    <div className="contentheight" id="aboutSection">
      <h2 className="about">About Me</h2>
      <div className="hrcss">
        
        <img className="imgcss" src={profile_image} alt="profile image" />
        <div>
        <div className="fontwidth">
          I am a fresher FrontEnd Developer who loves programming and creating
          projects on ReactJS. While I have a comprehensive Arts background in
          M.A., my propensity has always been towards software development,
          programming and problem solving. I am a thorough learner with an
          intention of exploring different work positions. My motivation which
          drives me the most is self-improvement. You can check out some of my
          personal projects that I have recently worked on.here."
        </div>
        <div className="fontwidth">
        <h1>Contact Detail</h1>
        Akila Sonti
        <br></br>
        Ward no.11/1,
        <br></br>  
        Saraswati colony,Tarana,Ujjain M.P.
        <br></br>
        <img className="phoneno" src={phone_call} alt="phone call image" />+919131251574
        <br></br>
        <img className="email" src={icon} alt="email address"/>
        akilasonti9@gmail.com
        </div>  
        </div>
      </div>      
    </div>
  );
}
