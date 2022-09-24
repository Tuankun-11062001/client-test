import React, { useState } from "react";
import { UseStore, actions } from "../store";
import { Link, useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { BoxSocialLogin } from "../components/box_models/BoxSocialLogin";
import { BoxNotification } from "../components/box_models/BoxNotification";
import { URLDatabase } from "../api";

import axios from "axios";

const data = [
  {
    link: "https://facebook.com/",
    data: <FiFacebook />,
  },
  {
    link: "https://instagram.com/",
    data: <BsInstagram />,
  },
  {
    link: "https://twitter.com/",
    data: <BsTwitter />,
  },
  {
    link: "https://pintest.com/",
    data: <FaPinterestP />,
  },
];

export const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [state, dispatch] = UseStore();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { ModelBox } = state;
  const socialMedia = (link) => {
    dispatch(actions.openLoginSocialBox(link));
  };

  const handlerChangeInputLogin = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const exitNotificationBox = () => {
    dispatch(actions.closeNotificationBox());
  };

  const handlerSubmitLogin = async () => {
    try {
      await axios
        .post(`${URLDatabase}/login`, formData)
        .then((res) => {
          if (res.data.message) {
            dispatch(actions.openNotificationBox());
            return setMessage("Tên tài khoản hoặc mật khẩu sai");
          }
          dispatch(actions.openNotificationBox());
          setMessage("Đăng nhập thành công");

          localStorage.setItem("token", res.data.token);

          dispatch(actions.saveInfoUser(res.data));

          setTimeout(() => {
            dispatch(actions.closeNotificationBox());
            navigate("/");
          }, 2000);
        })
        .catch((err) => setMessage("Lỗi kết nối mạng !"));
    } catch (error) {}
  };

  return (
    <>
      <div className="login">
        <div className="login_header">
          <span></span>
          <h2 className="login_title">Đăng nhập</h2>
          <Link to="/" className="login_escape">
            <IoIosCloseCircleOutline />
          </Link>
        </div>
        <div className="login_form">
          <div className="login_form_group">
            <label>Tên đăng nhập</label>
            <input
              name="username"
              value={formData.username}
              onChange={handlerChangeInputLogin}
              placeholder="tuan123"
            />
          </div>
          <div className="login_form_group">
            <label>Mật khẩu</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handlerChangeInputLogin}
              placeholder="tuan123"
            />
          </div>
          <button className="login_form_button" onClick={handlerSubmitLogin}>
            Đăng nhập
          </button>
        </div>
        <div className="login_other">
          <Link to="/">Quên mật khẩu</Link>
          <p>
            Bạn chưa có tài khoản? <Link to="/signup">Đăng ký</Link>
          </p>
        </div>
        <div className="login_with_social">
          <p className="login_with_social_title">Đăng nhập với </p>
          <ul className="login_with_social_list">
            {data.map((item, index) => (
              <li
                className="login_with_social_item"
                key={index}
                onClick={() => socialMedia(item.link)}
              >
                {item.data}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {ModelBox.openLoginSocialBox && <BoxSocialLogin />}
      {ModelBox.openBoxNotification && (
        <BoxNotification exit={() => exitNotificationBox()} message={message} />
      )}
    </>
  );
};
