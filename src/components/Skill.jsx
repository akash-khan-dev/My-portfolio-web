import React from "react";
import SectionHeading from "./SectionHeading";

const Skill = ({ data }) => {
  const { skills, sectionHeading } = data;
  return (
    <section class="skills-section gray-bg" id="skill">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-header text-center">
              <SectionHeading
                miniTitle={sectionHeading.miniTitle}
                title={sectionHeading.title}
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="skills-widget d-flex flex-wrap justify-content-center align-items-center">
              {skills.map((data, i) => (
                <div class="skill-item wow fadeInUp" data-wow-delay=".3s">
                  <div class="skill-inner">
                    <div class="icon-box">
                      <img src={data.src} alt="" />
                    </div>
                    <div class="number">{data.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
