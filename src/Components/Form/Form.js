import React, { useState } from 'react';

const Form = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");

        let userInfo = {
            name: name,
            email: email,
            password: password
        }

        console.log(userInfo);
    }



    return (
        <div>
            <h1>Registration Form</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name : </label>
                    <input type="text" name='name' className='name' id='name' required onChange={handleName} value={name}/>
                </div>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input type="email" name='email' className='email' id='email' required onChange={handleEmail} value={email}/>
                </div>
                <div>
                    <label htmlFor="password">Password : </label>
                    <input type="password" name='password' className='password' id='password' required onChange={handlePassword} value={password}/>
                </div>
                <div>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    );
};

export default Form;