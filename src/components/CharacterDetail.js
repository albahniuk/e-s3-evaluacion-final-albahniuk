import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class CharacterDetail extends Component {
  render() {
      const {characters} = this.props;

      const characterId = this.props.match.params.id;

      if (characters.length > 0 && characterId < characters.length) {
          const mycharacter = characters[characterId];

          const {name, house, yearOfBirth, patronus, image, alive} = mycharacter;

          return (
            <Fragment>
                    <div className='detail-card'>
                        <img src={image} alt={name} className='detail-card__image'></img>
                        <div className='detail-card__info'>
                            <h2 className='detail-card__name'>{name}</h2>
                            <p className='detail-card__house'>{`Casa: ${house}`}</p>
                            <p className='detail-card__birth'>{`Nacimiento: ${yearOfBirth}`}</p>
                            <p className='detail-card__patronus'>{`Patronus: ${patronus}`}</p>
                            <p className='detail-card__state'>{`Estado: ${(alive) ? "vivo" : "muerto"}`}</p>
                        </div>
                    </div>
                <Link to="/" className='go-back'>Volver</Link>
            </Fragment>
          )
      } else {
        return (
            <Fragment>
              <p className='message'>No hay datos</p>
              <Link to="/" className='go-back'>Volver</Link>
            </Fragment>
        );
      }
  };
}

CharacterDetail.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CharacterDetail;