import React from "react"
import Joke from "./Joke"
import jokes from "./content"
function App() {

  var jokescompo = jokes.map(jo => <Joke question = {jo.question} answer={jo.answer} />
)
  //console.log(jokescompo);



  return (
    <div>
       {jokescompo}

   
      
    </div>
  )
}

export default App
