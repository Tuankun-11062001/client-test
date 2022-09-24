import React from "react";
import { UseStore, actions } from "../../store";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export const BoxSocialLogin = () => {
  const navigate = useNavigate();
  const [state, dispatch] = UseStore();
  const closeBoxSocialLogin = () => {
    dispatch(actions.closeLoginSocialBox());
  };
  const handlerButtonSignup = () => {
    navigate("/signup");
    dispatch(actions.closeLoginSocialBox());
  };
  const handlerButtonReview = () => {
    navigate("/");
    dispatch(actions.closeLoginSocialBox());
  };
  return (
    <div className="boxSocialLogin">
      <div className="boxSocialLogin_container">
        <div className="boxSocialLogin_head">
          <span></span>
          <h3 className="boxSocialLogin_head_title">Xác nhận</h3>
          <button
            className="boxSocialLogin_head_button"
            onClick={closeBoxSocialLogin}
          >
            <IoIosCloseCircleOutline />
          </button>
        </div>
        <div className="boxSocialLogin_body">
          <p className="boxSocialLogin_body_text">
            Xin lỗi hiện tại chúng tôi chưa có chức năng đăng nhập với mạng xã
            hội. Bạn có thể
          </p>
          <button
            onClick={handlerButtonSignup}
            className="boxSocialLogin_body_button button_signup"
          >
            Đăng ký
          </button>
          <button
            onClick={handlerButtonReview}
            className="boxSocialLogin_body_button button_review"
          >
            Review Trang chủ
          </button>
        </div>
      </div>
    </div>
  );
};
