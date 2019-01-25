import React, {Component} from "react";
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    return (
      <div className='app-filter'>
        <input className='app-input' type='text' placeholder='Hermione Granger' onKeyUp={this.props.getInput}/>
      </div>
    );
  }
}

Filter.propTypes = {
  getInput: PropTypes.func.isRequired,
}

export default Filter;