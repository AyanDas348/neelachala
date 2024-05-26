/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs1 from "../About-Us1";
import VideoHero from "../Video-Hero";
import LightLayout from "../../layouts/light";
import Testimonials from "../Testimonials1";
import Contact from "../Contact";
import WorkTwoColumn from "../Work-Two-Column";
import WorkFourColumn from "../Work-Four-Column";
import PromotionPopup from "../Promotion-Popup";
import SkillsCircle from "../Skills-Circle";
import VideoHeroMobile from "../Video-Hero-Mobile";
import { useMediaQuery } from "@mui/material";

const Home1 = ({ projects, data, footerData }) => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  const { header_video, header, banner, header_thumbnail, header_images, mobile_header_images } = data.data?.attributes ?? {}
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <LightLayout
      footerClass={"mt-30"} footerData={footerData}>
      {isMobile ? (
        <VideoHeroMobile
          header={header}
          header_thumbnail={header_thumbnail}
          header_images={mobile_header_images}
        />
      ) : (
        <VideoHero
          header_video={header_video}
          header={header}
          header_thumbnail={header_thumbnail}
          header_images={header_images}
        />
      )}
      <AboutUs1 data={data?.data?.attributes} />
      <SkillsCircle banner={banner} showLearnMore />
      <WorkTwoColumn projects={projects?.data} />
      <Testimonials testimonials={data.data?.attributes.testimonials} />
      <Contact
        footerData={footerData.data?.attributes}
      />
      <PromotionPopup data={data.data?.attributes.promotionPopup} />
    </LightLayout>
  );
};

export default Home1;


