import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const BoxNotification = ({ message, exit }) => {
  return (
    <div className="boxNotification">
      <div className="boxNotification_container">
        <div className="boxNotification_head">
          <span></span>
          <h3 className="boxNotification_head_title">Thông báo</h3>
          <button className="boxNotification_head_button" onClick={exit}>
            <IoIosCloseCircleOutline />
          </button>
        </div>
        <div className="boxNotification_body">
          <p className="boxNotification_body_text">{message}</p>
          <button onClick={exit} className="boxNotification_body_button">
            Đã hiểu
          </button>
        </div>
      </div>
    </div>
  );
};
