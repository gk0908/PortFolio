import { IoMdDocument } from "react-icons/io";

import PageHeaderContent from "../../pageHeader/index";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./utils";
import { FaUniversity } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

import './style.scss';
const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="Resume"
        icon={<IoMdDocument size={30} />}
      />

      <div className="timeline">
        <div className="timeline_experiance">
          <h3 className="timeline_experiance_header-text">Experience</h3>
          <VerticalTimeline layout={"1-column"} lineColor={"yellow"}>
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline_experiance_vertical-timeline-element"
                contentStyle={{
                    background:'none',
                    color:'white',
                    border:'1.5px solid yellow'
                }}
                icon={<MdOutlineWork />}
                iconStyle={{
                    background:'#181818',
                    color:'yellow'
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>
                    {item.title}
                  </h3>
                  <h4>
                    {item.role}
                  </h4>
                 
                </div>
                <p className="vertical-timeline-element-title-wrapper-desc">{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        {/* Education detail */}
        <div className="timeline_education">
          <h3 className="timeline_experiance_header-text">Education</h3>
          <VerticalTimeline layout={"1-column"} lineColor={"yellow"}>
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline_experiance_vertical-timeline-element"
                contentStyle={{
                    background:'none',
                    color:'white',
                    border:'1.5px solid yellow'
                }}
                icon={<FaUniversity />}
                iconStyle={{
                    background:'#181818',
                    color:'yellow'
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>
                    {item.title}
                  </h3>
                  <h4>
                    {item.institution}
                  </h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-desc">{item.Duration}</p>

              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
