import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class CharacterDetail extends Component {
    getHouse(school) {
        if (school === 'Gryffindor') {
            return 'gryffindor'
        } else if (school === 'Hufflepuff') {
            return 'hufflepuff'
        } else if (school === 'Ravenclaw') {
            return 'ravenclaw'
        } else if (school === 'Slytherin') {
            return 'slytherin'
        }
    }

    getState(state) {
        if(state){
            return "vivo"
        } else {
            return (<i className="fas fa-skull-crossbones"></i>);
        }
    }

    render() {
        const { characters } = this.props;

        const characterId = this.props.match.params.id;

        if (characters.length > 0 && characterId < characters.length) {
            const mycharacter = characters[characterId];

            const { name, house, yearOfBirth, patronus, image, alive } = mycharacter;

            return (
                <Fragment>
                    <div className='detail-card'>
                        <img src={image} alt={name} className='detail-card__image'></img>
                        <div className='detail-card__info'>
                            <h2 className='detail-card__name'>{name}</h2>
                            <p className='detail-card__house'>{`Casa: ${house}`}</p>
                            <p className='detail-card__birth'>{`Nacimiento: ${yearOfBirth}`}</p>
                            <p className='detail-card__patronus'>{`Patronus: ${patronus}`}</p>
                            <p className='detail-card__state'>Estado: {this.getState(alive)}</p>
                        </div>
                        <div className={`${this.getHouse(house)}`}></div>
                    </div>
                    <Link to="/" className='go-back'>Volver</Link>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <p className='message'>No hay datos</p>
                    <Link to="/" className='go-back'><p>Volver</p></Link>
                </Fragment>
            );
        }
    };
}

CharacterDetail.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
    characterId: PropTypes.object
};

export default CharacterDetail;