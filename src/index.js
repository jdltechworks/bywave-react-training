import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import _ from 'lodash';

class FormSample extends Component {
  state = {
    message: '',
    data: []
  };
  componentDidMount() {
    fetch('http://matrix.f45.info/v1/franchisees', {
      method: 'GET'
    }).then((res) => {
      return res.json();
    }).then((json) => {
      this.setState({ data: json.data });
    }).catch(err => console.log(err));
  }
  handleSubmit() {

  }
  render() {
    let { handleSubmit } = this;
    console.log(this.state.data);
    return(
      <div className="container">
        <form className="form" onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            <label className="form-label">First name</label>
            <input ref="firstName" className="form-control" type="text" />
            <label className="form-label">Last name</label>
            <input ref="lastName" className="form-control" type="text" />
            <button className="btn btn-success btn-block">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

render(<FormSample />, document.getElementById('app'));

if(process.env.NODE_ENV === 'development') {
  module.hot.accept();
}