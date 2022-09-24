import React, { useState } from "react";
import { UseStore, actions } from "../store";
import { Link } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BoxNotification } from "../components/box_models/BoxNotification";
import { URLDatabase } from "../api";

const axios = require("axios");
export const Signup = () => {
  const [state, dispatch] = UseStore();
  const { ModelBox } = state;
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
  });
  const handlerChangeForm = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const exitModelBoxNotification = () => {
    dispatch(actions.closeNotificationBox());
  };
  const handlerSubmitSignup = async () => {
    const { username, email, password, repassword } = formData;
    console.log(username);
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      repassword === ""
    ) {
      dispatch(actions.openNotificationBox());
      return setMessage("Bạn đã bỏ trống một trường nào đó !");
    }
    if (password !== repassword) {
      dispatch(actions.openNotificationBox());
      return setMessage("Mật khẩu không trùng khớp !");
    }
    await axios.post(`${URLDatabase}/register`, formData).then((res) => {
      if (res.data.message) {
        dispatch(actions.openNotificationBox());
        return setMessage(
          "xin lỗi 'Tên đăng nhập này đang tồn tại ' phiền bạn tìm một tên đăng nhập khác"
        );
      }
      dispatch(actions.openNotificationBox());
      setMessage(
        "Đăng ký thành công ! bạn đăng nhập tài khoản để có trải nghiệm tốt nhé. cám ơn !"
      );
    });
  };

  return (
    <>
      <div className="signup">
        <div className="signup_header">
          <span></span>
          <h2 className="signup_title">Đăng Ký</h2>
          <Link to="/" className="signup_escape">
            <IoIosCloseCircleOutline />
          </Link>
        </div>
        <div className="signup_form">
          <div className="signup_form_group">
            <label>Tên đăng nhập</label>
            <input
              onChange={handlerChangeForm}
              name="username"
              value={formData.username}
              type="text"
              placeholder="tuan123"
            />
          </div>
          <div className="signup_form_group">
            <label>Email</label>
            <input
              onChange={handlerChangeForm}
              name="email"
              value={formData.email}
              type="email"
              placeholder="tuan123"
            />
          </div>
          <div className="signup_form_group">
            <label>Mật khẩu</label>
            <input
              onChange={handlerChangeForm}
              name="password"
              value={formData.password}
              type="password"
              placeholder="tuan123"
            />
          </div>
          <div className="signup_form_group">
            <label>Nhập lại mật khẩu</label>
            <input
              onChange={handlerChangeForm}
              name="repassword"
              value={formData.repassword}
              type="password"
              placeholder="tuan123"
            />
          </div>
          <button onClick={handlerSubmitSignup} className="signup_form_button">
            Đăng Ký
          </button>
        </div>
        <div className="signup_other">
          <span></span>
          <p>
            Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
          </p>
        </div>
      </div>
      {ModelBox.openBoxNotification && (
        <BoxNotification
          message={message}
          exit={() => exitModelBoxNotification()}
        />
      )}
    </>
  );
};
