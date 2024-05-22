import React from "react";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Services3 = ({ bigTitle, grid, services }) => {
  return (
    <section
      className={`${!grid ? "services" : "services-grid"} section-padding ${!grid ? "bg-gray" : "pt-0"
        } `}
    >
      <div className="container">
        {!bigTitle ? (
          <div className="section-head text-center">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 col-sm-10">
                <h6 className="custom-font wow fadeInDown" data-wow-delay=".3s">
                  Our Services
                </h6>
                <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                  Best Features
                </h4>
              </div>
            </div>
          </div>
        ) : (
          <div className="main-header text-center">
            <h3>Services</h3>
            <div className="tex-bg">Best Features</div>
          </div>
        )}

        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4 mt-4" key={service.id}>
              <div
                className="item-bx bg-img wow fadeInUp"
                data-wow-delay={index == 0 ? ".3s" : index == 1 ? ".5s" : ".7s"}
                style={{ display: "grid", gridRow: "3", rowGap: "10px" }}
              >
                <div>
                  <LazyLoadImage src={service.creative.data.attributes.url} alt="" />
                </div>
                <div>
                  <h6 className="mb-20 mt-20">{service.title}</h6>
                  <p>{service.description}</p>
                </div>
                <div>
                  <Link href="/contact">
                    <div className={`more ${!grid ? "custom-font" : ""} mt-30`}>
                      Request Quotation
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services3;
