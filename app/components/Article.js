import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCount } from '../data-selectors';
import { addOne } from '../actions';

const mapStateToProps = state => ({
    count: getCount(state),
});

@connect(mapStateToProps, { addOne })
class App extends Component {
  render() {
    return (
      <div className='container'>
        Article page
        <button onClick={this.props.addOne}>Press Me!</button>
      </div>
    );
  }
};

export default App
