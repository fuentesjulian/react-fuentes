import React, { useState } from "react";
import { useEffect } from "react";

function YesNoModal({ modalTitle, modalText, modalFunction }) {
  const [modalResp, setModalResp] = useState(false);

  useEffect(() => {
    if (modalResp) modalFunction();
    setModalResp(false);
  }, [modalResp]);

  return (
    <div className="modal fade" id="myModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalLabel">
              {modalTitle}
            </h5>
          </div>
          <div className="modal-body">{modalText}</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              No
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={() => {
                setModalResp(true);
              }}
            >
              Si
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YesNoModal;
