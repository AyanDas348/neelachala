/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Footer = ({ classText, data }) => {
  const {
    office_address,
    phone_number_1,
    phone_number_2,
    info_email,
    bussiness_enquire_email,
    google_maps_link,
    facebook,
    instagram,
  } = data;

  const shortener = (text, length) => {
    if (!text) return "";
    if (text.length > length) {
      return text.substring(0, length) + "...";
    } else {
      return text;
    }
  };

  return (
    <footer id="home_footer" className={`${classText ? classText : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Office Address</h6>
                    <a href={google_maps_link ?? "#"} target="_blank">
                      <p>{office_address}</p>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    {/* <a href={`mailto:${info_email}`}>
                      <p>{shortener(info_email, 30)}</p>
                    </a> */}
                    {/* <br /> */}
                    <a href={`mailto:${bussiness_enquire_email}`}>
                      <p>{shortener(bussiness_enquire_email, 30)}</p>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <a href={`tel:${phone_number_1}`}>
                      <p>{phone_number_1}</p>
                    </a>
                    <br />
                    <a href={`tel:${phone_number_2}`}>
                      <p>{phone_number_2}</p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="item">
              <div className="logo">
                <img
                  src="https://res.cloudinary.com/dagjy96pi/image/upload/v1716736177/996x318_neelachala_logo_1_e0d142bb0b.png"
                  alt="logo"
                  style={{
                    width: "fit-content",
                    color: "white",
                    height: "102px",
                    maxHeight: "102px",
                    paddingTop: "8px",
                    paddingBottom: "8px",
                    backgroundColor: ""
                  }}
                />
              </div>
              <div className="social">
                <Link legacyBehavior href={facebook ?? "#"}>
                  <a>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </Link>
                {/* <Link legacyBehavior href="#">
                  <a>
                    <i className="fab fa-twitter"></i>
                  </a>
                </Link> */}
                <Link legacyBehavior href={instagram ?? "#"}>
                  <a>
                    <i className="fab fa-instagram"></i>
                  </a>
                </Link>
                {/* <Link legacyBehavior href="#">
                  <a>
                    <i className="fab fa-youtube"></i>
                  </a>
                </Link> */}
              </div>
              <div className="copy-right">
                <p>
                  ©<span>{new Date().getFullYear()}</span> All Rights Reserved
                  by Neelachala Homes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
