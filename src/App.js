import User from './Components/User'
import UserForm from './Components/UserForm'
import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = { users :[
            {
                name : "bill",
                email : "bill@email.com",
                gen : 12
            },
            {
                name : "jude",
                email : "jude@email.com",
                gen : 11
            },
            {
                name : "nate",
                email : "nate@email.com",
                gen : 15
            }
        ]}
    }

    handleAddUser = (newUser) => {
        this.setState({ 
            users: [...this.state.users,newUser] 
        })
    }

    render() {
        
        const users = this.state.users.map((user,index)=>{
               return(
                   <User  user={user} index={index}/>
               )
        })

        return (
            <> 
                <UserForm addUser={this.handleAddUser}/>
                <h2>Added Users</h2><hr/>
                {users}
            </>
        );
    }
}

export default App;
