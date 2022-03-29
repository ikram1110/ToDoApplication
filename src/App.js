import "./App.css";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import ToDoList from "./components/ToDoList";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [toDos, setToDos] = useState(null);

  const [modal, setModal] = useState({
    isOpen: false,
    title: "",
    item: {},
  });
  const showModal = (title, item) => {
    setModal({
      isOpen: true,
      title: title,
      item: item,
    });
  };
  const closeModal = () => {
    setModal({ isOpen: false });
  };
  const editForm = {
    id: null,
    title: "",
    description: "",
    status: 0,
    periode: "",
  };

  const [curToDo, setCurToDo] = useState(editForm);
  const addToDo = (toDo) => {
    toDo.id = toDos.length + 1;
    setToDos([...toDos, toDo]);
  };
  const editRow = (todo) => {
    setEditing = true;
    setCurToDo({
      id: todo.id,
      title: todo.title,
      description: todo.description,
      status: todo.status,
      periode: todo.periode,
    });
  };
  const updateToDo = (id, updateToDo) => {
    setEditing(false);
    setToDos(toDos.map((todo) => (todo.id === id ? updateToDo : todo)));
    // console.log(toDos);
  };
  const deleteToDo = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };
  useEffect(async () => {
    setLoading(true);
    await axios
      .get("https://virtserver.swaggerhub.com/kioser-tech/todo/1.0.0/")
      .then((response) => {
        setLoading(false);
        setToDos(response.data);
      })
      .catch((error) => {
        console.error("Error load data", error);
      });
  }, [setToDos]);
  return (
    <div className="App">
      <MyHeader
        addToDo={addToDo}
        modal={modal}
        showModal={showModal}
        closeModal={closeModal}
        updateToDo={updateToDo}
      />
      <ToDoList
        isLoading={loading}
        modal={modal}
        showModal={showModal}
        closeModal={closeModal}
        setModal={setModal}
        todo={toDos}
        editRow={editRow}
        updateToDo={updateToDo}
        deleteToDo={deleteToDo}
      />
      <MyFooter />
    </div>
  );
};

export default App;
