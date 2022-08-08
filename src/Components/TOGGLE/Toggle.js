import React, { useState } from 'react';

const Toggle = () => {

    const [toggle, setToggle] = useState(true);

    return (
        <div>
            {
                toggle && <p style={{backgroundColor: '#fefefe', color: '#0e0e0e'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea iure delectus ipsum doloremque laboriosam sequi quis. Dolorum possimus iure repellat, non eos blanditiis cumque, tempora ratione maxime amet fuga neque ipsum sapiente delectus explicabo! Cum?</p>
            }

            <div><button onClick={()=>{setToggle(!toggle)}}>{toggle ? 'Hide' : 'Show'}</button></div>
        </div>
    );
};

export default Toggle;