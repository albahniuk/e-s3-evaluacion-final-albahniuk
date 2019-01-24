import React, { Component, Fragment } from 'react';
import './App.scss';
import CharacterList from './components/CharacterList';

const ENDPOINT = "http://hp-api.herokuapp.com/api/characters";

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
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
      const cleanCharacters = data.map((item,index) => {
        return {...item, id: index};
      });
      console.log(cleanCharacters);
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
        <div className='filter'>
          <input type='text' onKeyUp={this.characterInput}></input>
        </div>
      </header>
      <main>
        <CharacterList filterCharacter={this.filterCharacter()}/>
      <div className="app">
        <ul className='characters__list'>
          {this.state.characters.map((item,index) => {
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
      </div>
      </main>
      </Fragment>
    );
  }
}

export default App;
