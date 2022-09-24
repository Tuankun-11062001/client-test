import React from "react";
import { useNavigate } from "react-router-dom";
import notFoundImage from "../assets/gif/notfound.gif";
export const NotFound = () => {
  const navigate = useNavigate();
  const handlerNavigate = () => {
    navigate("/");
  };
  return (
    <div className="notFound">
      <div className="notFound_context">
        <div className="notFound_image">
          <img src={notFoundImage} alt="" />
        </div>
        <h3 className="notFound_title">Không tìm thấy</h3>
        <button className="notFound_button" onClick={handlerNavigate}>
          Trở về trang chủ
        </button>
      </div>
    </div>
  );
};
