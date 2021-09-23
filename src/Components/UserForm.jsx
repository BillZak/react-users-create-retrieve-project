import React, { Component } from 'react';
import {addUser,  getAllUsers} from '../actions/userActions'
import { connect } from 'react-redux'
import '../Form.css'

class UserForm extends Component {
    constructor(props){
        super(props);
        this.state = {
             name : '',
             email : '',
             gen : ''
        }
    }


    handleChange = (e)=>{
        this.setState({ [e.target.name] : e.target.value})
    };

    handleSubmit = (e)=>{
        e.preventDefault()
        this.props.addNewUser(this.state)


        this.setState({
            name : '',
            email : '',
            gen : ''
        });
        
    }
    componentDidMount(){
        this.props.getAllUsers()
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
               <div className="name">
                  <label htmlFor="name">Name</label><br/>
                  <input type="text" name="name" value={this.state.name} 
                  onChange={this.handleChange} placeholder="User Name"/>
               </div>
               <div className="email">
                  <label htmlFor="name">Email</label><br/>
                  <input type="email" name="email" value={this.state.email}
                   onChange={this.handleChange} placeholder="Example@email.com"/>
               </div>
               <div className="gen">
                  <label htmlFor="name">Gen</label><br/>
                  <input type="number" name="gen" value={this.state.gen}
                   onChange={this.handleChange} placeholder="Gen"/>
               </div>
               <button type="submit">Add User</button>
            </form>
        );
    }
}

const mapDispatchToProps  = {
    
        addNewUser: addUser,
        getAllUsers:getAllUsers
}

export default connect(null,mapDispatchToProps)(UserForm);
