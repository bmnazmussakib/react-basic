import React from 'react';
import Todo from './Todo';

const Todos = (props) => {

    const data = props.data;
    console.log(data)

    return (
        <div>
            {
                data.map(todo => <Todo todo={todo}/>)
            }
        </div>
    );
};

export default Todos;