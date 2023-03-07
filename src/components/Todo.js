import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modelIsOpen, setModelIsOpen] = useState(false);

  function deleteHandler() {
    setModelIsOpen(true);
  }

  function closeModalHander() {
    setModelIsOpen(false);
  }

  return (
    <div className="card">
      <h2> {props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modelIsOpen && (
        <Modal onCancel={closeModalHander} onConfirm={closeModalHander} />
      )}
      {modelIsOpen && <Backdrop onClick={closeModalHander} />}
    </div>
  );
}

export default Todo;
