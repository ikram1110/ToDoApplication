import { useState } from "react";

const ToDoForm = (props) => {
  let initialForm = {
    id: null,
    title: "",
    description: "",
    status: 0,
    periode: new Date(
      new Date().getTime() - new Date().getTimezoneOffset() * 60000
    ).toJSON(),
  };
  if (props.modal.title == "Edit ToDo") {
    initialForm = {
      id: props.modal.item.id,
      title: props.modal.item.title,
      description: props.modal.item.description,
      status: props.modal.item.status,
      periode: props.modal.item.periode,
    };
  }
  const [todo, setTodo] = useState(initialForm);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!todo.title) return;
          if (props.modal.title == "Edit ToDo") {
            props.updateToDo(todo.id, todo);
          } else {
            props.addToDo(todo);
          }
          setTodo(initialForm);
          props.closeModal();
        }}
      >
        <div className="listForm">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={todo.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="listForm">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="6"
            name="description"
            value={todo.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit" class="btnSubmit">
          Save
        </button>
      </form>
    </div>
  );
};
export default ToDoForm;
