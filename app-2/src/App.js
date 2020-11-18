import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(){
    super()

    this.state = {
      anime: ["HunterxHunter", "Naruto", "AkameGaKill", "GodOfHighSchool", "OnePiece"]
    }
  }

  render(){
    let animeToDisplay = this.state.anime.map((element, index) => {return <h2 key={index}>{element}</h2>})
    return(
      <div className="App">
        {animeToDisplay}
      </div>
    )
  }
}
