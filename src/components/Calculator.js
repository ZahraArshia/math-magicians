import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="skeleton">
        <div className="screen">
          0
        </div>
        <div className="keyboard">
          <button type="button" className="gray" id="ALLClear">AC</button>
          <button type="button" className="gray" id="PlusMinus">+/-</button>
          <button type="button" className="gray" id="percent">%</button>
          <button type="button" className="orange" id="divide">&divide;</button>
          <button type="button" className="gray" id="7">7</button>
          <button type="button" className="gray" id="8">8</button>
          <button type="button" className="gray" id="9">9</button>
          <button type="button" className="orange" id="multiply">&times;</button>
          <button type="button" className="gray" id="4">4</button>
          <button type="button" className="gray" id="5">5</button>
          <button type="button" className="gray" id="6">6</button>
          <button type="button" className="orange" id="minus">&ndash;</button>
          <button type="button" className="gray" id="1">1</button>
          <button type="button" className="gray" id="2">2</button>
          <button type="button" className="gray" id="3">3</button>
          <button type="button" className="orange" id="plus">+</button>
          <button type="button" className="gray" id="zero">0</button>
          <button type="button" className="gray" id="dot">.</button>
          <button type="button" className="orange" id="equal">=</button>
        </div>
      </div>
    );
  }
}
