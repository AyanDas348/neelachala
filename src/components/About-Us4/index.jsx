import React from "react";

const AboutUs4 = ({ data }) => {

  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="numbers">
              <div className="row">
                <div className="col-sm-6">
                  <div className="item mb-50">
                    <h3>
                      <span className="nbr playfont">{data.projects_completed}</span>
                    </h3>
                    <h6>Projects Completed</h6>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="item mb-50">
                    <h3>
                      <span className="nbr playfont">{data.satisfied_clients}</span>
                    </h3>
                    <h6>Satisfied Clients</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="txt-cont">
              <p className="mb-20 mt-40" style={{textAlign: "justify"}}>
                {data.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs4;

