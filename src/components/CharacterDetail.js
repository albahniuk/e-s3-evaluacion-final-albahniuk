import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class CharacterDetail extends Component {
  render() {
      const {character} = this.props;

      const characterId = this.props.match.params.id;

      if (character.length > 0 && characterId < character.length) {
          const mycharacter = character[characterId];

          const {name, house, yearOfBirth, patronus, image, alive} = mycharacter;

          return (
            <Fragment>
                    <div className='character'>
                        <img src={image} alt={name} className='character-image'></img>
                        <h2 className='character-name'>{name}</h2>
                        <p className='character-house'>{`Casa: ${house}`}</p>
                        <p className='character-birth'>{`Nacimiento: ${yearOfBirth}`}</p>
                        <p className='character-patronus'>{`Patronus: ${patronus}`}</p>
                        <p className='character-state'>{`Estado: ${(alive) ? "vivo" : "muerto"}`}</p>
                    </div>
                <Link to="/">Volver</Link>
            </Fragment>
          )
      } else {
        return (
            <Fragment>
              <p>No hay datos</p>
              <Link to="/">Volver</Link>
            </Fragment>
        );
      }
  };
}

CharacterDetail.PropTypes = {
    character: PropTypes.arrayOf(PropTypes.object).isRequired,
    characterId: PropTypes.number.isRequired
}

export default CharacterDetail;