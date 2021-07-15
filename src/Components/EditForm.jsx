import React, { Component } from 'react';
import './EditForm.css'

class UserForm extends Component {
    constructor(props){
        super(props);
        this.state = {
             name : props.user.name,
             email : props.user.email,
             gen : props.user.gen,
             id:props.user.id
        }
    }


    handleChange = (e)=>{
        this.setState({ [e.target.name] : e.target.value})
    };

    handleSubmit = (e)=>{
        e.preventDefault()
        this.props.editUser(this.state)


        this.setState({
            name : '',
            email : '',
            gen : ''
        });
        this.props.closeModal();
        
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit} className='form'>
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
               <button type="submit">Save Changes</button>
            </form>
        );
    }
}

export default UserForm;
