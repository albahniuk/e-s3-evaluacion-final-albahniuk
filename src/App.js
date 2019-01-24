import React, { Component, Fragment } from 'react';
import './App.scss';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import {fetchCharacters} from './services/CharactersService';
import Filter from './components/Filter';
import {Switch, Route} from 'react-router-dom';


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
      .then(data => {
        const cleanCharacters = data.map((item,index) => {
          return {...item, id: index};
        });
        this.setState({
          characters: cleanCharacters
        });
      });
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
        <h1 className='app-title'>Harry Potter characters</h1>
        <Switch>
          <Route exact path="/" render={()=>(
            <Fragment>
              <Filter characterInput={this.characterInput}/>
              <CharacterList filterCharacter={this.filterCharacter()}/>
            </Fragment>
          )} />
          <Route path="/character/:id" render={props => <CharacterDetail match={props.match} character={this.state.characters}/>} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
