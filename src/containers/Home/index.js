import React, { useState } from 'react';
import Form from '../../components/Form';
import TextEditor from '../../components/TextEditor';
import Modal from '../../components/Modal';

const Home = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        Hello! this is React with Parcel
      </div>
      <button onClick={() => { setModal(true) }}>
        Open Modal
      </button>

      <Modal title={"This is modal"}
        onShow={modal}
        onClose={() => { setModal(false) }}>
        <TextEditor />
      </Modal>
    </div>
  );
}

export default Home;