import React, { Component, Fragment } from 'react';
import './stylesheets/App.scss';
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
      filteredCharacter: ''
    }

    this.getCharacters = this.getCharacters.bind(this);
    this.getInput = this.getInput.bind(this);
    this.filterCharacter = this.filterCharacter.bind(this);
  }

  componentDidMount(){
    // this.getCharacters();
    this.getSavedCharacters();
  }

  getCharacters() {
    fetchCharacters()
      .then(data => {
        const cleanCharacters = data.map((item,index) => {
          return {...item, id: index};
        });
        this.saveCharacters(cleanCharacters);
        this.setState({
          characters: cleanCharacters
        });
      });
  }

  saveCharacters(data){
    localStorage.setItem('savedCharacters', JSON.stringify(data));
  }
  
  getSavedCharacters(){
    if(localStorage.getItem('savedCharacters') !== null) {
      const savedCharacters = JSON.parse(localStorage.getItem('savedCharacters'));
      this.setState({
        characters: savedCharacters
      })
    } else {
      this.getCharacters();
    }
  } 

  getInput(e){
    const query = e.currentTarget.value;
    this.setState({
      filteredCharacter: query
    })
  }

  filterCharacter() {
    const {characters, filteredCharacter} = this.state;

    return characters.filter(item => item.name.toLowerCase().includes(filteredCharacter.toLowerCase()));
  }

  render() {
    return (
      <Fragment>
        <header className='app-header'>
        <h1 className='app-title'>Personajes de Harry Potter</h1>
        </header>
        <main className='app-main'>
          <Switch>
            <Route exact path="/" render={()=>(
              <Fragment>
                <Filter getInput={this.getInput}/>
                <CharacterList filterCharacter={this.filterCharacter()}/>
              </Fragment>
            )} />
            <Route path="/character/:id" render={props => <CharacterDetail match={props.match} characters={this.state.characters}/>} />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
