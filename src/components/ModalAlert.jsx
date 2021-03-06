import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import PropTypes from 'prop-types';

const ModalAlert = (props) => {
  const {show, title, subTitle, content, handleClose} = props;
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
            <Button onClick={handleClose}>Fechar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
}

ModalAlert.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  content: PropTypes.string,
  handleClose: PropTypes.func
}

export default ModalAlert;
