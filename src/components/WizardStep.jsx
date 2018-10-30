import React, { Component } from 'react';

class WizzardStep extends Component {

  render() {
    const { children } = this.props;
    
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default WizzardStep;