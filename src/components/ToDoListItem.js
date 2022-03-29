import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ToDoListItem = (props) => {
  return (
    <div className={"listItem bg" + props.data.status}>
      <div
        className="lblToDo"
        onClick={() => {
          if (props.data.status == 0) {
            props.showModal("Edit ToDo", props.data);
          }
        }}
      >
        <label>{props.data.title}</label>
      </div>
      {props.data.status == 0 ? (
        <div className="action">
          <i
            onClick={() => {
              props.updateToDo(props.data.id, {
                id: props.data.id,
                title: props.data.title,
                description: props.data.description,
                status: 1,
                periode: props.data.periode,
              });
            }}
          >
            <FontAwesomeIcon icon={faCheck} size="sm" />
          </i>
          <i
            onClick={() => {
              props.deleteToDo(props.data.id);
            }}
          >
            <FontAwesomeIcon icon={faTrash} size="sm" />
          </i>
        </div>
      ) : null}

      {/* <Modal
        isOpen={props.modal.isOpen}
        contentLabel="Edit Modal"
        style={customStyles}
      >
        <div className="wrapHeadModal">
          <h3 className="headModal">{props.modal.title}</h3>
          <div className="closeButton" onClick={props.closeModal}>
            <FontAwesomeIcon icon={faTimes} size="xl" />
          </div>
        </div>
        <EditForm
          updateToDo={props.updateToDo}
          closeModal={props.closeModal}
          data={todo}
        />
      </Modal> */}
    </div>
  );
};

export default ToDoListItem;
