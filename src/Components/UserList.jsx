import React from 'react';
import User from './User';

const UserList = ({users}) => {
    
    const userList = users.map((item)=>{
        return(
            <User  user={item}/>
        )
    })
    

    return (
        <div>
            {userList}
        </div>
    );
}

export default UserList;