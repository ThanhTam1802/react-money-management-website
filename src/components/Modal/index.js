import React, { useState, useEffect } from 'react';
import './style.scss';

const Modal = (props) => {
  const { onShow, onClose } = props;
  const [isOpen, setIsOpen] = useState(true);

  const handleOnClose = () => {
    setIsOpen(false);
    setTimeout(() => { 
      onClose() 
      setIsOpen(true);
    }, 290);
  };

  if (!onShow) { return null };

  return (
    <div className={`modal-component ${isOpen ? 'fade-in-animation' : 'fade-out-animation'}`}>
      <div className="modal-content">
        <button className="close-modal-button" onClick={handleOnClose}>X</button>
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