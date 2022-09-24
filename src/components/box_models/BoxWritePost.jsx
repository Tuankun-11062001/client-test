import React, { useRef, useState } from "react";
import { UseStore, actions } from "../../store";
import { Editor } from "@tinymce/tinymce-react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BoxNotification } from "./BoxNotification";
import { URLDatabase } from "../../api";
const axios = require("axios");
export const BoxWritePost = () => {
  const [state, dispatch] = UseStore();
  const { ModelBox, userInfo } = state;
  const [dataPost, setDataPost] = useState({
    title: "",
    image: "",
    userId: userInfo._id,
    body: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handlerClosePostWritePost = () => {
    dispatch(actions.closeBoxWritePost());
  };

  const handlerCloseNotificationBox = () => {
    dispatch(actions.closeNotificationBox());
  };

  const editorRef = useRef(null);

  const handlerPost = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(actions.openNotificationBox());
      return setMessage("Bạn phải đăng nhập trước!");
    }

    const completePost = {
      ...dataPost,
      body: editorRef.current.getContent(),
    };

    try {
      // const createPost = await api.fetchAPICreatePost(completePost);
      // if (!createPost.data) {
      //   dispatch(actions.openNotificationBox());
      //   return setMessage("Có điều gì đó xảy ra nè, hãy thử lại nhé !");
      // }
      // dispatch(actions.openNotificationBox());
      // setMessage("Đăng thành công !");

      await axios
        .post(`${URLDatabase}/posts/createPost`, completePost)
        .then((res) => {
          if (!res) {
            dispatch(actions.openNotificationBox());
            return setMessage("Có điều gì đó xảy ra nè, hãy thử lại nhé !");
          }
          dispatch(actions.openNotificationBox());
          setMessage("Đăng thành công !");
        });
    } catch (error) {
      dispatch(actions.openNotificationBox());
      setMessage("đang lỗi đâu đó !");
    }
  };

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setDataPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="post">
        <div className="post_content">
          <div className="post_content_head">
            <span></span>
            <h3 className="post_content_title">Viết Bài</h3>
            <button
              className="post_content_button"
              onClick={handlerClosePostWritePost}
            >
              <AiOutlineCloseCircle />
            </button>
          </div>
          <div className="post_content_subhead">
            <div className="post_content_subhead_left">
              <div className="post_content_group">
                <label>Tiêu đề</label>
                <input
                  onChange={handlerChange}
                  value={dataPost.title}
                  placeholder="tiêu đề"
                  name="title"
                />
              </div>
              <div className="post_content_group">
                <label>Mô tả ngắn</label>
                <textarea
                  onChange={handlerChange}
                  value={dataPost.description}
                  placeholder="mô tả"
                  name="description"
                />
              </div>
            </div>
            <div className="post_content_subhead_right">
              <div className="post_content_group">
                <label>Link hình ảnh</label>
                <input
                  onChange={handlerChange}
                  value={dataPost.image}
                  placeholder="Link hình ảnh"
                  name="image"
                />
              </div>
              <div className="post_content_group_review">
                <img
                  src={
                    dataPost.image === ""
                      ? "https://as1.ftcdn.net/v2/jpg/01/78/54/84/1000_F_178548485_tONdyvjtOEUPMdZcco1LVtZ8tZbWThGC.jpg"
                      : dataPost.image
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
          <button className="post_button_submit" onClick={handlerPost}>
            Đăng bài
          </button>
        </div>
      </div>
      {ModelBox.openBoxNotification && (
        <BoxNotification
          message={message}
          exit={() => handlerCloseNotificationBox()}
        />
      )}
    </>
  );
};
