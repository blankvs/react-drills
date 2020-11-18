import React, { Component } from "react"
import './App.css'

export default class App extends Component (){
  constructor(){
    super()

    this.state = {
      filterString: "",
      rides: ["motorcycle", "car", "plane", "batmobile", "bike"]
    }
  }

  handleChange(filter) {
    this.setState({filterString: filter})
  }

  render() {
    let ridesToDisplay = this.state.rides.filter((element,index) => {return element.includes(this.state.filterString)})
    .map((element, index) => {return <h2 key={index}>{element}</h2>})
  
    return(
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text"/>
        {ridesToDisplay}
      </div>
    )
  }
} 

  

