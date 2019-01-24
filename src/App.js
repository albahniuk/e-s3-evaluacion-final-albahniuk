import React, { Component, Fragment } from 'react';
import './App.scss';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';
import {fetchCharacters} from './services/CharactersService';
import Filter from './components/Filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      characterFilter: ''
    }

    this.getCharacters = this.getCharacters.bind(this);
    this.characterInput = this.characterInput.bind(this);
    this.filterCharacter = this.filterCharacter.bind(this);
  }

  componentDidMount(){
    this.getCharacters()
  }

  getCharacters() {
    fetchCharacters()
    .then(response => response.json())
    .then(data => {
      const cleanCharacters = data.map((item,index) => {
        return {...item, id: index};
      });
      this.setState({
        characters: cleanCharacters
      })
    })
  }

  characterInput(e){
    const query = e.currentTarget.value;
    this.setState({
      characterFilter: query
    })
  }

  filterCharacter() {
    const {characters, characterFilter} = this.state;

    return characters.filter(item => item.name.toLowerCase().includes(characterFilter.toLowerCase()));
  }

  render() {
    return (
      <Fragment>
      <header>
      <h1 className='title'>Harry Potter characters</h1>
        <Filter characterInput={this.characterInput}/>
      </header>
      <main>
        <CharacterList filterCharacter={this.filterCharacter()}/>
        <CharacterCard character={this.state.characters}/>
      </main>
      </Fragment>
    );
  }
}

export default App;
