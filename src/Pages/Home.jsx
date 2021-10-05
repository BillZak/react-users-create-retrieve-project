import React from 'react';
import UserList from '../Components/UserList'
import UserForm from '../Components/UserForm'



const Home = () => {
    return (
        <>
            <UserForm />
                <h1 style={{fontSize:'40px',marginLeft:'500px',marginTop:'50px'}}>Added Users</h1>
            <UserList />
        </>
    );
}

export default Home;
