import {useReducer, useState} from "react";
import {v4 as uuidv4} from "uuid"
import {logDOM} from "@testing-library/react";

function reducer(state, action) {
    switch (action.type) {
        case "add-todo" :
            return {todos: [...state.todos, {text: action.text, completed: false}]};
        case "toggle-todo" :
            return {
                todos: state.todos.map((t, idx) =>
                    idx === action.idx? {...t,completed:!t.completed}:t
                )
            }
        default:
            return state;
    }

}

const Reducer = () => {
    const [{todos}, dispatch] = useReducer(reducer, {todos: []})
    const [text, setText] = useState()
    return (
        <div className="app">
            <form onSubmit={e => {
                e.preventDefault()
                dispatch({type: "add-todo", text});
                setText("")
            }
            }>
                <input type="text" onChange={e => setText(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
            {todos.map((t, idx) => (
                <h1

                    onClick={() => dispatch({type: "toggle-todo", idx})}
                    style={{textDecoration:t.completed?"line-through":""}}
                    key={uuidv4()}>{t.text}</h1>
            ))}
        </div>
    )
}
export default Reducer