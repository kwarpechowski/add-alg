import React, { Component } from 'react';
import ButtonAppBar from "./ButtonAppBar";
import Apiori from "./Apriori";

class App extends Component {
  render() {
    return (
      <div className="App">
          <ButtonAppBar />
          <Apiori />
      </div>
    );
  }
}

export default App;
