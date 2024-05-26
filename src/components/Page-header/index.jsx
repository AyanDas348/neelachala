import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const PageHeader = ({ title, fullPath, image, location }) => {
  const router = useRouter();
  return (
    <header
      className="pages-header bg-img valign parallaxie"
      style={{
        backgroundImage: `url(${!image ? "/assets/img/pg1.jpg" : image})`,

        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        aspectRatio: "1/1",
      }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center playfont">
              <h1>{title}</h1>
              <div>
                <h3 style={{
                  // justifyContent: "end",
                  // display: "flex",
                  // '@media (max-width: 768px)': {
                  //   justifyContent: "center",
                  //   textAlign: "center",
                  //   display: "flex"
                  // }
                }}>
                  {location}
                </h3>
              </div>

              <div className="path">
                {fullPath?.length &&
                  fullPath?.map((item, index) => (
                    <React.Fragment key={item.id}>
                      <Link legacyBehavior href={item.url ?? "#"}>
                        <a
                          className={
                            router.pathname == item.url ? "active" : ""
                          }
                        >
                          {item.name}
                        </a>
                      </Link>
                      {index != fullPath.length - 1 ? <span>/</span> : ""}
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
