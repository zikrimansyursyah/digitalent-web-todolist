import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/card";
import CardDetail from "./components/CardDetail";

function App() {
  const [inputAdd, setInputAdd] = useState(null);
  const [listCard, setListCard] = useState([]);
  const [total, setTotal] = useState(0);
  const [modal, setModal] = useState({
    isOpen: false,
    data: null,
  });

  useEffect(() => {
    const taskList = window.localStorage.getItem("task-list");
    const totalTask = window.localStorage.getItem("total-task");

    setListCard(
      taskList !== null || (taskList || []).length !== 0
        ? JSON.parse(taskList)
        : []
    );
    setTotal(totalTask !== null ? parseInt(totalTask) : 0);
  }, []);

  useEffect(() => {
    if (listCard.length > 0) {
      window.localStorage.setItem("task-list", JSON.stringify(listCard));
    }
    document
      .querySelector(".board")
      .scrollTo(0, document.querySelector(".board").scrollHeight);
  }, [listCard]);

  const handleAdd = (event) => {
    event.preventDefault();
    if (!inputAdd) return;
    setListCard((prev) => [
      ...prev,
      {
        title: inputAdd,
        theme: `TS-${total + 1}`,
        badges: null,
        description: null,
        priority: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    setTotal((prev) => prev + 1);
    window.localStorage.setItem("total-task", total + 1);
    document.getElementById("add-task").value = "";
    setInputAdd(null);
  };

  const handleOpenModal = (item) => {
    setModal({ isOpen: true, data: item });
  };

  return (
    <>
      <div className="d-flex justify-content-center fs-3 fw-semibold my-3">
        Zikri Task Manager!
      </div>
      <div className="board mx-auto">
        <div className="board-header">Task</div>
        <div className="task-wrapper">
          {(listCard || []).map((item, index) => (
            <Card
              key={index}
              taskData={item}
              setListCard={setListCard}
              handleModal={handleOpenModal}
            />
          ))}
        </div>
        <form className="board-footer" onSubmit={handleAdd}>
          <input
            type="text"
            placeholder="add new task"
            id="add-task"
            onChange={(event) => {
              setInputAdd(event.target.value);
            }}
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
      <CardDetail
        modal={modal}
        setOpenModal={setModal}
        setListCard={setListCard}
      />
    </>
  );
}

export default App;
