import React from 'react';
import {
  colors,
  interiorColors,
  interiorLayouts,
  models,
  initialConfig
} from '../../data';
// Styles
import './App.css';
// Components
import Menu from '../Menu';

class App extends React.Component {
  state = {
    currentStep: 0,
    config: null,
    totalPrice: 0
  };

  render() {
    return (
      <div className="app">
        <Menu
          items={[]}
          selectedItem={this.state.currentStep}
          onSelectItem={null}
        />
      </div>
    );
  };
};

export default App;
