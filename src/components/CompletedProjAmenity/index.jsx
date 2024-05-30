import React from "react";

const SkillsCircle = ({ amenities }) => {
  return (
    <section className="skills-circle section-padding pt-0">
      <div className="row wow fadeInUp" data-wow-delay=".3s">
        {amenities.map((feature) => (
          <div className="col-lg-4 col-md-6 col-sm-6" style={{marginBottom: "20px"}} key={feature.id}>
            <div className="skill-icon mt-10">
              <img src={`/assets/img/amenities/${feature.id}.png`} alt="icon" />
            </div>
            <div className="skill-content">
              <h5>{feature.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsCircle;