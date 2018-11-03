import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import WizzardStep from './WizardStep';

class Wizzard extends Component {

  state = {
    currentState: 0,
    index: 0,
    direction: null
  }

  handleSelect = (newState) => {
    if ((this.state.currentState < newState && this.props.canChange(this.state.currentState, newState))
      || (this.state.currentState > newState)) {
      this.setState({
        currentState: newState
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
    return <div>
      {activeState}
    </div>;
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