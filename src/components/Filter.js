import React, {Component} from "react";

class Filter extends Component {
  render() {
    return (
      <div className='filter'>
        <input type='text' onKeyUp={this.props.characterInput}></input>
      </div>
    );
  }
}

export default Filter;