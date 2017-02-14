import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProductActions from '../redux/actions/ProductActions';

class SingleProductView extends Component {
  render() {
    return(
      <div>This is the single product view</div>
    );
  }
}

class ProductsView extends Component {
  render() {
    let { props } = this;
    let { products: { collection } } = props;
    return(
      <div><ul>{_.map(collection, (gym, key) => {
        return <li key={key}>{gym.name}</li>
      })}</ul></div>
    );
  }
}

@connect((state) => {
  return {
    products: state.Product
  }
}, dispatch => bindActionCreators(ProductActions, dispatch))

export default class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    let { props } = this;
    let { params: { id } } = props;
    let { products } = props;
    if(id !== undefined) {
      return(<SingleProductView {...props} />);
    } else {
      return(<ProductsView {...props} />)
    }
  }
} 