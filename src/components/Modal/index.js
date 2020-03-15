import React from 'react';
import './style.scss';

const Modal = (props) => {
  const { onShow, close } = props;
  if (!onShow) {
    return null;
  }
  return (
    <div className={`modal-component ${onShow ? 'show-modal-animation' : ''}`}>
      <div className="modal-content">
        <button className="close-modal-button" onClick={() => close()}>O</button>

        <div className="modal-title">
          <div>{props.title}</div>
        </div>
        <div className="break-line" />
        {props.children}
      </div>
    </div>
  )
};

export default Modal;