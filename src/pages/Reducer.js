/*
import {useReducer} from "react";
import PageLayOut from "./pageLayOut";

let ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT :
            return {count: state.count + 1}
        case ACTIONS.DECREMENT:
            return {count: state.count - 1}
        default:
            return state
    }
}


const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})
    return (
        <PageLayOut hShow={true}>
            <div>
                <h3>Hello</h3>
                <h3>Count : {state.count}</h3>
                <button onClick={() => dispatch({type: ACTIONS.INCREMENT})}>increment</button>
                <button onClick={() => dispatch({type: ACTIONS.DECREMENT})}>decrement</button>
            </div>
        </PageLayOut>
    )
}
export default Reducer*/

import {useReducer, useState} from "react";
import PageLayOut from "./pageLayOut";

let ACTIONS = {
    ADD_TODO: "add-todo",
    TOGGLE_TODO: "toggle-todo",
    DELETE_TODO: "delete-todo",
}

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        // case ACTIONS.TOGGLE_TODO:
//             return todos.map(todo => {
//                 if (todo.id === action.payload.id) {
//                     return {...todo, completed: !todo.completed};
//                 }
//                 return todo; // return the original object if it doesn't match
//             });
//
        case ACTIONS.TOGGLE_TODO :
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {...todo, completed: !todo.completed}
                }
                return todo;
            })

        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id != action.payload.id)
        default:
            return todos;

    }
}

function newTodo(name) {
    return {id: Date.now(), name: name, completed: false}
}


const Reducer = () => {

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}})
    }

    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')
    console.log(todos)

    return (
        <PageLayOut hShow={true}>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                </form>
                {
                    todos.map(todo =>
                        <div onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>
                            <h2
                                style={{textDecoration: todo.completed ? "line-through" : "none"}}
                                className="todoname">
                                {todo.name}
                            </h2>
                            <button onClick={()=>dispatch({type:ACTIONS.DELETE_TODO , payload:{id: todo.id}})}>Hello world</button>
                        </div>)
                }
            </div>
        </PageLayOut>
    )
}
export default Reducer
