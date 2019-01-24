import React, {Component} from "react";

class CharacterList extends Component {
  render() {
    return (
        <ul className='characters__list'>
          {this.props.filterCharacter.map((item,index) => {
            return (
              <li className='characters__list-item' key={index}>
                <div>
                  <h2 className='character-name'>{item.name}</h2>
                  <p className='character-house'>{item.house}</p>
                  <img src={item.image} alt={item.name}></img>
                </div>
              </li>
            )
          })}
        </ul>
    );
  }
}

export default CharacterList;