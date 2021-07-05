import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BlogCard from "./blogCard";
import C1 from "../images/1.png";

function MultiCarosal({ property }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5,
      slidesToSlide: 3.5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={false} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all 1"
      transitionDuration={500}
      arrows={true}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      //   deviceType={this.props.deviceType}
      dotListClass=""
      itemClass="carousel-item-padding-40-px"
    >
      {property.map((x, i) => (
        <div key={i} className="p-2">
          <div className="ojasndaweddwq">
            <BlogCard
              date="May 24, 2021"
              img={C1}
              type="CODING"
              title="Sed ut perspiciatis unde omnis iste natus error sit"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default MultiCarosal;
