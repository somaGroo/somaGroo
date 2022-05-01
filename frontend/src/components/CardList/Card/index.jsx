import React, {useState} from "react";
import $ from "./style.module.scss";
import ModalBox from "../../Modal/ModalBox";

export default function Card({ content, writer }) {
  const [modalOpen, setModalOpen] = useState(false);
  
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const head = `From.${writer}`

  return (
    <div className={$.wrapping}>
      <div className={$.card} role="button" onClick={() =>openModal()} 
        onKeyDown={() =>openModal()} tabIndex={0}>
        <span>{content}</span>
        <span>From. {writer}</span>
      </div>
      <ModalBox open={modalOpen} close={closeModal} header={head}>
        {content}
      </ModalBox>
    </div>
  );
}
