/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import ProjectIntro from "../../components/Project-Intro";
import Amenities from "../../components/Amenities";
import CompletedAmenities from "../../components/CompletedProjAmenity";
import getAllProjects from "../api/getAllProjects";
import { useRouter } from "next/router";
import getFooterData from "../api/getFooterData";
import ModalImage from "react-modal-image";
import ContactInfo from "../../components/Contact-info";
import ContactWithMap from "../../components/Contact-with-map";
import Image from "next/image";
import Link from "next/link";

const ProjectDetails = ({ projects, footerData }) => {
  const router = useRouter();
  const project = projects?.data?.filter(
    (project) =>
      project.attributes?.slug?.toLowerCase() ===
      router?.query?.name?.toLowerCase()
  )[0];
  const {
    name,
    main_photo,
    photos,
    description,
    flat_type,
    construction_area,
    number_of_flats,
    cctv,
    elevator,
    parking,
    play_area,
    rcc_structure,
    security,
    map,
    location,
    map_iframe,
    custom_amenity,
    amenity_number,
    qr,
    oreraLink,
    project_status
  } = project?.attributes ?? {};

  const [amenities, setAmenities] = useState([]);

  useEffect(() => {
    if (project_status === 'ongoing' || custom_amenity?.length !== 0) {
      if (!custom_amenity) return;
      const priority = custom_amenity.slice(0, (amenity_number || 6))
      setAmenities(priority)
    } else {
      const prevAmenities = []
      if (cctv) prevAmenities.push({ id: "cctv", title: "CCTV" });
      if (elevator) prevAmenities.push({ id: "elevator", title: "Elevator" });
      if (parking) prevAmenities.push({ id: "parking", title: "Parking" });
      if (play_area) prevAmenities.push({ id: "play_area", title: "Play Area" });
      if (rcc_structure)
        prevAmenities.push({ id: "rcc_structure", title: "RCC Structure" });
      if (security) prevAmenities.push({ id: "security", title: "Security" });
      setAmenities(prevAmenities)
    }
  }, [amenity_number, cctv, custom_amenity, elevator, parking, play_area, project_status, rcc_structure, security])

  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  console.log(project?.attributes)

  return (
    <MainLayout data={footerData}>
      <PageHeader title={name} image={main_photo?.data?.attributes?.url} location={location} />
      <ProjectIntro
        description={description}
        details={{
          flatType: flat_type,
          constructionArea: construction_area,
          numberOfFlats: number_of_flats,
          map: map,
          location: location,
        }}
      />
      {project_status === 'ongoing' ? (
        <Amenities amenities={amenities} />
      ) : (
        <CompletedAmenities amenities={amenities} />
      )}
      {photos?.data?.length && (
        <section className="projdtal mb-10" style={{ paddingBottom: "80px" }}>
          <div className="justified-gallery">
            <div className="row">
              {photos?.data.map((photo, index) => (
                <div
                  className={
                    photos?.data?.length === 1
                      ? "col-lg-3 col-xl-3 col-md-6 mb-10"
                      : photos?.data?.length === 2
                        ? "col-lg-3 col-xl-3 col-md-6 mb-10"
                        : photos?.data?.length === 3
                          ? "col-lg-3 col-xl-3 col-md-6 mb-10"
                          : photos?.data?.length === 4
                            ? "col-lg-3 col-xl-3 col-md-6 mb-10"
                            : photos?.data?.length === 5
                              ? "col-lg-3 col-xl-3 col-md-6 mb-10"
                              : "col-lg-3 col-xl-3 col-md-6 mb-10"
                  }
                  key={index}
                >
                  <ModalImage
                    className="img"
                    small={photo?.attributes?.formats?.large.url}
                    large={photo?.attributes?.formats?.large.url}
                    medium={photo?.attributes?.formats?.large.url}
                    alt={photo?.attributes?.name}
                    sx={{
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="pb-75 skills-circle" style={{ display: `${project?.attributes.project_status !== 'ongoing' ? 'none' : 'block'}` }}>
        <div className="container-fluid">
          <div className="row" style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div className="col-lg-6 qr-box">
              <div>
                <h5 style={{ padding: "10px" }}>To know additional information, scan the QR below</h5>
                <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img src={qr?.data?.attributes?.url} alt={qr?.data?.attributes?.name} style={{ width: "200px", backgroundColor: "white" }} />
                </div>
                {/* <h5 style={{ padding: "10px" }}>OR TO DOWNLOAD THE BROCHURE, <u style={{ cursor: "pointer" }}>CLICK HERE</u></h5> */}
              </div>
            </div>
            <div className="col-lg-6 orera-box" style={{ wordWrap: "break-word", textAlign: "justify", padding: "10px" }}>
              <h5 style={{ textAlign: "justify", lineHeight: "20px" }}>Explore our curated links to the Odisha Real Estate Regulatory Authority (ORERA) resources. Stay informed about the latest regulations, project registrations, and updates in the real estate sector. These links provide access to essential information, ensuring transparency and protecting your interests as a homebuyer or real estate professional in Odisha.
              </h5>
              <h5 style={{ textAlign: "left" }}>ORERA resource for {" "}
                <Link href={oreraLink || '/'} target="_blank" rel="noopener noreferrer">
                  <u>{name}</u>
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </section>
      <section className="contact">
        {/* <ContactInfo data={footerData.data.attributes} /> */}
        <ContactWithMap iframeLink={map_iframe} apartment={name} />
      </section>
    </MainLayout>
  );
};

export default ProjectDetails;

export const getStaticProps = async () => {
  const [projects, footerData] = await Promise.all([
    getAllProjects(),
    getFooterData(),
  ]);
  return {
    props: {
      projects,
      footerData,
    },
    revalidate: 60 * 15,
  };
};
