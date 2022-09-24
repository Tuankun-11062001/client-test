import React, { useState, useEffect } from "react";
import { UseStore, actions } from "../store";
import { Banner } from "../components/banner/Banner";
import { BiSearch, BiComment } from "react-icons/bi";
import { RiMoreLine } from "react-icons/ri";
import { AiOutlineLike, AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BoxWritePost } from "../components/box_models/BoxWritePost";
import { BoxIdea } from "../components/box_models/BoxIdea";
import { URLDatabase } from "../api";
import axios from "axios";

export const Actions = () => {
  const [state, dispatch] = UseStore();
  const [dataIdeaApi, setDataIdeaApi] = useState([]);
  const { ModelBox } = state;

  const handleOpenBoxWritePost = () => {
    dispatch(actions.openBoxWritePost());
  };
  const handlerOpenBoxIdea = () => {
    dispatch(actions.openBoxIdea());
  };

  useEffect(() => {
    axios
      .get(`${URLDatabase}/ideas/`)
      .then((res) => setDataIdeaApi(res.data))
      .catch((err) => console.log(err));
  }, []);

  const updateData = async () => {
    await axios
      .get(`${URLDatabase}/ideas/`)
      .then((res) => setDataIdeaApi(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="actions">
        <Banner />
        <h2 className="actions_title">hành động</h2>
        <div className="actions_content layout_app">
          <div className="actions_content_ideas">
            <h3 className="actions_content_ideas_title">Ý tưởng</h3>
            <div className="actions_content_ideas_search">
              <input placeholder="tìm kiếm ideas, nhóm" />
              <button className="actions_content_ideas_search_button">
                <BiSearch />
              </button>
            </div>
            <div className="actions_content_ideas_control">
              <button
                className="actions_content_ideas_control_button"
                onClick={handleOpenBoxWritePost}
              >
                Viết bài
              </button>
              <button
                className="actions_content_ideas_control_button"
                onClick={handlerOpenBoxIdea}
              >
                Viết ý tưởng
              </button>
              <button className="actions_content_ideas_control_button">
                Tạo nhóm
              </button>
            </div>
            <ul className="actions_content_ideas_list">
              {dataIdeaApi.map((obj) => (
                <li className="actions_content_ideas_item">
                  <div className="actions_content_ideas_item_head">
                    <div className="actions_content_ideas_item_head_image">
                      <img src={obj.userId.image} alt="" />
                    </div>
                    <div className="actions_content_ideas_item_head_detail">
                      <Link to="/">{obj.userId.username}</Link>
                      <Link to="/">Group</Link>
                    </div>
                    <button className="actions_content_ideas_item_head_button">
                      <RiMoreLine />
                    </button>
                  </div>
                  <div
                    className="actions_content_ideas_item_body"
                    dangerouslySetInnerHTML={{ __html: obj.body }}
                  ></div>
                  <div className="actions_content_ideas_item_footer">
                    <div className="actions_content_ideas_item_footer_item">
                      <button>
                        <AiOutlineLike />
                      </button>
                      <p>{obj.likes}</p>
                    </div>
                    <div className="actions_content_ideas_item_footer_item">
                      <button>
                        <BiComment />
                      </button>
                      <p>{obj.comment.length}</p>
                    </div>
                    <div className="actions_content_ideas_item_footer_item">
                      <button>
                        <AiOutlineShareAlt />
                      </button>
                      <p>{obj.shares}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="actions_content_ranks"></div>
        </div>
      </div>
      {ModelBox.openBoxWritePost && <BoxWritePost />}
      {ModelBox.openBoxIdea && <BoxIdea updateData={updateData} />}
    </>
  );
};
