import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Slide = ({ dataSlide, settings }) => {
  return (
    <div className="slider">
      <Slider {...settings}>
        {dataSlide.map((obj, index) => (
          <div
            className={obj.slideTop ? "slider_item" : "slider_footer"}
            key={index}
          >
            <div className={obj.slideTop ? "" : "slider_footer_image"}>
              <img src={obj.image} alt="" />
            </div>
            {obj.detail ? (
              <div className="slider_item_context layout_app">
                <h1 className="slider_item_context_title">
                  {obj.detail.heading}
                </h1>
                <p className="slider_item_context_detail">
                  {obj.detail.description}
                </p>
                <button className="slider_item_context_actionButton">
                  {obj.detail.button}
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};
