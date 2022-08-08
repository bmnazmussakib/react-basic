import React from 'react';
import useFetch from './useFetch';

const Users = () => {

    const {data, isLoading, error} = useFetch('https://jsonplaceholder.typicode.com/users');
    console.log(data)

    const userElement = data && data.map(user => {
        return <p key={user.id}>{user.name}</p>
    })

    return (
        <div>
            <h1>Users</h1>
            {userElement}
        </div>
    );
};

export default Users;