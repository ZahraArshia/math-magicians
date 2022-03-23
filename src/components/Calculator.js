import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handler = this.handler.bind(this);
  }

  handler(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="skeleton">
        <div className="screen">
          {total}
          {operation}
          {next}
        </div>
        <div className="keyboard">
          <button type="button" onClick={this.handler} className="gray">AC</button>
          <button type="button" onClick={this.handler} className="gray">+/-</button>
          <button type="button" onClick={this.handler} className="gray">%</button>
          <button type="button" onClick={this.handler} className="orange">÷</button>
          <button type="button" onClick={this.handler} className="gray">7</button>
          <button type="button" onClick={this.handler} className="gray">8</button>
          <button type="button" onClick={this.handler} className="gray">9</button>
          <button type="button" onClick={this.handler} className="orange">x</button>
          <button type="button" onClick={this.handler} className="gray">4</button>
          <button type="button" onClick={this.handler} className="gray">5</button>
          <button type="button" onClick={this.handler} className="gray">6</button>
          <button type="button" onClick={this.handler} className="orange">-</button>
          <button type="button" onClick={this.handler} className="gray">1</button>
          <button type="button" onClick={this.handler} className="gray">2</button>
          <button type="button" onClick={this.handler} className="gray">3</button>
          <button type="button" onClick={this.handler} className="orange">+</button>
          <button type="button" onClick={this.handler} className="gray" id="zero">0</button>
          <button type="button" onClick={this.handler} className="gray">.</button>
          <button type="button" onClick={this.handler} className="orange">=</button>
        </div>
      </div>
    );
  }
}
