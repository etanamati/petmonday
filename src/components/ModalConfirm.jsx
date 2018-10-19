import React from 'react';
import {Button, Modal} from 'react-bootstrap';

const ModalConfirm = (props) => {
  const {show, title, subTitle, content, handleClose, handleConfirm} = props;
  return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>
              {subTitle}
            </h4>
            <p>
              {content}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secundary" onClick={handleClose}>Fechar</Button>
            <Button variant="success" onClick={handleConfirm}>Confirmar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
}

export default ModalConfirm;
