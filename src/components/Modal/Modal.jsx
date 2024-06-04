import React, { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

import sprite from "../../assets/images/icons.svg";

import css from "./modal.module.css";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ isOpen, close, children }) => {
  const closeModal = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === "Escape") {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    document.addEventListener("keydown", closeModal);
    return () => document.removeEventListener("keydown", closeModal);
  }, [closeModal]);

  return createPortal(
    <>
      {isOpen && (
        <div onClick={closeModal} className={css.modal}>
          <button onClick={close}>
            <svg className={css.iconCross}>
              <use href={`${sprite}#icon-cross`} />
            </svg>
          </button>
          {children}
        </div>
      )}
    </>,
    modalRoot
  );
};

export default Modal;
