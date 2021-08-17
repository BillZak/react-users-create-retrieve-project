
import UserForm from './Components/UserForm'
import UserList from './Components/UserList'
import React, { Component } from 'react';

class App extends Component {
    

    handleAddUser = (newUser) => {
        newUser.id = Math.random().toString();
        this.setState({ 
            users: [...this.state.users,newUser] 
        })
    }

    handleDeleteUser =(userId)=> {
        const savedusers = this.state.users.filter( 
              (user)=>{
                 return user.id !==userId;
              })
              this.setState({users: savedusers})
      }

      handleEditUser = (updatedUser) => {
        this.setState({
          users: this.state.users.map((user) =>
            user.id === updatedUser.id ? updatedUser : user
          ),
        });
      };

    render() {
        
       

        return (
            <> 
                <UserForm />
                <h1 style={{fontSize:'40px',marginLeft:'500px',marginTop:'50px'}}>Added Users</h1>
                <UserList />
            </>
        );
    }
}

export default App;
