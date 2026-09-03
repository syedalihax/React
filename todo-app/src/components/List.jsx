import React from 'react'

const List = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={() =>{props.onEdit(props.index)}}>Edit</button>
            <button onClick={() => { props.onDelete(props.index) }}>delete</button>
        </div>
    )
}

export default List