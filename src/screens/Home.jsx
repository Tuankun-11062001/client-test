import React, { useEffect, useState } from "react";
import { UseStore, actions } from "../store";
import { Link } from "react-router-dom";
import { CardFeature } from "../components/card/CardFeature";
import { CardPost } from "../components/card/CardPost";
import { Slide } from "../components/slide/Slide";
import { BsArrowRightShort } from "react-icons/bs";
import { Footer } from "../components/footer/Footer";
import { URLDatabase } from "../api";

import axios from "axios";
const dataSlide = [
  {
    slideTop: true,
    image:
      "https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    detail: {
      heading: "Hãy tái sử dụng đồ nhựa",
      description:
        "is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      button: "Action",
    },
  },
  {
    slideTop: true,
    image:
      "https://images.unsplash.com/photo-1519293978507-9c6bb9f82eda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    detail: {
      heading: "Hãy yêu quý thiên nhiên",
      description:
        "is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      button: "Action",
    },
  },
  {
    slideTop: true,
    image:
      "https://images.unsplash.com/photo-1663326224028-27ba787bb7ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    detail: {
      heading: "Bao ve bien",
      description:
        "is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      button: "Action",
    },
  },
];
const settingsSlideTop = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export const Home = () => {
  const [dataPosts, setDataPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${URLDatabase}/posts`)
      .then((res) => setDataPosts(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(dataPosts);
  return (
    <>
      <Slide dataSlide={dataSlide} settings={settingsSlideTop} />
      <div className="layout_app home">
        <div className="home_feature">
          <h2 className="title">Hoạt động sắp diễn ra</h2>
          <div className="home_feature_list">
            <CardFeature />
            <CardFeature />
            <CardFeature />
            <CardFeature />
            <CardFeature />
            <CardFeature />
          </div>
        </div>
        <div className="home_posts">
          <h2 className="title">Bài viết mới nhất</h2>
          <div className="home_posts_list">
            {dataPosts.map((obj) => (
              <CardPost key={obj.id} obj={obj} />
            ))}
          </div>
          <Link to="/" className="home_posts_seemore">
            Xem thêm <BsArrowRightShort />
          </Link>
        </div>
        <div className="home_gift">
          <h2 className="title">Phần thưởng nhỏ</h2>
          <div className="home_gift_content">
            <div className="home_gift_info">
              <h2 className="home_gift_info_title">
                Tham gia hoạt động nhận quà liền tay
              </h2>
              <p className="home_gift_info_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                illum ea maiores pariatur, dignissimos fugiat molestias quas
                placeat quae doloremque. Ratione, velit. Nostrum impedit neque
                rerum ipsum eligendi, laudantium minima. Dolore, animi
                laudantium consectetur impedit unde dicta, quaerat quas
                recusandae quibusdam eius ad officiis illum fugit, deserunt fuga
                eligendi at explicabo. Dolorum, est consequatur odit ipsum at
                voluptatum impedit vero.
              </p>
              <button className="home_gift_info_joinButton">Tham gia</button>
            </div>
            <div className="home_gift_image_container">
              <div className="home_gift_image">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1598/1598431.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
