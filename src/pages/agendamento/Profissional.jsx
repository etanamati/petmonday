import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ModalAlert } from '../../components';

class Profissional extends Component {

  renderProfissionais = () => {
    const { profissionais } = this.props;
    return (profissionais.map(profissional =>
      <option value={profissional.uid} key={profissional.uid}>{profissional.nome}</option>
    ));
  }
  render() {
    const { showModal,
      handleCloseModal,
      handleSelectProfissional,
      handleChangeObservacao,
      profissional,
      observacao } = this.props;
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Profissional</Form.Label>
            <Form.Control as="select" onChange={handleSelectProfissional} value={profissional}>
              <option value="">Escolha um profissional</option>
              {this.renderProfissionais()}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Observação</Form.Label>
            <Form.Control name="userName" as="textarea" value={observacao} onChange={handleChangeObservacao} />
          </Form.Group>
        </Form>
        <ModalAlert
          show={showModal}
          title={"Selecione um profissional!"}
          subTitle={""}
          content="Necessário selecionar um profissional!"
          handleClose={handleCloseModal} />
      </div>
    );
  }
}

Profissional.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  profissional: PropTypes.string.isRequired,
  profissionais: PropTypes.array.isRequired,
  handleSelectProfissional: PropTypes.func.isRequired,
  observacao: PropTypes.string.isRequired,
  handleChangeObservacao: PropTypes.func.isRequired

}

export default Profissional;