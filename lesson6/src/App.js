import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    names: ['Арген', 'Максат', 'Жанылай']
  }

  render() {
    const { names } = this.state;

    return (
        <ul>
          {names.map((name, index) => (
              <li key={index}>{name}</li>
          ))}
        </ul>
    );
  }
}

export default MyComponent;