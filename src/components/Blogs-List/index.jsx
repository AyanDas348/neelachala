/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import thumparallaxUp from "../../common/thumparallaxUp";

const BlogsList = ({ blogs }) => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);

  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const totalPages = Math.ceil(blogs.length / 4)

  const filteredBlogs = blogs.slice(selectedIndex * 4, selectedIndex * 4 + 4)

  return (
    <>
      <section className="blog-pg section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="posts">
                {filteredBlogs.map((item, index) => {
                  const {
                    content,
                    title, slug
                  } = item.attributes
                  const image = item.attributes.post_image.data.attributes.url
                  const first = content.split(' ').slice(0, 20).join(' ')
                  return (
                    <div className="item mb-80" key={item.id + index}>
                      <div className="img"
                        style={{
                          height: "320px",
                          overflow: "hidden",
                          position: "relative",
                          width: "100%",
                          objectFit: "contain"
                        }}
                      >
                        <Link href={`${"/blog-details?slug=" + slug}`}>
                          <img
                            src={image}
                            alt=""
                            className="thumparallax"
                            style={{
                              position: "absolute",
                              width: "100%",
                              height: "100%",
                              objectFit: "cover"
                            }}
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="cont">
                          <h4 className="title">
                            <Link href={`${"/blog-details?slug=" + slug}`}>
                              {title}
                            </Link>
                          </h4>
                          <p>
                            {first}
                          </p>
                          <Link href={`${"/blog-details?slug=" + slug}`}>
                            <div className="more">Read More</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}

                <div className="pagination">
                  {
                    Array(totalPages).fill(0).map((_, index) => {
                      return (
                        <span
                          key={index}
                          className={selectedIndex === index ? 'active' : ''}
                          onClick={() => setSelectedIndex(index)}
                          style={{
                            cursor: "pointer"
                          }}
                        >
                          <Link href="#">{index + 1}</Link>
                        </span>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsList;
