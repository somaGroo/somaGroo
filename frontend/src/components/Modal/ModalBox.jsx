/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './ModalBox.css';

export default function ModalBox({ open, close, header, children}) {
  return (
    <div className={open ? 'openModal modal' : 'modal'} onClick={close} >
      {open ? (
        <section onClick={e => e.stopPropagation()}>
          <header>
            {header}
            <button type="button" className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{children}</main>
        </section>
      ) : null}
    </div>
  );
}
