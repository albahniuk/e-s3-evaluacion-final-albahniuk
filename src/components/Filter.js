import React, {Component} from "react";
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    return (
      <div className='app-filter'>
        <input className='app-input' type='text' placeholder='Hermione Granger' onKeyUp={this.props.getInput}/>
        <input className='input-house' type='text' placeholder='Gryffindor' onKeyUp={this.props.handleHouses} />
        <select onChange={this.props.handleSelect}>
          <option value='alive' >Vivo</option>
          <option value='dead'>Muerto</option>
        </select>
      </div>
    );
  }
}

Filter.propTypes = {
  getInput: PropTypes.func.isRequired,
}

export default Filter;