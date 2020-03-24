import React from 'react'

function TodoItem (props){
    return (
        <div>
            <div className="todo-item">
                <input type="checkbox" />
                <p>{props.item.text}</p>
            </div>
        </div>
    )
}

export default TodoItem
// import React from "react"
// function TodoItem (props){
//     return (
//         <div className="todo-item">
//             <input type="checkbox" />
//             <p>{props.item.text}</p>
//         </div>
//     )
// }
// export default TodoItem