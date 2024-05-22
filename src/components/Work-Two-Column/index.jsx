/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from "react-lazy-load-image-component";


const WorkTwoColumn = ({ projects }) => {
  useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);

  const newProjectLayout = [...projects?.filter((project) => project.attributes.project_status !== 'completed')].slice(0,8)

  return (
    <>
      <section className="works section-padding">
        <div className="container">
          <div className="section-head text-center mb-0">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 col-sm-10">
                <h6 className="wow fadeInDown" data-wow-delay=".3s">
                  Best Works
                </h6>
                <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                  Our Portfolio
                </h4>
              </div>
            </div>
          </div>
          {/* <div className="row mt-10 d-block d-sm-none">
            <div className="col-lg-12">
              <Slider
                className="our-works"
                {...{
                  dots: false,
                  arrows: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 2,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 2,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                      },
                    },
                  ],
                }}
              >
                {projects.map((project, index) => (
                  <Link
                    key={index}
                    legacyBehavior
                    href={`/project-details?name=${project.attributes?.name
                      ?.replace(/\s+/g, "_")
                      .toLowerCase()}`}
                  >
                    <div className="item">
                      <div className="img">
                        <LazyLoadImage
                          src={
                            project?.attributes?.main_photo?.data?.attributes?.url
                          }
                          alt={project?.attributes?.name}
                        />
                      </div>
                      <div className="cont vis">
                        <h5>{project?.attributes?.name}</h5>
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
          </div> */}
          <div className="row gallery
            d-none d-sm-block
          ">
            {newProjectLayout?.map((project, index) => (
              <div className="col-lg-6 items" key={index}>
                <Link
                  legacyBehavior
                  href={`/project-details?name=${project.attributes?.name
                    ?.replace(/\s+/g, "_")
                    .toLowerCase()}`}
                >
                  <div className="item">
                    <div className="img">
                      <LazyLoadImage
                        visibleByDefault={true}
                        src={
                          project?.attributes?.main_photo?.data?.attributes?.url
                        }
                        alt={project?.attributes?.name}
                      />
                    </div>
                    <div className="cont vis">
                      <h5>{project?.attributes?.name}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkTwoColumn;
