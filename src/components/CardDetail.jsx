import './CardDetail.css';
export default function CardDetail({ isOpen, setOpenModal }) {
  // document.querySelector(".details *").addEventListener('click', function (e) {
  //   e.stopPropagation();
  // })
  if (isOpen)
    return (
      <>
        <div className="details">
          <div className="detail-wrapper">
            <div className="border-bottom pb-3">
              <div className="title">Judul</div>
            </div>
            <div className="px-2 py-4">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="description" placeholder="Description" defaultValue="Data" />
                <label htmlFor="description">Description</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="created-at" placeholder="created-at" defaultValue="Data" />
                <label htmlFor="created-at">Created at</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="updated-at" placeholder="updated-at" defaultValue="Data" />
                <label htmlFor="updated-at">Updated at</label>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex gap-2 align-items-center">
                  <input type="radio" name="difficulty" id="Easy" />
                  <label htmlFor="Easy">Easy</label>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <input type="radio" name="difficulty" id="Medium" />
                  <label htmlFor="Medium">Medium</label>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <input type="radio" name="difficulty" id="Urgent" />
                  <label htmlFor="Urgent">Urgent</label>
                </div>
              </div>
              <select className="form-select" aria-label="Default select example">
                <option>Category</option>
                <option defaultValue="1">One</option>
                <option defaultValue="2">Two</option>
                <option defaultValue="3">Three</option>
              </select>
            </div>
            <div className="d-flex justify-content-end border-top pt-3">
              <div className="d-flex gap-2">
                <button className="btn btn-primary">Simpan</button>
                <button className="btn btn-secondary" onClick={() => setOpenModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
