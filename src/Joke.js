import React from "react"

function Joke(props) {
    return (
        <div>
             <h1>{props.content.question} </h1>
             <h2>{props.content.answer} </h2>


        </div>
       

    )
}

export default Joke 