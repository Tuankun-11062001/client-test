import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const CardPost = ({ obj }) => {
  return (
    <div className="card_post">
      <div className="card_post_image">
        <img src={obj.image} alt="" />
      </div>
      <div className="card_post_detail">
        <h3 className="card_post_title">{obj.title}</h3>
        <p className="card_post_description">{obj.description}</p>
        <div className="card_post_footer">
          <p className="card_post_user">
            Tác giả : <Link to="/">{obj.userId.username}</Link>
          </p>
          <p className="card_post_star">Sao : {obj.stars}</p>
        </div>
      </div>
    </div>
  );
};
