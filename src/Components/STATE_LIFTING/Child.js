import React from 'react';

const Child = (props) => {


    const data = 'I am Child Data';

    props.onChildData(data)
    

    return (
        <div>
            <h1>I am Child</h1>
            <h4>Parent Data: {props.data}</h4>
        </div>
    );
};

export default Child;