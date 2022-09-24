import React, { useState } from "react";
import { UseStore, actions } from "../../store";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlineCamera } from "react-icons/ai";
import { BoxNotification } from "./BoxNotification";
import { URLDatabase } from "../../api";
const axios = require("axios");
export const BoxEditUser = () => {
  const [state, dispatch] = UseStore();
  const { userInfo, ModelBox } = state;
  const [number, setNumber] = useState(0);
  const [linkImage, setLinkImage] = useState("");
  const [message, setMessage] = useState("");
  const [formPassword, setFormPassword] = useState({
    oldPassword: "",
    newPassword: "",
    rePassword: "",
  });

  const closeNotificateBox = () => {
    dispatch(actions.closeNotificationBox());
  };

  const closeBoxEditUser = () => {
    dispatch(actions.closeEditUserBox());
  };

  const openSecondBoxPassword = () => {
    setNumber(1);
  };

  const openSecondBoxImage = () => {
    setNumber(2);
  };

  const closeSecondBox = () => {
    setNumber(0);
  };

  const changeLinkImage = (e) => {
    setLinkImage(e.target.value);
  };

  const handlerChangeFormPassword = (e) => {
    const { name, value } = e.target;
    setFormPassword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitChangePassword = async () => {
    const editInfoUser = async () => {
      try {
        await axios
          .put(`${URLDatabase}/${userInfo._id}`, {
            ...userInfo,
            password: formPassword.newPassword,
          })
          .then((res) => {
            if (!res) {
              dispatch(actions.openNotificationBox());
              return setMessage("server bi loi");
            }
            dispatch(actions.openNotificationBox());
            return setMessage("Bạn thay đổi thành công");
          });
      } catch (error) {}
    };
    await axios.post(`${URLDatabase}/${userInfo._id}`).then((res) => {
      const { password, ...rest } = res.data;
      const { oldPassword, newPassword, rePassword } = formPassword;
      if (newPassword === "" || oldPassword === "" || rePassword === "") {
        dispatch(actions.openNotificationBox());
        return setMessage("Bạn thiếu một trường nào đó !");
      }
      if (formPassword.oldPassword !== password) {
        dispatch(actions.openNotificationBox());
        return setMessage("Mật khẩu cũ của bạn không chính xác !");
      }
      if (newPassword !== rePassword) {
        dispatch(actions.openNotificationBox());
        return setMessage("Mật khẩu mới của bạn không trùng khơp !");
      }
      editInfoUser();
    });
  };

  const submitChangeImage = async () => {
    try {
      await axios
        .put(`${URLDatabase}/${userInfo._id}`, {
          ...userInfo,
          image: linkImage,
        })
        .then((res) => dispatch(actions.updateUserInfo(res.data)))
        .catch((err) => console.log(err));
      // setNumber(0);
    } catch (error) {
      console.log(error);
    }
  };

  const renderBoxSecond = () => {
    switch (number) {
      case 1:
        return (
          <div className="editUserBox_second">
            <div className="editUserBox_head">
              <span></span>
              <h2 className="editUserBox_head_title">Thay đổi mật khẩu</h2>
              <button
                className="editUserBox_head_close"
                onClick={closeSecondBox}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <div className="editUserBox_content">
              <div className="editUserBox_content_group">
                <label>Mật khẩu cũ</label>
                <input
                  name="oldPassword"
                  type="password"
                  value={formPassword.oldPassword}
                  onChange={handlerChangeFormPassword}
                  placeholder="mật khẩu cũ"
                />
              </div>
              <div className="editUserBox_content_group">
                <label>Mật khẩu mới</label>
                <input
                  name="newPassword"
                  type="password"
                  value={formPassword.newPassword}
                  onChange={handlerChangeFormPassword}
                  placeholder="mật khẩu mới"
                />
              </div>
              <div className="editUserBox_content_group">
                <label>Nhập lại mật khẩu mới</label>
                <input
                  name="rePassword"
                  type="password"
                  value={formPassword.rePassword}
                  onChange={handlerChangeFormPassword}
                  placeholder="mật khẩu mới"
                />
              </div>
              <button
                className="editUserBox_content_button"
                onClick={submitChangePassword}
              >
                Thay đổi
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="editUserBox_third">
            <div className="editUserBox_head">
              <span></span>
              <h2 className="editUserBox_head_title">Thay đổi hình ảnh</h2>
              <button
                className="editUserBox_head_close"
                onClick={closeSecondBox}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <div className="editUserBox_content">
              <div className="editUserBox_content_review">
                <img
                  src={linkImage || userInfo.image}
                  alt={userInfo.username}
                />
              </div>
              <div className="editUserBox_content_group">
                <label>link hình ảnh</label>
                <input
                  type="text"
                  placeholder="link hình ảnh"
                  value={linkImage}
                  onChange={changeLinkImage}
                />
              </div>
              <button
                className="editUserBox_content_button"
                onClick={submitChangeImage}
              >
                Thay đổi
              </button>
            </div>
          </div>
        );
      default:
        return;
    }
  };

  return (
    <>
      <div className="editUserBox">
        <div className="editUserBox_canvas">
          <div className="editUserBox_container">
            <div className="editUserBox_head">
              <span></span>
              <h2 className="editUserBox_head_title">Thông tin người dùng</h2>
              <button
                className="editUserBox_head_close"
                onClick={closeBoxEditUser}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <div className="editUserBox_image">
              <img src={userInfo.image} alt={userInfo.username} />
              <div
                className="editUserBox_image_change"
                onClick={openSecondBoxImage}
              >
                <AiOutlineCamera />
              </div>
            </div>
            <div className="editUserBox_content">
              <h4 className="editUserBox_content_info">
                <span>Tên đăng nhập </span>
                {userInfo.username}
              </h4>
              <h4 className="editUserBox_content_info">
                <span>Email </span>
                {userInfo.email}
              </h4>
              <button
                className="editUserBox_content_button"
                onClick={openSecondBoxPassword}
              >
                Thay đổi mật khẩu
              </button>
            </div>
          </div>
          {renderBoxSecond()}
        </div>
      </div>
      <p>{message}</p>
      {ModelBox.openBoxNotification && (
        <BoxNotification message={message} exit={() => closeNotificateBox()} />
      )}
    </>
  );
};
