import React, { useState } from 'react';
import Form from '../../components/Form';
import TextEditor from '../../components/TextEditor';
import Modal from '../../components/Modal';

const Home = () => {
  const [modal, setModal] = useState(false);
  const handleCloseModal = () => {
    setModal(false);
  };
  const handleOpenModal = () => {
    setModal(true);
  };
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        Hello! this is React with Parcel
      </div>
      <button onClick={handleOpenModal}>Open Modal</button>

      <Modal onShow={modal} title={"This is modal"} onClose={handleCloseModal}>
        <TextEditor />
      </Modal>
    </div>
  );
}

export default Home;