import React from 'react'

const TodoItem = (props) =>{
    return <li onClick={() => 
        props.onChecked(props.id)}>{props.item}</li>
}

export default TodoItem