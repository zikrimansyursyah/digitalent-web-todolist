import { useState, useEffect } from "react";
import "./CardDetail.css";

export default function CardDetail({ modal, setOpenModal, setListCard }) {
  const [modalData, setModalData] = useState();

  useEffect(() => {
    setModalData(modal.data);
  }, [modal]);

  const parseDate = (datetime) => {
    let fullDate = new Date(datetime);
    let twoDigitMonth = fullDate.getMonth() + "";
    if (twoDigitMonth.length === 1) twoDigitMonth = "0" + twoDigitMonth;
    let twoDigitDate = fullDate.getDate() + "";
    if (twoDigitDate.length === 1) twoDigitDate = "0" + twoDigitDate;
    return `${fullDate.getFullYear()}-${twoDigitMonth}-${twoDigitDate}`;
  };

  const handleSubmit = () => {
    // setListCard((prev) =>
    //   prev.filter((item) => item.theme !== modalData.theme)
    // );
    // setListCard((prev) => [...prev, modalData]);
    setListCard((prev) =>
      prev.map((item) =>
        item.theme === modalData.theme
          ? {
              ...item,
              title: modalData.title,
              badges: modalData.badges,
              description: modalData.description,
              priority: modalData.priority,
              updatedAt: new Date(),
            }
          : item
      )
    );
    setOpenModal({ isOpen: false, data: null });
  };

  if (modal.isOpen)
    return (
      <>
        <div
          className="details"
          onClick={() => setOpenModal({ isOpen: false, data: null })}
        >
          <div className="detail-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="d-flex justify-content-between align-items-center border-bottom pe-3 pb-3">
              <input
                type="text"
                id="title"
                defaultValue={modal.data.title}
                className="title"
                onChange={(e) =>
                  setModalData((prev) => ({ ...prev, title: e.target.value }))
                }
              />
              <div className="border rounded-2 py-1 px-2 fw-semibold shadow-sm bg-white">
                {modal.data.theme}
              </div>
            </div>
            <div className="px-2 py-4">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  defaultValue={modal.data.description ?? ""}
                  onChange={(e) =>
                    setModalData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                />
                <label htmlFor="description">Description</label>
              </div>
              <label htmlFor="#">Priority</label>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex gap-2 align-items-center">
                  <input
                    type="radio"
                    name="difficulty"
                    id="Easy"
                    defaultChecked={modal.data.priority === "Easy" ?? true}
                    onChange={(e) =>
                      setModalData((prev) => ({
                        ...prev,
                        priority: `${e.target.id}`,
                      }))
                    }
                  />
                  <label htmlFor="Easy">Easy</label>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <input
                    type="radio"
                    name="difficulty"
                    id="Medium"
                    defaultChecked={modal.data.priority === "Medium" ?? true}
                    onChange={(e) =>
                      setModalData((prev) => ({
                        ...prev,
                        priority: `${e.target.id}`,
                      }))
                    }
                  />
                  <label htmlFor="Medium">Medium</label>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <input
                    type="radio"
                    name="difficulty"
                    id="Urgent"
                    defaultChecked={modal.data.priority === "Urgent" ?? true}
                    onChange={(e) =>
                      setModalData((prev) => ({
                        ...prev,
                        priority: `${e.target.id}`,
                      }))
                    }
                  />
                  <label htmlFor="Urgent">Urgent</label>
                </div>
              </div>
              <label htmlFor="badges">Badge</label>
              <select
                id="badges"
                className="form-select mb-4 py-2"
                onChange={(e) =>
                  setModalData((prev) => ({
                    ...prev,
                    badges: `${e.target.value}`,
                  }))
                }
                defaultValue={modal.data.badges || "choose badge"}
              >
                <option className="text-secondary">choose badge</option>
                <option>Kerjaan</option>
                <option>Kuliah</option>
                <option>Tugas</option>
                <option>Project</option>
                <option>Have Fun</option>
              </select>
              <div className="form-floating mb-3">
                <input
                  type="date"
                  className="form-control"
                  id="created-at"
                  placeholder="created-at"
                  defaultValue={parseDate(modal.data.createdAt)}
                  disabled
                />
                <label htmlFor="created-at">Created at</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="date"
                  className="form-control"
                  id="updated-at"
                  placeholder="updated-at"
                  defaultValue={parseDate(modal.data.updatedAt)}
                  disabled
                />
                <label htmlFor="updated-at">Updated at</label>
              </div>
            </div>
            <div className="d-flex justify-content-end border-top pt-3">
              <div className="d-flex gap-2">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Simpan
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setOpenModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
