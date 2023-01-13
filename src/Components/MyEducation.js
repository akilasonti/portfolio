import React from "react";
import "./MyEducation.css";
import { Button,Progress } from 'reactstrap';
import hotelimage from "../images/hotelimage.png";
import photographyimage from "../images/photographyimage.png";
import todolistimage1 from "../images/todolistimage1.png";
import {Form, FormGroup,Label, Input, FormText } from 'reactstrap';
import phone_call from "../images/phone-call.png"; 
function MyEducation() {
  return (
    
      <div>
      <div className="main">
        <h2 className="education">
          <u>EDUCATION</u>
        </h2>

        <div className="master">
          <h2 className="postgra">Master of Arts</h2>
          <p className="collegeCss">
            Vikram University Ujjain .June 2016 - May 2018
          </p>

          <h2 className="postgra">Bachlor of Arts</h2>
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
        </div>
        </div>
        <hr></hr>
       
        <div className="main">
        <h2 className="education">
          <u>SKILLS</u>
        </h2>
       
        <div className="parentbtn">
        <h4 className="prefrence">"Perfection is achieved not when there is nothing more to add,
        but rather when there is nothing more to take away.” – I believe “Simplicity is the soul of efficiency.” –</h4>

        <div className="btn">
        <Button color="success" size="lg">Language</Button>{' '}
        <Button color="success" size="lg">Framworks</Button>
        <Button color="success" size="lg">Programming-Concepts</Button>
        <Button color="success" size="lg">Other-Tools</Button>
        </div>

        <div className="proparent">
          <h5 className="language">JAVASCRIPT</h5>
        <Progress className="progress1" animated color={2*5} value="60" />
        <h5 className="language">JAVA</h5>
        <Progress className="progress1" animated color="success" value="55" />
        <h5 className="language">C</h5>
        <Progress className="progress1" animated color="danger" value="50" />
        </div>
        </div>
        </div>
        
        <div className="project">
        <Button className="projectbtn" color="success" size="lg" active>CHECK OUT SOME OF MY PROJECTS</Button>{' '}

        <div className="imgparent">
        <img className="img" src={hotelimage} alt="portimage"/>
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
        <div className="addressparent">
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
