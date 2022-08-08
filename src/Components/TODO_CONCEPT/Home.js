import React, { useState } from 'react';
import NewTodo from './NewTodo';
import Todos from './Todos';

const Home = () => {

    const dummyTodo = ["Todo 1", "Todo 2"];

    const [newTodo, setNewTodo] = useState(dummyTodo)

    const handleNewTodo = (newTodoData) => {
        setNewTodo([...newTodo, newTodoData])
    }

    return (
        <div>
            <NewTodo onNewTodo={handleNewTodo}/>
            <Todos data={newTodo}/>
        </div>
    );
};

export default Home;