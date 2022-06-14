import "./card.css";

export default function Card({ taskData, setListCard, handleModal }) {
  const handleDelete = (e) => {
    e.stopPropagation();
    setListCard((prev) => prev.filter((item) => item.theme !== taskData.theme));
  };

  return (
    <div className="card" onClick={() => handleModal(taskData)}>
      <div className="d-flex align-items-center justify-content-between">
        <div className="card-title" onClick={(e) => e.stopPropagation()}>
          {taskData.title}
        </div>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
      <div className="d-flex gap-2 mt-2">
        <div className="task-theme" onClick={(e) => e.stopPropagation()}>
          #{taskData.theme}
        </div>
        {taskData.badges && taskData.badges !== "choose badge" && (
          <div className="badges" onClick={(e) => e.stopPropagation()}>
            {taskData.badges}
          </div>
        )}
      </div>
    </div>
  );
}
