import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/card";

function App() {
  const [inputAdd, setInputAdd] = useState(null);
  const [listCard, setListCard] = useState([
  ]);

  useEffect(() => {
    const taskList = window.localStorage.getItem("task-list");
    if (taskList !== null || (taskList || []).length !== 0) {
      setListCard(JSON.parse(taskList));
    }
  }, []);

  useEffect(() => {
    if (listCard.length > 0) {
      window.localStorage.setItem("task-list", JSON.stringify(listCard));
    }
    document.querySelector('.board').scrollTo(0, document.querySelector(".board").scrollHeight)
  }, [listCard]);

  function handleAdd(event) {
    event.preventDefault();
    if (!inputAdd) return;
    setListCard((prev) => ([...prev, {
      title: inputAdd,
      theme: `TS-${listCard.length + 1}`,
      badges: null,
    }]));
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
          {
            (listCard || []).map((item, index) => (
              <Card key={index} title={item.title} theme={item.theme} badges={item.badges} setListCard={setListCard} />
            ))
          }
        </div>
        <form className="board-footer" onSubmit={handleAdd}>
          {/* <label htmlFor="">Enter</label> */}
          <input type="text" placeholder="add new task" id="add-task" onChange={(event) => { setInputAdd(event.target.value) }} />
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    </>
  );
}

export default App;
