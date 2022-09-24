import React from "react";
export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_image">
        <img
          src="https://images.unsplash.com/photo-1509228890695-35da7abea4f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
          alt=""
        />
      </div>
      <div className="banner_detail layout_app">
        <h3 className="banner_detail_title">Bao ve thien nhien</h3>
        <p className="banner_detail_description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          quidem odit vero similique repellendus ad dicta molestiae voluptas,
          nostrum, in nemo saepe doloremque ullam accusamus cupiditate laborum
          dolores nam voluptatem! Aut quae tempora amet ut, corrupti obcaecati
          repellendus laborum aliquid soluta perspiciatis doloribus nemo quod
          aperiam
        </p>
        <button className="banner_detail_button">Action</button>
      </div>
    </div>
  );
};
