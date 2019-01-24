import React, {Component} from "react";
import CharacterCard from "./CharacterCard";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class CharacterList extends Component {
  render() {
    return (
      <ul className='characters__list'>
        {this.props.filterCharacter.map(item => {
          return (
            <li className='characters__list-item' key={item.id}>
              <Link to={`/character/${item.id}`} className='characters__list-item-link'>
                <CharacterCard name={item.name} house={item.house} image={item.image} />
              </Link>
            </li>
          )
        })}
      </ul>
    );
  }
}

CharacterList.propTypes = {
  filterCharacter: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CharacterList;