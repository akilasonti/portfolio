import { useState } from "react";
import "./MyEducation.css";
import { Button,Progress } from 'reactstrap';
import hotelimage from "../images/hotelimage.png";
import photographyimage from "../images/photographyimage.png";
import todolistimage1 from "../images/todolistimage1.png";
import {Form, FormGroup,Label, Input, FormText } from 'reactstrap';
import phone_call from "../images/phone-call.png"; 
import akila_resume from "../images/Akila_Resume1.pdf";
import E_commerce_web from "../images/E-commerce_web.png";
import Shortnerlink from "../images/shortnerlink.png";
function MyEducation() {
  const [bar,setBar]=useState('language');
  return (
    
      <div>
      <div className="main" id="educationSection">
        <h2 className="education">
          <u>EDUCATION</u>
        </h2>

        <div className="master">
          <h2 className="postgra">Master of Arts</h2>
          <p className="collegeCss">
            Vikram University Ujjain .June 2016 - May 2018
          </p>

          <h2 className="postgra">Bachelor of Arts</h2>
          <p className="collegeCss">
            Vikram University Ujjain. june 2013 - May 2016
          </p>

          <h2 className="postgra">12th</h2>
          <p className="collegeCss">
            Girls Higher Secondary School Sonkatch. june 2012 - March 2013
          </p>

          <h2 className="postgra">10th</h2>
          <p className="collegeCss">
            Govt. High School Bawai. june 2010 - March 2011
          </p>
        </div>
      </div>
      <hr ></hr>
{/* ----------------------- */}
<div className="main">
        <h2 className="education">
          <u>INTERNSHIP</u>
        </h2>

        <div className="master">
        <h2 className="postgra">Full Stack Developer Intern</h2>
          <h2 className="postgra1">Full Stack Web Development Bootcamp Newton School:- Full Stack Web Development along with Problem Solving. Technical Stack learned: Node JS, React JS,HTML, CSS, JavaScript, and Bootstrap,Tailwind-CSS. Participated in various Coding contests organized by the platform. Worked on various projects like To-do-list, Calculator,Photography,Hotel-booking.</h2>
          <br></br>
        </div>
        </div>
        <hr></hr>
       
        <div className="main" id="skilSection">
        <h2 className="education">
          <u>SKILLS</u>
        </h2>
       
        <div className="parentbtn">
        <div className="prt">
        <Button color="success" onClick={()=>setBar("language")} size="lg">Language</Button>{' '}
        <Button color="success" onClick={()=>setBar("framework")} size="lg">Framworks</Button>
        <Button color="success" onClick={()=>setBar("concept")} size="lg">Programming-Concepts</Button>
        <Button color="success" onClick={()=>setBar("tool")} size="lg">Other-Tools</Button>
        </div>
        {(bar=='language')?<>
        <div className="proparent">
          <h5 className="language">JAVASCRIPT</h5>
        <Progress className="progress1" animated color={2*5} value="60" />
        <h5 className="language">JAVA</h5>
        <Progress className="progress1" animated color="warning" value="55" />
        <h5 className="language">HTML & CSS</h5>
        <Progress className="progress1" animated color="danger" value="50" />
        </div>
        </>:<></>}
       { (bar=='framework')?<>

        <div className="proparent">
          <h5 className="language">ReactJS</h5>
        <Progress className="progress1" animated color={2*5} value="60" />
        <h5 className="language">NodeJS</h5>
        <Progress className="progress1" animated color="warning" value="55" />
        </div>
        </>:<></>}

        {(bar=='concept')?<>
        
        <div className="proparent">
          <h5 className="language">Data Structure & Algorithm</h5>
        <Progress className="progress1" animated color={2*5} value="60" />
        <h5 className="language">Computer Science Fundamentals</h5>
        <Progress className="progress1" animated color="danger" value="55" />
        </div>
        </>:<></>}
        {(bar=='tool')?<>

        <div className="proparent">
          <h5 className="language">TalwindCSS</h5>
        <Progress className="progress1" animated color={2*5} value="60" />
        <h5 className="language">Bootstrap</h5>
        <Progress className="progress1" animated color="warning" value="55" />
        <h5 className="language">jQuery</h5>
        <Progress className="progress1" animated color="danger" value="70" />
        </div>
        </>:<></>}
        <br></br>
        </div>
        </div>
        
        <div id="project" className="project">
        <Button className="projectbtn" color="success" size="lg" active>CHECK OUT SOME OF MY PROJECTS</Button>{' '}

        <div className="imgparent">
        <img className="img" src={E_commerce_web} alt="e-commerceimage"/>
        <div className="contentparent">
        <h2 className="imgcontent">E-Commerce Website</h2>

        <ul className="li-parent">
        <li>We look at the whole picture, from how to arrange your products, what payment options to use and how to market to you customers. By providing a solution that includes everything, we can maximise the number of sales you will make.</li>
          <li>We only offer e-commerce platforms that will let you grow as sales increase and add extra features as you need them. Our aim is to help you grow your business as much as possible, so choosing the right platform is really important.</li>
          <li>Yes! Making sure you know how to run your website is really important. We’ll show you how to manage your orders and offer tips on maximising sales. We also provide great support options with our award-winning customer service.
          Tools and Technologies Used:</li>
          <li> ReactJs, NodeJs, Reactstrap, React-Router, Html and CSS.</li>
        </ul>
        </div>
        </div>

        <div className="imgparent">
        <img className="img" src={Shortnerlink} alt="shortnerlinkimage"/>
        <div className="contentparent">
        <h2 className="imgcontent">Shortner Link App</h2>

        <ul className="li-parent">
        <li>Trying to convince people to click on a long, jumbled link is almost as bad as a door-to-door salesman trying to sell people financial services.</li>
          <li>Shortening your links makes them easier to share and track their performance. They’re an excellent choice for business owners, marketers, individuals, and anyone who’d like to post links that are easy to read and remember.</li>
          <li>When you post long links on social media, it can look like spam or deter users from clicking on something they don't recognize. In particular, adding tracking parameters (such as UTM codes) to your links can result in URLs that look long and confusing. Link shorteners can turn spammy-looking links into clear and user-friendly links.
          Tools and Technologies Used:</li>
          <li> ReactJs, NodeJs, Reactstrap, Html and CSS.</li>
        </ul>
        </div>
        </div>

        <div className="imgparent">
        <img className="img" src={hotelimage} alt="hotelimage"/>
        <div className="contentparent">
        <h2 className="imgcontent">Hotel-Booking Website</h2>
        <ul className="li-parent">
          <li>The goal of this project was to create an easy-to-use platform that would allow guests to book rooms at a chain of luxury hotels directly through the company's website.</li>
          <li>Designed and developed the user interface using HTML, CSS, and JavaScript, ensuring that it was responsive and user-friendly across various devices and browsers</li>
          <li>
          Implemented the booking flow, including the search function, rate comparison tool, and reservation form</li>
          <li>Integrated the platform with the hotel's property management system using API calls and custom scripts

          Tools and Technologies Used:</li>
          <li>HTML,CSS and JavaScript</li>
        </ul>
        </div>
        
        </div> 
        <div className="imgparent">
        <img className="img" src={photographyimage} alt="portimage"/>
        <div className="contentparent">
        <h2 className="imgcontent">Photography App</h2>

        <ul className="li-parent">
        <li>Researching and scouting potential shooting locations</li>
          <li>Creating shot lists and planning the shootuser-friendly across various devices and browsers</li>
          <li>
          Capturing and composing high-quality images using a range of camera equipment</li>
          <li>Capturing and composing high-quality images using a range of camera equipment
          </li>
          <li>Delivering final images to clients and communicating with them throughout the process
          Tools and Technologies Used:</li>
          <li>Html and CSS</li>
        </ul>
        </div>
        </div>

        <div className="imgparent">
        <img className="img" src={todolistimage1} alt="portimage"/>
        <div className="contentparent">
        <h2 className="imgcontent">Todo-List App</h2>

        <ul className="li-parent">
          <li>Designing the application's user interface and overall look and feel</li>
          <li>Developing the application's functionality using a relevant programming language (React Js and Bootstrap etc.)</li>
          <li>Implementing features such as task creation, editing, and deletion</li>
          <li>Adding search and categorization functionality</li>
          <li>Deploying the application to a web server or mobile platform Tools and Technologies Used:</li>
          <li>Programming languages such as React Js and Reactstrap etc.</li>
        </ul>
        </div>
        </div>
        <embed src={akila_resume} width="100%" height="700px" id="resumeSection"/>

        <div className="leavemsg"><u>Want to get in touch? Leave a message</u></div>
        <div className="formparent">
       
        <Form >
        <FormGroup className="formgroup">
          <Label className="label" for="exampleEmail">Email</Label>
          <Input   className="inputgroup" type="email" name="email" id="exampleEmail" placeholder="email" />
        </FormGroup>

        <FormGroup className="formgroup">
          <Label  className="label" for="examplePassword">Password</Label>
          <Input  className="inputgroup" type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>

        <FormGroup className="formgroup">
          <Label  className="label" for="examplePassword">Subject</Label>
          <Input   className="inputgroup" type="subject" name="subject" id="exampleSubject" placeholder="subject" />
        </FormGroup>

        <FormGroup className="formgroup">
          <Label  className="label" for="exampleText">Text Area</Label>
          <Input   className="inputarea" type="textarea" name="text" id="exampleText" />
        </FormGroup>
        
        <FormGroup className="btnparent">
        <Button className="formbtn" color="success" size="lg">Click Me</Button>{' '}
        </FormGroup>
        </Form>
        <div>
        <div className="addressparent" id="contactSection">
        <h2 className="address2">Contact Details 
        <br></br>
        Akila Sonti
        <br></br>
        Ward-no.11/1,
        <br></br>
        Saraswati colony,Tarana,Ujjain M.P.
        <br></br>
        <img className="phoneicon" src={phone_call} alt="phone call image"/>+919131251574 
        </h2>
       
        
        </div>
        </div> 
        </div>
        </div>
        </div>     
  );
}
export default MyEducation;
