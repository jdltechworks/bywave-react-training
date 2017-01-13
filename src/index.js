import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import _ from 'lodash';

const Foo = () => {
  return(
    <div>The function</div>
  );
}

let people = [
  { name: 'ellen sabaan', age: 100 },
  { name: 'LEO', age: 500 },
  { name: 'rose', age: 11},
  { name: 'mae', age: 1 },
  { name: 'gerard', age: 11},
  { name: 'isiel', age: 1 }
];

class Hello extends Component  {
  _onClick(e) {
    console.log(this);
    console.log('clicked');
    alert('clicked');
  }
  render() {
    let { props } = this;
    let { isActive } = props;
    let grouped = _.chunk(people, 3);
    return(
      <div>
        {_.toString(isActive)}
      </div>
    );
  }
}

class StateSample extends Component {
  state = {
    isActive: false
  };
  render() {
    let { state } = this;
    let { isActive } = state;
    let grouped = _.chunk(people, 3);
    return(
      <div>
        <a href="#" onClick={(e) => {
          this.setState({ isActive: !this.state.isActive });
        }}>toggle</a>
        { isActive ? <div>
          <Hello isActive={isActive} />
          <h2>Mga pips</h2>
          {_.map(grouped, (pips, key) => {
            return <ul key={key}>
              {_.map(pips, (person, index) => {
                return <li key={index}>
                  <span>Name: {person.name}</span>
                  &nbsp;
                  <span>Age: {person.age}</span></li>
              })}
            </ul>
        })}
        </div> : null }
      </div>
    );
  }
}

render(<StateSample />, document.getElementById('app'));

if(process.env.NODE_ENV === 'development') {
  module.hot.accept();
}