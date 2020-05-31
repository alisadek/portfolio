import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "./Backdrop";
import "./Modal.css";

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form>
        <img
          src="https://scontent-hbe1-1.xx.fbcdn.net/v/t31.0-8/12772044_10153228252755518_5671036087251677849_o.jpg?_nc_cat=100&_nc_sid=174925&_nc_eui2=AeFr8UnPonwkQ-Murx3PVQsXqFarCs03KueoVqsKzTcq53HVEq2J-gLr4UvlzlT5Mno&_nc_ohc=GI4tm0FunR8AX9aBysi&_nc_ht=scontent-hbe1-1.xx&oh=b5a1c49139b604c74a5c17b5523d6e8d&oe=5EF86A4D"
          alt="Resume"
        />
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
