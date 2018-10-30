import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import WizzardStep from './WizardStep';
const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

class Wizzard extends Component {

  state = {
    currentState: 0,
    index: 0,
    direction: null
  }

  handleSelect = (currentState) => {
    if ((this.state.currentState < currentState && this.props.canChange())
      || (this.state.currentState > currentState)) {
      this.setState({
        currentState
      });
    }
  }

  renderHeader = (steps) => {
    return (
      <div>
        <ul className="wizard">
          {steps.map(step => {
            if (step.type !== WizzardStep) return null;

            return (step.props.id === this.state.currentState ?
            <li className="wizard-step" key={step.props.id}>
              <Button className="wizard-step-link">
                {step.props.title}
              </Button>
            </li> :
            <li className="wizard-step" key={step.props.id}>
            <Button variant="secondary" onClick={() => this.handleSelect(step.props.id)} className="wizard-step-link">
              {step.props.title}
            </Button>
            </li>)
          })}
            
        </ul>
      </div>
    )
  }

  renderContent = (children) => {
    const activeState = children.find(child => child.props.id === this.state.currentState);
    return activeState;
  }

  render() {
    const { children = [] } = this.props;
    return (
      <div>
        {this.renderHeader(children)}
        {this.renderContent(children)}
      </div>
    )
  }
}

Wizzard.defaultProps = {
  canChange: () => true
}

export default Wizzard;