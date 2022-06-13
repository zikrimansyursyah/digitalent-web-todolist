import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/card";
import CardDetail from "./components/CardDetail";

function App() {
  const [inputAdd, setInputAdd] = useState(null);
  const [listCard, setListCard] = useState([]);
  const [total, setTotal] = useState(0);
  const [modal, setModal] = useState(true);

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
    console.info(listCard);
    if (listCard.length > 0) {
      window.localStorage.setItem("task-list", JSON.stringify(listCard));
    }
    window.localStorage.setItem("total-task", total);
    document
      .querySelector(".board")
      .scrollTo(0, document.querySelector(".board").scrollHeight);
  }, [listCard, total]);

  function handleAdd(event) {
    event.preventDefault();
    if (!inputAdd) return;
    setListCard((prev) => [
      ...prev,
      {
        title: inputAdd,
        theme: `TS-${total + 1}`,
        badges: null,
      },
    ]);
    setTotal((prev) => prev + 1);
    document.getElementById("add-task").value = "";
    setInputAdd(null);
  }

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
              title={item.title}
              theme={item.theme}
              badges={item.badges}
              setListCard={setListCard}
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
      {/* <CardDetail isOpen={modal} /> */}
      <div class="modal fade show" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
