import React, { useState } from 'react'

const TodoItem = (props) =>{

    const [strike, setStrike ] = useState(false)

    const strikeHandler = () => {
        setStrike(prevValue => {
            return !prevValue
        })
    }

    return <li onClick={strikeHandler} style={{textDecoration: strike ? 'line-through' : "none"}}>{props.item}</li>
}

export default TodoItem