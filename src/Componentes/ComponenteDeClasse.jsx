import React, { Component } from "react";

class ComponenteDeClasse extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incrementar = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Componente de classe</h1>
        </div>
        <p>Contagem: {this.state.count}</p>
        <button type="button" onClick={this.incrementar}>
          Incrementar
        </button>
      </div>
    );
  }
}

export default ComponenteDeClasse;
