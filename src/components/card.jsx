import './card.css';

export default function Card({ title, theme, badges, setListCard }) {
  function handleDelete() {
    setListCard((prev) => prev.filter((item) => item.theme !== theme));
  }

  return (
    <div className="card">
      <div className="d-flex align-items-center justify-content-between">
        <div className="card-title">{title}</div>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </div>
      <div className="d-flex gap-2 mt-2">
        <div className="task-theme">#{theme}</div>
        {
          (badges || []).map((item, index) => (
            <div key={index} className="badges" ariaColor={item.color}>
              {item.title}
            </div>
          ))
        }
      </div>
    </div>
  )
}