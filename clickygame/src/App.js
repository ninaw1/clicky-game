import React, { Component } from 'react'
import './App.css'

// // shuffling cards function 
// function shuffleCards(array) {
//   for (let i = array.length -1; i > 0; i--) {
//     // randomize card array 
//     let j = Math.floor(Math.random() * (i + 1))
//     [array[i], arry[j] = array[i], array[i]]
//   }
//   // return our randomized array  
//   return array 
// }

class App extends Component {
  state = {
    cards, 
    currentScore: 0, 
    highScore: 0, 
    clicked: [],
  }

  // building our handleClick function, and taking card out of array 
  handleClick = event => {
    const currentCard = event.target.id
    const cardClicked = 
    this.state.clickedCard.indexOf(currentCard) > -1

    if (cardClicked) {
      this.setState({
        card: this.state.card.sort(function(a, b) {
          return 0.5 - Math.random()
        })
      })
    }
  }

  render() {
    return (
    <>
    </>
    )
  }
}

export default App
