import User from './Components/User'
import UserForm from './Components/UserForm'
import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = { users :[]}
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
                <h1 style={{textAlign:'center',marginTop:'50px'}}>Added Users</h1><hr/>
                {users}
            </>
        );
    }
}

export default App;
