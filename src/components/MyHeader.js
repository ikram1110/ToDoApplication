import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ToDoForm from "./ToDoForm";
import Modal from "react-modal/lib/components/Modal";

const MyHeader = (props) => {
  Modal.setAppElement("body");
  const customStyles = {
    content: {
      color: "#000000",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div className="header">
      <div className="wrapHeader">
        <h2 className="headTitle">To Do Application</h2>
        <div
          className="addButton"
          onClick={() => {
            props.showModal("Add ToDo");
          }}
        >
          <FontAwesomeIcon icon={faCirclePlus} size="2xl" />
        </div>
      </div>
      <Modal
        isOpen={props.modal.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Add Modal"
        style={customStyles}
      >
        <div className="wrapHeadModal">
          <h3 className="headModal">{props.modal.title}</h3>
          <div className="closeButton" onClick={props.closeModal}>
            <FontAwesomeIcon icon={faTimes} size="xl" />
          </div>
        </div>
        <ToDoForm
          modal={props.modal}
          addToDo={props.addToDo}
          closeModal={props.closeModal}
          updateToDo={props.updateToDo}
        />
      </Modal>
    </div>
  );
};

export default MyHeader;
