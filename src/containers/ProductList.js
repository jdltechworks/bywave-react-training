import React, { Component } from 'react';

class SingleProductView extends Component {
  render() {
    return(
      <div>This is the single product view</div>
    );
  }
}

class ProductsView extends Component {
  render() {
    return(
      <div>This is a list of products soon!</div>
    );
  }
}

export default class ProductList extends Component {
  render() {
    let { props } = this;
    let { params: { id } } = props;
    if(id !== undefined) {
      return(<SingleProductView />);
    } else {
      return(<ProductsView />)
    }
  }
} 