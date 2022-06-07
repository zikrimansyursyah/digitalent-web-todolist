import "./App.css";

function App() {
  return (
    <>
      <div className="d-flex justify-content-center fs-3 fw-semibold my-3">
        Zikri Task Manager!
      </div>
      <div className="board container mx-auto">
        <div className="board-header">Task</div>
        <div className="task-wrapper">
          <div className="card">
            <div className="card-title">Create new components</div>
            <div className="d-flex gap-2 mt-2">
              <div className="task-theme">#SK-211</div>
              <div className="badges" ariaColor="1">
                Thatsable
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-title">Create new components</div>
            <div className="d-flex gap-2 mt-2">
              <div className="task-theme">#SK-211</div>
              <div className="badges" ariaColor="1">
                Thatsable
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-title">Create new components</div>
            <div className="d-flex gap-2 mt-2">
              <div className="task-theme">#SK-211</div>
              <div className="badges" ariaColor="1">
                Thatsable
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-title">Create new components</div>
            <div className="d-flex gap-2 mt-2">
              <div className="task-theme">#SK-211</div>
              <div className="badges" ariaColor="1">
                Thatsable
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-title">Create new components</div>
            <div className="d-flex gap-2 mt-2">
              <div className="task-theme">#SK-211</div>
              <div className="badges" ariaColor="1">
                Thatsable
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-title">Create new components</div>
            <div className="d-flex gap-2 mt-2">
              <div className="task-theme">#SK-211</div>
              <div className="badges" ariaColor="1">
                Thatsable
              </div>
            </div>
          </div>
        </div>
        <form className="board-footer">
          <label htmlFor="">Enter</label>
          <input type="text" placeholder="add new task" />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
}

export default App;
