import { createPortal } from "react-dom";
import cn from "classnames";
import closeIconImg from "../../assets/images/close-icon.png";

import "./Modal.scss";
import { useEffect } from "react";

function Modal({ children, open = false, onClose = () => {} }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [open]);

  return createPortal(
    <div
      className={cn("modal", {
        modal_opened: open,
      })}
      onClick={onClose}
    >
      <div className="modal-window" onClick={e => e.stopPropagation()}>
        <div className="modal-window__close-button" onClick={onClose}>
          <img src={closeIconImg} alt="close button" />
        </div>
        <div className="modal-window__content">{children}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
