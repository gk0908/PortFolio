import { LuBrainCircuit } from "react-icons/lu";

import PageHeaderContent from "../../pageHeader/index";
import { skillsData } from "./utils";
import { Line } from "rc-progress"; // Correct import for progress bar
import { Animate, AnimateKeyframes } from "react-simple-animate";
import "./style.scss";
const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="Skills"
        icon={<LuBrainCircuit size={30} />}
      />

      <div className="skills_content_wrapper">
        {skillsData.map((item, i) => (
          <div className="skills_content_wrapper_inner-content" key={i}>
            <Animate
              play
              duration={1}
              delay={0.5}
              start={{ transform: "translateX(-200%)" }}
              end={{ transform: "translateX(0%)" }}
            >
              <h3 className="skills_content_wrapper_inner-content_category-text">
                {item.label}
              </h3>
              <div className="skills_content_wrapper_inner-content_progressbar-container">
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity: 1", "opacity :0"]}
                    iterationsCount={1}
                    key={j}
                  >
                    <div className="progressbar-wrapper" key={j}>
                      <p>{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="2"
                        strokeColor="yellow"
                        trailWidth="2"
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
