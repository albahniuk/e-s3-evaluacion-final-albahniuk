import React, {Component} from "react";
import PropTypes from 'prop-types';

class CharacterCard extends Component {
  render() {
    const {name, house, image} = this.props;
    return (
        <div className='character'>
            <img src={image} alt={name} className='character-image'></img>
            <h2 className='character-name'>{name}</h2>
            <p className='character-house'>{house}</p>
        </div>
    )
  }
}

CharacterCard.PropTypes = {
    name: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default CharacterCard;