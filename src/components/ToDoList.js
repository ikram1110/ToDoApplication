import ToDoListItem from "./ToDoListItem";

const ToDoList = (props) => {
  if (!props.isLoading) {
    if (!props.todo || props.todo.length === 0) return <p>No repos, sorry</p>;
    return (
      <div className="wrapContent">
        <div className="wrapList">
          <h3>On Progress Items</h3>
          <ul className="list">
            {props.todo.map((item) =>
              item.status == 0 ? (
                <ToDoListItem
                  key={item.id}
                  modal={props.modal}
                  showModal={props.showModal}
                  closeModal={props.closeModal}
                  setModal={props.setModal}
                  data={item}
                  editRow={props.editRow}
                  updateToDo={props.updateToDo}
                  deleteToDo={props.deleteToDo}
                />
              ) : null
            )}
          </ul>
        </div>
        <div className="wrapList">
          <h3>Completed Items</h3>
          <ul className="list">
            {props.todo.map((item) =>
              item.status == 1 ? (
                <ToDoListItem key={item.id} data={item} />
              ) : null
            )}
          </ul>
        </div>
      </div>
    );
  }

  return <p>Loading data...</p>;
};

export default ToDoList;
