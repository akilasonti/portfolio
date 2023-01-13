import "./App.css";
import MyNavbar from "./Components/Navbar";
import ContentSection from "./Components/ContentSection";
import AboutMe from "./Components/AboutMe";
import MyEducation from "./Components/MyEducation";
function App() {
  return (
    <div>
      <MyNavbar />
      <div className="portfolio">
       <ContentSection/>
       <AboutMe/>
       <MyEducation/>
      </div>
    </div>
  );
}

export default App;
