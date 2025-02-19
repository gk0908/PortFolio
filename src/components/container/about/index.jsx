import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../pageHeader/index";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { FaJava } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

const personalDetails = [
  { label: "Name", value: "Gopi Kota" },
  { label: "Age", value: "19" },
  { label: "Occupation", value: "Student" }, // Corrected typo
  { label: "Email", value: "gopikota2005@gmail.com" },
  { label: "Phone", value: "7990977596" },
  { label: "Address", value: "Jamnagar, Gujarat, India" },
];

const summary =
  "I'm currently a dedicated student, passionate about learning and constantly seeking new challenges. My journey has been fueled by curiosity and a desire to grow both personally and professionally. I am eager to leverage my skills and knowledge to make a meaningful impact in my future endeavors.";

const About = () => {
  return (
    <section id="about" className="About">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={30} />}
      />{" "}
      {/* Fixed icon prop */}
      <div className="about_content">
        <div className="about_content_personalWrapper">
          <Animate
            play
            duration={2}
            delay={1}
            start={{ transform: "translateX(500px)" }} // Corrected spelling
            end={{ transform: "translateX(0px)" }} // Corrected spelling
          >
            <div className="about_content">
              <h3>Frontend developer</h3>
              <p>{summary}</p>
            </div>
          </Animate>
          <Animate
            play
            duration={2}
            delay={1}
            start={{ transform: "translateX(-500px)" }} // Corrected spelling
            end={{ transform: "translateX(0px)" }} // Corrected spelling
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        {/* Add more  side of about */}
        <div className="about_content_serviceWrapper">
        <Animate
            play
            duration={2}
            delay={1}
            start={{ transform: "translateX(600px)" }} // Corrected spelling
            end={{ transform: "translateX(0px)" }} // Corrected spelling
          >
          <div className="about_content_serviceWrapper_innerContent">
            <div>
              <IoLogoHtml5 size={50} color="var( --yellow-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={50} color="var( --yellow-theme-main-color)" />
            </div>
            <div>
              <FaJava size={50} color="var( --yellow-theme-main-color)" />
            </div>
            <div>
              <FaJsSquare size={50} color="var( --yellow-theme-main-color)" />
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
