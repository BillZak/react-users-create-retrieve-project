
import UserForm from './Components/UserForm'
import UserList from './Components/UserList'
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
        
       

        return (
            <> 
                <UserForm addUser={this.handleAddUser}/>
                <h1 style={{textAlign:'center',marginTop:'50px'}}>Added Users</h1><hr/>
                <UserList  users= {this.state.users}/>
            </>
        );
    }
}

export default App;
