import React, {Component} from 'react';

class Loader extends Component{
  render() {
    if (this.props.isLoading) {
      return <p>Loading...</p>;
    }
    return <p>Loaded</p>;
  }
}

export default Loader;