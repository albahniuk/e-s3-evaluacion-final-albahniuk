import React, {Component} from "react";

class Filter extends Component {
  render() {
    return (
      <div className='app-filter'>
        <input type='text' placeholder='Hermione Granger' onKeyUp={this.props.characterInput}/>
      </div>
    );
  }
}

export default Filter;