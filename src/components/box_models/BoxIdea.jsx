import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { URLDatabase } from "../../api";

import { UseStore, actions } from "../../store";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BoxNotification } from "./BoxNotification";
const axios = require("axios");

export const BoxIdea = ({ updateData }) => {
  const [state, dispatch] = UseStore();
  const [message, setMessage] = useState("");
  const { userInfo, ModelBox } = state;
  const editorRef = useRef(null);
  const handlerCloseIdeaBox = () => {
    dispatch(actions.closeBoxIdea());
  };
  const handlerCloseNotification = () => {
    dispatch(actions.closeNotificationBox());
  };
  const handlerSubmit = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(actions.openNotificationBox());
      return setMessage("Bạn phải đăng nhập trước !");
    }
    const { _id } = userInfo;

    const dataIdea = {
      userId: _id,
      body: editorRef.current.getContent(),
    };

    await axios
      .post(`${URLDatabase}/ideas/create`, dataIdea)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    updateData();
  };
  return (
    <>
      <div className="boxidea">
        <div className="boxidea_content">
          <div className="boxidea_content_head">
            <span></span>
            <h3 className="boxidea_content_title">Viết Ý tưởng</h3>
            <button
              className="boxidea_content_button"
              onClick={handlerCloseIdeaBox}
            >
              <AiOutlineCloseCircle />
            </button>
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
          <button onClick={handlerSubmit}>Đăng</button>
        </div>
      </div>
      {ModelBox.openBoxNotification && (
        <BoxNotification
          message={message}
          exit={() => handlerCloseNotification()}
        />
      )}
    </>
  );
};
