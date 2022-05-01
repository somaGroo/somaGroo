import React from "react";
import $ from "./style.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import API_URL from "../../api.js";

export default function WriteLetterPage() {
  const [writerValue, setWriterValue] = React.useState("");
  const [contentValue, setContentValue] = React.useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const onTitleChange = event => setWriterValue(event.currentTarget.value);
  const onContentChange = event => setContentValue(event.currentTarget.value);
  const createLetter = async () => {
    try {
      await fetch(`${API_URL}/user/${id}/paper`, 
        {
          method: 'POST',
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify({
            title: writerValue,
            content: contentValue
          })
        }
      );
      await navigate(`/tree/${id}`);
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <div className={$.ground}>
      <div className={$.App}>
        <div className={$.upperContainer}>
          <button className={$.backButton} onClick={() => navigate(-1)}>이전</button>
          <button className={$.submitButton} onClick={createLetter}>입력</button>
        </div>
        <h2 className={$.receiver}>누구에게</h2>
        <div className={$.fromContainer}>
          <div className={$.col1}>FROM</div>
          <textarea
            className={$.col2}
            placeholder="name"
            onChange={onTitleChange}
            defaultValue={writerValue}
            name="writer"
          ></textarea>
        </div>
        <div className={$.formWrapper}>
          <textarea
            className={$.textArea}
            spellCheck="false"
            placeholder="하고 싶은 말을 적어주세요"
            onChange={onContentChange}
            defaultValue={contentValue}
            name="content"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
