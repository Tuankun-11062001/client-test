import React from "react";
import { Slide } from "../slide/Slide";

const dataSlide = [
  {
    slideTop: false,
    image:
      "https://images.unsplash.com/photo-1663326224028-27ba787bb7ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    slideTop: false,
    image:
      "https://images.unsplash.com/photo-1611505744156-5a3d7132dea7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    slideTop: false,
    image:
      "https://images.unsplash.com/photo-1503022651232-aa1b2a1503a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    slideTop: false,
    image:
      "https://images.unsplash.com/photo-1657748391860-4b2b716b8d41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    slideTop: false,
    image:
      "https://images.unsplash.com/photo-1510791546056-aafdc39d1ae7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    slideTop: false,
    image:
      "https://images.unsplash.com/photo-1663287695452-bf59337d8746?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    slideTop: false,
    image:
      "https://images.unsplash.com/photo-1663328536501-2c472acf1e54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    slideTop: false,
    image:
      "https://images.unsplash.com/photo-1663334484805-97e6c9e9eb1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    slideTop: false,
    image:
      "https://images.unsplash.com/photo-1663183538146-71561111529d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    slideTop: false,
    image:
      "https://images.unsplash.com/photo-1663260301480-27182af22302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    slideTop: false,
    image:
      "https://images.unsplash.com/photo-1663275164457-ee8ae128eeb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
];

const settingsSlideFooter = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  slidesToShow: 8,
  slidesToScroll: 1,
};

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_slider layout_app">
        <Slide dataSlide={dataSlide} settings={settingsSlideFooter} />
      </div>
      <p className="footer_copyright">@copyright Tuannguyen2001</p>
    </div>
  );
};
