import React from "react"
import Joke from "./Joke"
import jokes from "./content"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name : "Sam",
      age : 20
    }
  }

  render() {
    return (
     
      <div>{this.state.name}</div>
    )
  }

}
{/*function App() {

  var jokescompo = jokes.map(jo => <Joke question = {jo.question} answer={jo.answer} />
)
  //console.log(jokescompo);



  return (
    <div>
       {jokescompo}

   
      
    </div>
  )
}
*/}
export default App
