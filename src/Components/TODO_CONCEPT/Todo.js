import React from 'react';

const Todo = (props) => {



    return (
        <div>
            <ul>
                <li>{props.todo}</li>
            </ul>
        </div>
    );
};

export default Todo;