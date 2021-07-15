import React from 'react';
import User from './User';

const UserList = ({users,deleteUser,editUser}) => {
    
    const userList = users.map((item)=>{
        return(
            <User  user={item} deleteUser = {deleteUser} editUser = {editUser}/>
        )
    })
    

    return (
        <div>
            {userList}
        </div>
    );
}

export default UserList;