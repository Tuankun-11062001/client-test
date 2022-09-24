import React, { useState } from "react";
import { UseStore, actions } from "../../store";
import { Outlet, NavLink, Link, useNavigate } from "react-router-dom";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { BoxEditUser } from "../box_models/BoxEditUser";
export const Navigation = () => {
  const navigate = useNavigate();
  const [state, dispatch] = UseStore();
  const [changeButtonUserActions, setChangeButtonUserActions] = useState(false);
  const { userInfo, ModelBox } = state;

  const handlerExitUser = () => {
    dispatch(actions.clearInfoUser({}));
    localStorage.clear();
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const handlerOpenUserActions = (e) => {
    const parent = e.target.parentElement;
    const listActions = parent.querySelector(
      ".navigation_context_item_submenu"
    );
    listActions.classList.toggle("active");
    if (listActions.classList.contains("active")) {
      setChangeButtonUserActions(true);
    } else {
      setChangeButtonUserActions(false);
    }
  };

  const openBoxUserEdit = () => {
    dispatch(actions.openEditUserBox());
  };

  return (
    <div className="navigation">
      <div className="navigation_background">
        <div className="layout_app navigation_context">
          <Link className="navigation_context_logo" to="/">
            Natural
          </Link>
          <ul className="navigation_context_list">
            <li className="navigation_context_item">
              <NavLink to="/" className="navigation_context_link">
                Trang chủ
              </NavLink>
            </li>
            <li className="navigation_context_item">
              <NavLink to="/actions" className="navigation_context_link">
                Hành động
              </NavLink>
            </li>
            <li className="navigation_context_item">
              <NavLink to="/about" className="navigation_context_link">
                Giới thiệu
              </NavLink>
            </li>
            <li className="navigation_context_item">
              <NavLink to="/contact" className="navigation_context_link">
                Liên hệ
              </NavLink>
            </li>
            {localStorage.getItem("token") ? (
              <li className="navigation_context_item">
                <p className="navigation_context_item_name">
                  {userInfo.username}
                </p>
                <div className="navigation_context_item_image">
                  <img
                    src={
                      userInfo.image !== ""
                        ? userInfo.image
                        : "https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"
                    }
                    alt={userInfo.username}
                  />
                </div>
                <div className="navigation_context_item_moreAction">
                  <div onClick={handlerOpenUserActions}>
                    {changeButtonUserActions ? (
                      <MdArrowDropUp />
                    ) : (
                      <MdArrowDropDown />
                    )}
                  </div>
                  <ul className="navigation_context_item_submenu">
                    <li
                      className="navigation_context_item_submenu_item"
                      onClick={openBoxUserEdit}
                    >
                      Chỉnh sửa thông tin
                    </li>
                    <li
                      className="navigation_context_item_submenu_item"
                      onClick={handlerExitUser}
                    >
                      Đăng xuất
                    </li>
                  </ul>
                </div>
              </li>
            ) : (
              <li className="navigation_context_item">
                <NavLink to="/login" className="navigation_context_link">
                  Đăng nhập
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
      <Outlet />
      {ModelBox.openBoxEditUser && <BoxEditUser />}
    </div>
  );
};
