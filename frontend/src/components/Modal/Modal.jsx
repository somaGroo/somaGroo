import React,{useState} from 'react';
import ModalBox from './ModalBox';
import './Modal.css';

export default function Modal({writer, content}){
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const head = `from.${writer}`

  return(
    <div className='modalbutton'>
      <button type="button" onClick={openModal}>
        {head}
      </button>
      <ModalBox open={modalOpen} close={closeModal} header={head}>
        {content}
      </ModalBox>
    </div>
  );
}
