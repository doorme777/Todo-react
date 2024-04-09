import React from "react";
import ReactDOM from "react-dom";

function Modal({children}) {
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal-content">
                {children}
            </div>
        </div>,
        document.getElementById("root")
    );
}

export { Modal };