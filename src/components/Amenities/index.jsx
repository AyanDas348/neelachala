import React from "react";

const SkillsCircle = ({ amenities }) => {
  return (
    <section className="skills-circle section-padding pt-0">
      <div className="row wow fadeInUp" data-wow-delay=".3s">
        {amenities.map((feature) => (
          <div className="col-lg-4 col-md-6 col-sm-6" style={{ marginBottom: "20px" }} key={feature.id}>
            <div className="skill-icon mt-10">
              <img src={feature.amenity_icon.data[0].attributes.url} alt="icon" />
            </div>
            <div className="skill-content">
              <h5>{feature.amenity_name}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsCircle;
