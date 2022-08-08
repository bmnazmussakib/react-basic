import React, { useState } from 'react';

const NewTodo = (props) => {


    const [todo, setTodo] = useState('')

    const handleInput = (e) => {
        setTodo(e.target.value)
    }

    const handleAddTodo = (e) => {
        e.preventDefault();
        props.onNewTodo(todo);
    }

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor="todo">New Todo: </label>
                <input type="text" name='todo' id='todo' onChange={handleInput}/>
                <button>Add Todo</button>
            </form>
        </div>
    );
};

export default NewTodo;