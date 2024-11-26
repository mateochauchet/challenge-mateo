import React from "react";
import "./index.css";

interface IProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const Modal = ({ children, onClose, isOpen }:IProps) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
